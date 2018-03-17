import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingList } from '../mock-data/mock-shoppingList';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[];
  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit() {
    this.shoppingList = this.shoppingListSrv.getShoppingList();
    this.shoppingListSrv.ingredientsChanged.subscribe(
      (updatedShoppingList: Ingredient[]) => {this.shoppingList = updatedShoppingList;}
    );
  }

}
