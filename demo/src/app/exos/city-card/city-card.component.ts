import { Component, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-card',
  standalone: false,
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {
  @Input() selectedCity: City | undefined = undefined;
}
