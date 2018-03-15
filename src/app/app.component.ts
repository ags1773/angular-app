import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/accounts.service';
import { Account } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
