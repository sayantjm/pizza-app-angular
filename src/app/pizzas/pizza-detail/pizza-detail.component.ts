import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { PizzaService } from '../pizza.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Pizza } from '../pizza.model';
import { Ingredient } from '../../shared/ingredient.model';
import { Comment } from '../../shared/comment.model';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  pizza: Pizza;
  id: number;
  totalPrize: number;

  constructor(private pizzaService: PizzaService,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.pizza = this.pizzaService.getPizza(this.id);
        this.totalPrize = this.pizzaService.getPizzaPrize(this.id);
      }
      );
  }

  onEditPizza() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeletePizza() {
    this.pizzaService.deletePizza(this.id);
    this.dataStorageService.storePizzas()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.router.navigate(['/pizzas']);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newComment = new Comment('username', value.points, value.comment, new Date());
    this.pizzaService.addComment(this.id, newComment);

    form.reset();
  }
}
