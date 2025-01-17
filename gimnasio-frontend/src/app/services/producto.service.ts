import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  // Get all Productoes
  getAll():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  // Get Producto by id
  getById(id:number):Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/id/${id}`);
  }

  getCategories():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/categories`);
  }

  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/products`);
  }

  // Get Producto by category
  getByCategory(category:string):Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/category/${category}`);
  }

  // Create or update Producto
  saveUpdate(Producto:Producto):Observable<Producto> {
    return this.http.post<Producto>(this.url, Producto);
  }

  // Delete Producto
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
