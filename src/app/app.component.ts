import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'serverOne',content:'lots of stuff'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBluePrintAdded(bpData: {bpName: string, bpContent: string}){
    this.serverElements.push({
      type: 'bp',
      name: bpData.bpName,
      content: bpData.bpContent
    });
  }
}
