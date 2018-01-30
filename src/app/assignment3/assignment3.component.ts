import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  clickArray = [];
  showArray = false;
  constructor() {}

  onBtnClick() {
    this.showArray = !this.showArray;
    // this.clickArray.push(this.clickArray.length + 1);
    this.clickArray.push(new Date());
  }

  ngOnInit() {
  }

}
