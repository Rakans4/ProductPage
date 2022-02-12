import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 0;
  brand: string = '';
  cartQuantity: number = 0;
  product: Product | undefined;

  @Output() onQuantityChange = new EventEmitter<any>();
  @Output() onCartQuantityChange = new EventEmitter<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.product;
  }

  increment(): void {
    this.quantity = this.quantity + 1;
    this.onQuantityChange.emit(this.quantity);
  }

  decrement(): void {
    this.quantity = this.quantity - 1 < 1 ? 1 : this.quantity - 1;
    this.onQuantityChange.emit(this.quantity);
  }

  addToCart(): void {
    this.onCartQuantityChange.emit(this.cartQuantity);
  }
}
