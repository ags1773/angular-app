import { Account } from './account.model';

export class AccountsService {

  accounts: Account[] = [
    new Account('Mr. Benedict', 'Inactive'),
    new Account('Garry', 'Active'),
    new Account('test1234', 'Hidden')
  ];

  addAccount(account: Account){
    this.accounts.push(account);
  }
  updateStatus(id: number, newStatus: string){
    this.accounts[id].status = newStatus;
  }
}
