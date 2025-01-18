// producto.component.ts
import { Producto } from '../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.productService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error fetching the products:', error);
      }
    );
  }

  trackById(index: number, item: Producto): string {
    return item.cod;
  }
}