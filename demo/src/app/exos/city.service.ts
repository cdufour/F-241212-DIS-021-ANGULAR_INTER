import { Inject, Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [
    //{ name: "Turin", country: "Italie", image: "https://as2.ftcdn.net/v2/jpg/01/31/70/97/1000_F_131709727_jx36ilRvbLI3eBHCa2xjziFfvRzGzEeZ.jpg"},
    //{ name: "Paris", country: "France", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"},
    { name: "Turin", country: "Italie", image: "turin.jpg"},
    { name: "Paris", country: "France", image: "paris.jpg"},
    { name: "Rio", country: "Brésil", image: "rio.jpg"},
  ]

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }
}
