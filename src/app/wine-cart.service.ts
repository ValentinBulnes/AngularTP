import { Injectable } from '@angular/core';
import { Wine } from './wine-list/Wine';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineCartService {

  private _cartList : Wine[] = [];

  cartList: BehaviorSubject<Wine[]> = new BehaviorSubject<Wine[]>([]);

  constructor() {}

  addToCart(wine: Wine) {
    let item: Wine | undefined = this._cartList.find((v1) => v1.name == wine.name);
    if(!item) {
      this._cartList.push({ ... wine });
    } else {
      item.quantity += wine.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

} 