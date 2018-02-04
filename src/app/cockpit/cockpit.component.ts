import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bpCreated = new EventEmitter<{bpName: string, bpContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(srvName, srvContent){
    this.serverCreated.emit({serverName: srvName, serverContent: srvContent});
  }
  onAddBluePrint(srvName, srvContent){
    this.bpCreated.emit({bpName: srvName, bpContent: srvContent});
  }

}
