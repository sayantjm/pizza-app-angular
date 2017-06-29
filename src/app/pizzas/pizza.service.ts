import { Pizza } from './pizza.model';
import { Ingredient } from '../shared/ingredient.model';
import { Comment } from '../shared/comment.model';

import { Subject } from 'rxjs/Subject';

export class PizzaService {
    pizzasChanged = new Subject<Pizza[]>();

    private pizzas: Pizza[] = [
        new Pizza('4 Cheese Pizza', 'http://www.jackspizza.com/media/1039/cheese.jpg',
            [
                new Ingredient('Tomato', 6),
                new Ingredient('Cheese', 3)
            ],
            [
                new Comment('Juanma', 5, 'This is a comment', new Date('22/Jun/2017'))
            ]),
        new Pizza('Supreme Pizza', 'https://image.shutterstock.com/z/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
            [
                new Ingredient('Bacon', 3),
                new Ingredient('Cheese', 3)
            ],
            [
                new Comment('Juanma', 5, 'This is a comment', new Date('22/Jun/2017'))
            ]),
        new Pizza('Veggie Pizza', 'http://www.medicalmedium.com/blog-photos/Veggie%20Pizza.jpg',
            [
                new Ingredient('Tomato', 6),
                new Ingredient('Cheese', 3)
            ],
            [
                new Comment('Juanma', 5, 'This is a comment', new Date('22/Jun/2017'))
            ]),
        new Pizza('Meat Pizza', 'http://www.foodchannel.com/media/uploads/galleries/_thumbs/masters_universe_meat_pizza_jpg_1280x800_q85.jpg',
            [
                new Ingredient('Tomato', 6),
                new Ingredient('Cheese', 3)
            ],
            [
                new Comment('Juanma', 5, 'This is a comment', new Date('22/Jun/2017'))
            ]),
        new Pizza('Pepperoni Pizza', 'http://nardonebros.com/wp-content/uploads/2015/03/16wsup2.jpg',
            [
                new Ingredient('Tomato', 6),
                new Ingredient('Cheese', 3)
            ],
            [
                new Comment('Juanma', 5, 'This is a comment', new Date('22/Jun/2017'))
            ])
    ];

    getPizzas() {
        return this.pizzas.slice();
    }

    getPizza(index: number) {
        return this.pizzas[index];
    }

    getPizzaPrize(index: number) {
        let prize = 0.0;
        let ingredients = this.pizzas[index].ingredients;

        for (let ingredient of ingredients) {
            prize = prize + ingredient.price;
        }

        return prize + 5;
    }

    addComment(index: number, comment: Comment) {
        this.pizzas[index].comments.push(comment);
        this.pizzasChanged.next(this.pizzas.slice());
    }

    addPizza(pizza: Pizza) {
        this.pizzas.push(pizza);
        this.pizzasChanged.next(this.pizzas.slice());
    }

    updatePizza(index: number, newPizza: Pizza) {
        this.pizzas[index] = newPizza;
        this.pizzasChanged.next(this.pizzas.slice());
    }

    deletePizza(index: number) {
        this.pizzas.splice(index, 1);
        this.pizzasChanged.next(this.pizzas.slice());
    }

    setPizzas(pizzas: Pizza[]) {
        this.pizzas = pizzas;
        this.pizzasChanged.next(this.pizzas.slice());
    }
}