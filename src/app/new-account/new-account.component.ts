import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../shared/account.model';
import { LoggingService } from "../shared/logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() newAccAdded = new EventEmitter<Account>();

  constructor(private loggingSrv: LoggingService) { }

  ngOnInit() { }

  onAddAccount(name,status){
    this.newAccAdded.emit({name:name, status:status});
    // console.log('A server status changed, new status: ' + status);
    this.loggingSrv.logStatusChange(status);
  }
}
