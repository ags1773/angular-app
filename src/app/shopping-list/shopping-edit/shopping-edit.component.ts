import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName:string = '';
  ingredientQty:number;

  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListSrv.selectedIngredient.subscribe(
      (selectedIngredient: Ingredient) => {this.ingredientName = selectedIngredient.name; this.ingredientQty = selectedIngredient.quantity;}
    );
  }

  onAdd(){
    this.shoppingListSrv.addIngredient(new Ingredient(this.ingredientName, this.ingredientQty));
  }


}
