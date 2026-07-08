import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-product-cart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  @Input() cartItems: CartItem[] = [];
  @Input() totalPrice: number = 0;
  constructor() { }


  ngOnInit(): void {
  }

 

}
