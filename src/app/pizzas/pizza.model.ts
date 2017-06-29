import { Ingredient } from '../shared/ingredient.model';
import { Comment } from '../shared/comment.model';

export class Pizza {
    public name: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public comments: Comment[];

    constructor(name: string, imagePath: string, ingredients: Ingredient[], comments: Comment[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.comments = comments;
    }
}