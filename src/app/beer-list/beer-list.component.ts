import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';
import { BeerCartService } from '../beer-cart.service';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      id: 1,
      name: "Bitter Call Saul",
      style: "IPA",
      price: 180,
      stock: 5,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      id: 2,
      name: "Red Red Wine",
      style: "Barley Wine",
      price: 200,
      stock: 3,
      image: "assets/images/negra-juerte.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      id: 3,
      name: "Yellow Submarine",
      style: "Golden Ale",
      price: 180,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "Yellow Submarine 2",
      style: "Golden Ale",
      price: 200,
      stock: 0,
      image: "assets/images/negra-juerte.jpg",
      clearance: false,
      quantity: 0,
    }
  ]

  constructor(private cart: BeerCartService) {}

  ngOnInit(): void {}

  addToCart(beer: Beer) : void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m : string) {
    alert(m);
  }


}
