import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  imports: [],
  template: `
    <div>
      <h3>Custom card</h3>
      <ng-content />
    </div>
  `
})
export class CustomCardComponent {

}
