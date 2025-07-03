import { Component, OnInit } from '@angular/core';
import { Wine } from './Wine';
import { WineCartService } from '../wine-cart.service';

@Component({
  selector: 'app-wine-list',
  standalone: false,
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent implements OnInit {

  wines: Wine[] = [
    {
      id: 1,
      name: "Château Margaux",
      type: "Tinto",
      region: "Bordeaux, Francia",
      year: 2018,
      price: 850,
      stock: 3,
      image: "assets/images/ChateauMargaux.png",
      clearance: false,
      quantity: 0,
    },
    {
      id: 2,
      name: "Dom Pérignon",
      type: "Espumante",
      region: "Champagne, Francia",
      year: 2012,
      price: 320,
      stock: 5,
      image: "assets/images/DomPerignon.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      id: 3,
      name: "Sassicaia",
      type: "Tinto",
      region: "Toscana, Italia",
      year: 2019,
      price: 450,
      stock: 0,
      image: "assets/images/Sassicaia.jpeg",
      clearance: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "Vega Sicilia",
      type: "Tinto",
      region: "Ribera del Duero, España",
      year: 2017,
      price: 380,
      stock: 2,
      image: "assets/images/VegaSicilia.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      id: 5,
      name: "Cloudy Bay",
      type: "Blanco",
      region: "Marlborough, Nueva Zelanda",
      year: 2021,
      price: 95,
      stock: 8,
      image: "assets/images/CloudyBay.jpeg",
      clearance: true,
      quantity: 0,
    },
    {
      id: 6,
      name: "Opus One",
      type: "Tinto",
      region: "Napa Valley, Estados Unidos",
      year: 2018,
      price: 650,
      stock: 4,
      image: "assets/images/OpusOne.avif",
      clearance: false,
      quantity: 0,
    }
  ]

  constructor(private cart: WineCartService) {}

  ngOnInit(): void {}

  addToCart(wine: Wine) : void {
    this.cart.addToCart(wine);
    wine.stock -= wine.quantity;
    wine.quantity = 0;
  }

  maxReached(m : string) {
    alert(m);
  }

} 