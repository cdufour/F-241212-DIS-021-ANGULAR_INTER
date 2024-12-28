import { Component, Input } from '@angular/core';
import { Client } from '../client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  @Input() clients: Client[] = [];
}
