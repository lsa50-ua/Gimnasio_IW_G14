import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../models/clase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private url = 'http://localhost:8080/api/actividades';
  
  constructor(private http: HttpClient) { }

  // Get all users
  getAll():Observable<Clase[]> {
    return this.http.get<Clase[]>(this.url);
  }

  // Get user by id
  getById(id:number):Observable<Clase> {
    return this.http.get<Clase>(`${this.url}/${id}`);
  }

  // Create or update user
  saveUpdate(user:Clase):Observable<Clase> {
    return this.http.post<Clase>(this.url, user);
  }

  // Delete user
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
