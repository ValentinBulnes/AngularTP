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
      id: 1,
      name: "Bitter Call Saul",
      style: "IPA",
      price: 180,
      stock: 5,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    },
    {
      id: 2,
      name: "Red Red Wine",
      style: "Barley Wine",
      price: 200,
      stock: 3,
      image: "assets/images/negra-juerte.jpg",
      clearance: true,
    },
    {
      id: 3,
      name: "Yellow Submarine",
      style: "Golden Ale",
      price: 180,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    },
    {
      id: 4,
      name: "Yellow Submarine 2",
      style: "Golden Ale",
      price: 200,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
    }
  ]

  constructor() { }
  
}
