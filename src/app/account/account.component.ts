import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() id: number;

  constructor(private accountsSrv: AccountsService) { }

  ngOnInit() { }

  changeAccStatus(newStatus){
    this.accountsSrv.updateStatus(this.id, newStatus);
  }

}
