import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Pizza } from '../pizza.model';
import { PizzaService } from '../pizza.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit, OnDestroy {
  pizzas: Pizza[];
  subscription: Subscription;

  constructor(private pizzaService: PizzaService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getPizzas();
    this.subscription = this.pizzaService.pizzasChanged
      .subscribe(
        (pizzas: Pizza[]) => {
          this.pizzas = pizzas;
        }
      );
    this.pizzas = this.pizzaService.getPizzas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
