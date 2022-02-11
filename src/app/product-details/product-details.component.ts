import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 0;
  brand: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.quantity = this.quantity + 1;
  }

  decrement(): void {
    this.quantity = this.quantity - 1 < 0 ? 0 : this.quantity - 1;
  }
}
