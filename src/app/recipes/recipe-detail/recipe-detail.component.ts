import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from "../recipes.model";
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @ViewChild('dropdownMenu') dropdownMenu:ElementRef;
  recipe: Recipe;

  constructor(private recipesSrv: RecipesService) { }

  ngOnInit() {
    this.recipesSrv.selectedRecipe.subscribe(
      (clickedRecipe: Recipe) => {this.recipe = clickedRecipe}
    );
  }
  toggleDropdown(){
    this.dropdownMenu.nativeElement.classList.toggle('show');
  }
}
