import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxReached.emit("No se puede agregar más vino");
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: any): void {
    const value = event.target.value;
    
    // Validar que no sea negativo
    if (value < 0) {
      this.quantity = 0;
      return;
    }

    // Validar que no exceda el stock
    if (value > this.max) {
      this.quantity = this.max;
      return;
    }
    this.quantityChange.emit(this.quantity);
  }

  ngOnInit(): void {  }

}
