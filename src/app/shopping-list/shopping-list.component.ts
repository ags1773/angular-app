import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Mushrooms", 34),
    new Ingredient("Carrots", 17),
    new Ingredient("Beets", 109),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient:{name: string, qty: number}){
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.qty));
  }

}
