import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cartQuantity: number = 1;
  price: number = 125;
  total: number = 0;
  isEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChange) {
    this.total = this.cartQuantity*this.price;
  }

  emptyCart(): void {
    
  }

}
