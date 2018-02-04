import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bpCreated = new EventEmitter<{bpName: string, bpContent: string}>();
  serverName = "";
  serverContent = "";

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreated.emit({serverName: this.serverName, serverContent: this.serverContent});
  }
  onAddBluePrint(){
    this.bpCreated.emit({bpName: this.serverName, bpContent: this.serverContent});
  }

}
