import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  imports: [],
  templateUrl: './choice.component.html',
  styles: ``
})
export class ChoiceComponent {
  onChange(event: any) {
    console.log(event.target.value);
  }
}
