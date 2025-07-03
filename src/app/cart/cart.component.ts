import { Component, OnInit } from '@angular/core';
import { WineCartService } from '../wine-cart.service';
import { Wine } from '../wine-list/Wine';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartList$: Observable<Wine[]>;

  constructor(private cart: WineCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}