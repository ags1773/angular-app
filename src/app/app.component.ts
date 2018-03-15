import { Component } from '@angular/core';
import { Account } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Account[] = [
    new Account('Mr. Benedict', 'Inactive'),
    new Account('Garry', 'Active'),
    new Account('test1234', 'Hidden')
  ];

  addAccount(event){
    this.accounts.push(new Account(event.name, event.status));
  }
  onStatusChange(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
