import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cartQuantity: number = 1;
  @Output() onEmptyCart = new EventEmitter<any>();
  price: number = 125;
  total: number = 0;
  isEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChange) {
    this.total = this.cartQuantity*this.price;
    this.isEmpty = this.total == 0;
  }

  emptyCart(): void {
    this.isEmpty = true;
    this.cartQuantity = 0;
    this.total = 0;
    this.onEmptyCart.emit(0);
  }

}
