import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipes.model"
import { RECIPES } from "../../mock-data/mock-recipes";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  mockRecipes:Recipe[] = RECIPES;
  @Output() recipeItemClicked = new EventEmitter<Recipe>();
  @Output() addRecipeClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    // if(this.mockRecipes[0]){
    //   this.recipeItemClicked.emit(this.mockRecipes[0]);
    // }
  }
  onAddRecipe(){
    this.addRecipeClicked.emit(null);
  }

  onRecipeItemClick(recipe){
    this.recipeItemClicked.emit(recipe);
  }

}
