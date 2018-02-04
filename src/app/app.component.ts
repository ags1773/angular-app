import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [];
  serverName = '';
  serverContent = '';

  onAddServer() {
    this.cards.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    });
  }

  onAddBlueprint() {
    this.cards.push({
      type: 'bp',
      name: this.serverName,
      content: this.serverContent
    });
  }
}
