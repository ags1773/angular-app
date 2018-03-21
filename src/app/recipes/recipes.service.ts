import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { RECIPES } from '../mock-data/mock-recipes';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  constructor(private shoppingListSrv: ShoppingListService){}

  selectedRecipe = new EventEmitter<Recipe>();

  getAllRecipes(){
    return RECIPES.slice();
  }
  addIngredientsToShoppingList(newIngredients: Ingredient[]){
    this.shoppingListSrv.addIngredients(newIngredients);
  }
}
