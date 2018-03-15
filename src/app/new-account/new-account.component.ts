import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { LoggingService } from "../shared/logging.service";
import { AccountsService } from "../shared/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingSrv: LoggingService, private accountsSrv: AccountsService) { }

  ngOnInit() { }

  onAddAccount(name: string, status: string){
    this.accountsSrv.addAccount({name: name, status: status});
    this.loggingSrv.logStatusChange(status);
  }
}
