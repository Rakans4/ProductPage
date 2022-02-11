import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 0;
  brand: string = '';
  cartQuantity: number = 0;

  @Output() onQuantityChange = new EventEmitter<any>();
  @Output() onCartQuantityChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.quantity = this.quantity + 1;
    this.onQuantityChange.emit(this.quantity);
  }

  decrement(): void {
    this.quantity = this.quantity - 1 < 0 ? 0 : this.quantity - 1;
    this.onQuantityChange.emit(this.quantity);
  }

  addToCart(): void {
    this.onCartQuantityChange.emit(this.cartQuantity);
  }
}
