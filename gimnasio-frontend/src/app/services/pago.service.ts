import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago, PagoGet } from '../models/pago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private url = 'http://localhost:8080/api/pagos';

  constructor(private http:HttpClient) { }

  // Get all Pagoes
  getAll():Observable<PagoGet[]> {
    return this.http.get<PagoGet[]>(this.url);
  }

  // Get Pago by id
  getById(id:number):Observable<Pago> {
    return this.http.get<Pago>(`${this.url}/id/${id}`);
  }

  // Create or update Pago
  saveUpdate(Pago:Pago):Observable<Pago> {
    return this.http.post<Pago>(this.url, Pago);
  }

  // Delete Pago
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
