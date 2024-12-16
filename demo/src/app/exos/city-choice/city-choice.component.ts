import { Component, Inject, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'exos-city-choice',
  standalone: false,
  templateUrl: './city-choice.component.html',
  styleUrl: './city-choice.component.css'
})
export class CityChoiceComponent implements OnInit {

  cities: City[] = [];
  selectedCity: City | undefined = undefined;
  today: number = Date.now();

  constructor(@Inject(CityService) private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }

  onChange(event: any): void {
    let selectedCity = event.target.value;
    console.log(selectedCity);
    this.selectedCity = this.cities.find(city => city.name === selectedCity);
  }

}
