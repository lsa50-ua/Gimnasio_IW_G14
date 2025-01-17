import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/usuarios';

  constructor(private http:HttpClient) { }

  // Get all users
  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  // Get user by id
  getById(id:number):Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  // Create or update user
  saveUpdate(user:User):Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  // Delete user
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
