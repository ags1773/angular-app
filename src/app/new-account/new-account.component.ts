import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountsService } from "../shared/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsSrv: AccountsService) {
    this.accountsSrv.statusUpdated.subscribe(
      (status: string) => alert("New status -> " + status)
    );
  }

  ngOnInit() { }

  onAddAccount(name: string, status: string){
    this.accountsSrv.addAccount({name: name, status: status});
  }
}
