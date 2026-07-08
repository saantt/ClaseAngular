import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  products = [
    {
      title: 'Chaqueta de lino',
      description: 'Ligera y versátil para tus días más cool.',
      price: '€79',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Polo esencial',
      description: 'Comodidad premium con corte moderno.',
      price: '€49',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Vestido de calle',
      description: 'Una pieza dinámica para cualquier ocasión.',
      price: '€89',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    }
  ];
}
