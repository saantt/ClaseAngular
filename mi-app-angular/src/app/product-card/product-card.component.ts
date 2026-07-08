import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  @Input() products!: Product[];
  @Input() isInCart: boolean = false;

  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<Product>();



  

  ngOnInit(): void { }

  onAddToCart(): void {
    if (this.product.stock > 0) {
      console.log('Agregando al carrito: ');
      this.addToCart.emit(this.product);
    }
  }
  onRemoveFromCart(): void {
    this.removeFromCart.emit(this.product.id);
  }
  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }
}
