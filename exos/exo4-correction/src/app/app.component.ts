import { Component } from '@angular/core';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { Client } from './client';

@Component({
  selector: 'app-root',
  imports: [ClientListComponent, ClientFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clients: Client[] = [];

  onSave(client: Client) {

    // same client name ?
    if (!this.clients.find(c => c.name === client.name)) {
      this.clients.push(client);
    }
    
  }
}
