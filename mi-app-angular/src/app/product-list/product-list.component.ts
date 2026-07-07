import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   products: Product[] = [];

   loadProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Laptop Pro',
        description: 'Laptop de alto rendimiento para desarrollo',
        price: 1299.99,
        image: 'https://picsum.photos/200/300',
        category: 'Electrónica',
        stock: 5,
      },
      {
        id: 2,
        name: 'Mouse Inalámbrico',
        description: 'Mouse ergonómico y cómodo',
        price: 29.99,
        image: 'https://picsum.photos/200/300',
        category: 'Accesorios',
        stock: 15,
      },
      {
        id: 3,
        name: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB',
        price: 89.99,
        image: 'https://picsum.photos/200/300',
        category: 'Accesorios',
        stock: 8,
      },
      {
        id: 4,
        name: 'Monitor 4K',
        description: 'Monitor 4K de 27 pulgadas',
        price: 399.99,
        image: 'https://picsum.photos/200/300',
        category: 'Electrónica',
        stock: 0,
      },
      {
        id: 5,
        name: 'Webcam HD',
        description: 'Cámara web 1080p',
        price: 59.99,
        image: 'https://picsum.photos/200/300',
        category: 'Accesorios',
        stock: 12,
      },
      {
        id: 6,
        name: 'Headset Gaming',
        description: 'Headset con micrófono 7.1',
        price: 149.99,
        image: 'https://picsum.photos/200/300',
        category: 'Audio',
        stock: 7,
      },
    ];
  }


  constructor() { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProduct(): Product[] {
    return this.products;
  }

  getFilteredProducts(): Product[] {
    return this.products;
  }

}