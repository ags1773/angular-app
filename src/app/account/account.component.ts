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
  @Input() id: number;
  @Output() accStatusChange = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingSrv: LoggingService) { }

  ngOnInit() { }

  changeAccStatus(newStatus){
    this.accStatusChange.emit({id: this.id, newStatus: newStatus});
    this.loggingSrv.logStatusChange(newStatus);
  }

}
