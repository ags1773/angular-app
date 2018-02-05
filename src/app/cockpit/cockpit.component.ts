import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bpCreated = new EventEmitter<{bpName: string, bpContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(srvName){
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName: srvName, serverContent: this.serverContentInput.nativeElement.value});
  }
  onAddBluePrint(srvName){
    this.bpCreated.emit({bpName: srvName, bpContent: this.serverContentInput.nativeElement.value});
  }

}
