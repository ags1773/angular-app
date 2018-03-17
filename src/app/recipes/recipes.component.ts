import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipes.model";
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  addBtnClicked:boolean = false;

  constructor(private recipesSrv: RecipesService) { }

  ngOnInit() { }

  // onAddRecipe(){
  //   this.recipe = undefined;
  //   this.addBtnClicked = true;
  // }


}
