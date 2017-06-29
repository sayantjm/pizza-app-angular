import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { PizzaService } from '../pizzas/pizza.service';
import { Pizza } from '../pizzas/pizza.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private pizzasService: PizzaService) { }

    storePizzas() {
        return this.http.put('https://ng-pizza-shop.firebaseio.com/pizzas.json', this.pizzasService.getPizzas());
        //return this.http.put('http://localhost:8080/pizzas.json', this.pizzasService.getPizzas());
    }

    getPizzas() {
        this.http.get('https://ng-pizza-shop.firebaseio.com/pizzas.json')
        .map(
            (response: Response) => {
                const pizzas: Pizza[] = response.json();
                for (let pizza of pizzas) {
                    if (!pizza['ingredients']) {
                        pizza['ingredients'] = [];
                    }
                }
                return pizzas;
            }
        )
        .subscribe(
            (pizzas:Pizza[]) => {
                this.pizzasService.setPizzas(pizzas);
            }
        )
    }
}