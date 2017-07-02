import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

import { PizzaService } from '../pizzas/pizza.service';
import { AuthService } from '../auth/auth.service';
import { Pizza } from '../pizzas/pizza.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private pizzasService: PizzaService, private authService: AuthService) { }

    storePizzas() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-pizza-shop.firebaseio.com/pizzas.json?auth=' + token, this.pizzasService.getPizzas());
        //return this.http.put('http://localhost:8080/pizzas', this.pizzasService.getPizzas());
        //return this.http.put('http://localhost:8080/pizzas.json', this.pizzasService.getPizzas());
    }

    getPizzas() {
        const token = this.authService.getToken();

        this.http.get('https://ng-pizza-shop.firebaseio.com/pizzas.json?auth=' + token)
        //this.http.get('https://pizzaback.herokuapp.com/pizzas')
        //this.http.get('http://localhost:8080/pizzas')
        .map(
            (response: Response) => {
                const pizzas: Pizza[] = response.json();
                for (let pizza of pizzas) {
                    if (!pizza['ingredients']) {
                        pizza['ingredients'] = [];
                    }
                    if (!pizza['comments']) {
                        pizza['comments'] = [];
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