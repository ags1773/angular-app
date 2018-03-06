import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipes.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe:Recipe;
  addBtnClicked:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddRecipe(){
    this.recipe = undefined;
    this.addBtnClicked = true;
  }
  onRecipeListItemClick(Recipe:Recipe){
    this.recipe = Recipe;
  }

}
