import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../shared/account.model';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Output() accStatusChange = new EventEmitter<Account>();

  constructor(private loggingSrv: LoggingService) { }

  ngOnInit() { }

  changeAccStatus(newStatus){
    this.accStatusChange.emit({name: this.account.name, status: newStatus});
    // console.log('A server status changed, new status: ' + newStatus);
    this.loggingSrv.logStatusChange(newStatus);
  }

}
