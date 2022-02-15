import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() cartQuantity!: number;
  @Output() onEmptyCart = new EventEmitter<any>();

  sideNavOpen: boolean = false;
  cartOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  emptyCart(): void {
    this.cartQuantity = 0;
    this.onEmptyCart.emit(0);
  }

  toggleCart() {
    console.log('clicked');
    this.cartOpen = !this.cartOpen;
  }

  toggleSideNav(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

}
