import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];

  constructor(private recipesSrv: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesSrv.getAllRecipes();
  }
  // onAddRecipe(){
  //   this.addRecipeClicked.emit(null);
  // }

}
