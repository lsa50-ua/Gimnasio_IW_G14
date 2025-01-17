import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WebMaster } from '../models/webmaster';

@Injectable({
  providedIn: 'root'
})
export class WebmasterService {
  private url = 'http://localhost:8080/api/webmasters';

  constructor(private http: HttpClient) { }

  // Get all users
  getAll():Observable<WebMaster[]> {
    return this.http.get<WebMaster[]>(this.url);
  }

  // Get user by id
  getById(id:number):Observable<WebMaster> {
    return this.http.get<WebMaster>(`${this.url}/${id}`);
  }

  // Create or update user
  saveUpdate(user:WebMaster):Observable<WebMaster> {
    return this.http.post<WebMaster>(this.url, user);
  }

  // Delete user
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  activarSocio(webMasterId: number, usuarioId: number): Observable<void> {
    return this.http.put<void>(`${this.url}/${webMasterId}/activarSocio/${usuarioId}`, {});
  }

  desactivarSocio(webMasterId: number, usuarioId: number): Observable<void> {
    return this.http.put<void>(`${this.url}/${webMasterId}/desactivarSocio/${usuarioId}`, {});
  }
}
