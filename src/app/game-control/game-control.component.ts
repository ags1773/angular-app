import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tickTock: EventEmitter<number> = new EventEmitter();
  x:number = 0;
  ctr: number = 1;

  constructor() { }

  ngOnInit() {
  }
  onStart(){
    this.x = setInterval(() => {
      this.tickTock.emit(this.ctr);
      this.ctr++;
    }, 1000);
  }
  onStop(){
    clearInterval(this.x);
    this.x = 0;
    this.ctr = 0;
  }

}
