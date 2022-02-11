import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-page';
  quantity: number = 0;
  cartQuantity: number = 0;


  changeQuantity(quantity: number): void {
    this.quantity = quantity;
  }
  
  changeCartQuantity(): void {
    this.cartQuantity += this.quantity;
  }
}
