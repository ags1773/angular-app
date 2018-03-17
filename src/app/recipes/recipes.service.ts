import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
// import { Ingredient } from '../shared/ingredient.model';
import { RECIPES } from '../mock-data/mock-recipes';
// import { INGREDIENTS } from '../mock-data/mock-ingredients';

export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();

  getAllRecipes(){
    return RECIPES.slice();
  }
}
