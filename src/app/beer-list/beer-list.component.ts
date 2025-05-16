import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  beers: Beer[] = [
    {
      name: "Bitter Call Saul",
      type: "IPA",
      price: 180,
      stock: 5,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    },
    {
      name: "Red Red Wine",
      type: "Barley Wine",
      price: 200,
      stock: 3,
      image: "assets/images/negra-juerte.jpg",
      clearance: true,
    },
    {
      name: "Yellow Submarine",
      type: "Golden Ale",
      price: 180,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    },
    {
      name: "Yellow Submarine 2",
      type: "Golden Ale",
      price: 200,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    }
  ]

  constructor() { }
  
}
