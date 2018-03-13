import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe:boolean = true;
  showShoppingList:boolean = false;

  onRecipesNavClicked(){
    this.showRecipe = true;
    this.showShoppingList = false;
  }
  onShoppingListNavClicked(){
    this.showRecipe = false;
    this.showShoppingList = true;
  }
}
