import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  imports: [CommonModule],
  template: `
    <ul>
      <li (click)="tab=1">Home</li>
      <li (click)="tab=2">Users</li>
      <li (click)="tab=3">Contact</li>
    </ul>
    <p [ngSwitch]="tab">
      <span *ngSwitchCase="1">Content 1</span>
      <span *ngSwitchCase="2">Content 2</span>
      <span *ngSwitchCase="3">Content 3</span>
      <span *ngSwitchDefault>Default content</span>
    </p>
  `
})
export class SwitchExampleComponent {
  tab: number = 1;
}
