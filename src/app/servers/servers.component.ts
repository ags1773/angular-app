import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = "";
  serverCreated = false;

  onCreateServer(){
    this.serverCreated = true;
  }

  constructor() {}
  ngOnInit() {}
}
