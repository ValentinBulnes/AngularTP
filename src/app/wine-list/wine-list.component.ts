import { Component, OnInit } from '@angular/core';
import { Wine } from './Wine';
import { WineCartService } from '../wine-cart.service';
import { WineDataService } from '../wine-data.service';

@Component({
  selector: 'app-wine-list',
  standalone: false,
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent implements OnInit {

  wines: Wine[] = [];

  constructor(
    private cart: WineCartService,
    private winesDataService: WineDataService) {}

  ngOnInit(): void {
    this.winesDataService.getAll()
    .subscribe(wines => this.wines = wines);
  }

  addToCart(wine: Wine) : void {
    if (wine.quantity > 0) {
      this.cart.addToCart(wine);
      wine.stock -= wine.quantity;
      wine.quantity = 0;
    }
  }

  maxReached(m : string) {
    alert(m);
  }

} 