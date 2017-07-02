import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})

export class PizzaEditComponent implements OnInit {
  id: number;
  editMode = false;
  pizzaForm: FormGroup;

  get ingredients(): FormArray {
    return this.pizzaForm.get('ingredients') as FormArray;
  };

  constructor(private route: ActivatedRoute,
              private pizzaService: PizzaService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {    
    const newPizza = new Pizza(
                          this.pizzaForm.value['name'],
                          this.pizzaForm.value['imagePath'],
                          this.pizzaForm.value['ingredients'],
                          this.pizzaForm.value['comments']
                          //this.pizzaService.getComments(this.id)
                          );
    if (this.editMode) {
      this.pizzaService.updatePizza(this.id, newPizza);
    } else {
      this.pizzaService.addPizza(newPizza);
    }

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.pizzaForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'price': new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.pizzaForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let pizzaName = '';
    let imagePath = '';
    let pizzaIngredients = new FormArray([]);

    if (this.editMode) {
      const pizza = this.pizzaService.getPizza(this.id);
      pizzaName = pizza.name;
      imagePath = pizza.imagePath;
      if (pizza['ingredients']) {
        for (let ingredient of pizza.ingredients) {
          pizzaIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'price': new FormControl(ingredient.price, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }


    this.pizzaForm = new FormGroup({
      'name': new FormControl(pizzaName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'ingredients': pizzaIngredients
    });
  }
}
