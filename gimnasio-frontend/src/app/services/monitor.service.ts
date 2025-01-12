import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private url = 'http://localhost:8080/api/monitores';

  constructor(private http: HttpClient) { }

  // Get all users
  getAll():Observable<[Monitor]> {
    return this.http.get<[Monitor]>(this.url);
  }

  // Get user by id
  getById(id:number):Observable<Monitor> {
    return this.http.get<Monitor>(`${this.url}/${id}`);
  }

  // Create or update user
  saveUpdate(user:Monitor):Observable<Monitor> {
    return this.http.post<Monitor>(this.url, user);
  }

  // Delete user
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}