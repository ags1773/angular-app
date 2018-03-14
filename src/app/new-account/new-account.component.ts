import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../shared/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() newAccAdded = new EventEmitter<Account>();

  constructor() { }

  ngOnInit() { }

  onAddAccount(name,status){
    this.newAccAdded.emit({name:name, status:status});
    console.log('A server status changed, new status: ' + status);
  }
}
