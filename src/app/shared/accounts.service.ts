import { Injectable, EventEmitter } from '@angular/core';
import { Account } from './account.model';
import { LoggingService } from './logging.service';

@Injectable()

export class AccountsService {

  constructor(private loggingSrv: LoggingService) {}

  accounts: Account[] = [
    new Account('Mr. Benedict', 'Inactive'),
    new Account('Garry', 'Active'),
    new Account('test1234', 'Hidden')
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(account: Account){
    this.accounts.push(account);
    this.loggingSrv.logStatusChange(account.status);
  }
  updateStatus(id: number, newStatus: string){
    this.accounts[id].status = newStatus;
    this.loggingSrv.logStatusChange(newStatus);
  }

}
