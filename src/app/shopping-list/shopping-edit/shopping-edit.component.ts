import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("qtyInput") qtyInput: ElementRef;
  @Output() onAddIngredient = new EventEmitter<{name:string, qty:number}>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.onAddIngredient.emit({name: this.nameInput.nativeElement.value, qty: this.qtyInput.nativeElement.value});
  }
}
