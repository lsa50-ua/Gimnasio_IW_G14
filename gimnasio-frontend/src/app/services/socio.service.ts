import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private url = 'http://localhost:8080/api/socios';

  constructor(private http: HttpClient) { }

  // Get all users
  getAll():Observable<[Socio]> {
    return this.http.get<[Socio]>(this.url);
  }

  // Get user by id
  getById(id:number):Observable<Socio> {
    return this.http.get<Socio>(`${this.url}/${id}`);
  }

  // Create or update user
  saveUpdate(user:Socio):Observable<Socio> {
    return this.http.post<Socio>(this.url, user);
  }

  // Delete user
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
