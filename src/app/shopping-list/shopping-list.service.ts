import {Ingredient} from '../shared/ingredient.model';

import {Subject} from 'rxjs';
export class ShoppingListService {
     private ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)]
    
    ingredientsChanged = new Subject<Ingredient[]>();
    
    getIngredients(){
      return  this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addRecipeIngredirents(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}