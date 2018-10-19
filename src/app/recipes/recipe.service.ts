import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe('Test1','This is a test', 'https://images.media-allrecipes.com/images/56589.png',[
        new Ingredient('Salad', 1),
        new Ingredient('Fries', 2)
        ]),
    new Recipe('Test2','This is a test2', 'https://images.media-allrecipes.com/images/56589.png',[
        new Ingredient('Salsa', 1),
        new Ingredient('French toast', 2)
               ])
    ];
    constructor(private slService: ShoppingListService){
        
    }

  getRecipes (){
      return this.recipes.slice();
  }
  getRecipe(index: number){
      return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addRecipeIngredirents(ingredients);
  }
}