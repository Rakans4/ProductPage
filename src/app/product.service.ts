import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product = {
    brand: 'SNEAKER COMPANY',
    model: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 50,
    discountedPrice: 125,
    thumbnails: [
      '../../assets/images/image-product-1-thumbnail.jpg',
      '../../assets/images/image-product-3-thumbnail.jpg',
      '../../assets/images/image-product-2-thumbnail.jpg',
      '../../assets/images/image-product-4-thumbnail.jpg'
    ],
    images: [
      '../../assets/images/image-product-1.jpg',
      '../../assets/images/image-product-3.jpg',
      '../../assets/images/image-product-2.jpg',
      '../../assets/images/image-product-4.jpg'
    ]
  }

  quantity: number = 0;

  addToCart(quantity: number) {
    this.quantity = quantity;
  }

  emptyCart() {
    this.quantity = 0;
  }

}
