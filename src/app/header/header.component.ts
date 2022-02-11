import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cartQuantity!: number;
  @Output() onEmptyCart = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  emptyCart(): void {
    this.cartQuantity = 0;
    this.onEmptyCart.emit(0);
  }

}
