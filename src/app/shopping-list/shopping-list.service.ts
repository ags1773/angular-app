import { EventEmitter } from '@angular/core';
import { ShoppingList } from '../mock-data/mock-shoppingList';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  selectedIngredient = new EventEmitter<Ingredient>();
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getShoppingList(){
    return ShoppingList.slice();
  }
  addIngredient(newIndredient:Ingredient){
    ShoppingList.push(newIndredient);
    this.ingredientsChanged.emit(ShoppingList.slice());
  }
  // removeIngredient(id:number){
  //   ShoppingList.splice(id, 1);
  // }
  // editIndredient(id:number, newIngredient:Ingredient){
  //   ShoppingList[id].name = newIngredient.name;
  //   ShoppingList[id].quantity = newIngredient.quantity;
  // }

}
