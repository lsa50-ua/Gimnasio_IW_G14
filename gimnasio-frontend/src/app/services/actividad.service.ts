import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private url = 'http://localhost:8080/api/tipoActividades';

  constructor(private http:HttpClient) { }

  // Get all Actividades
  getAll():Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.url);
  }

  // Get Actividad by id
  getById(id:number):Observable<Actividad> {
    return this.http.get<Actividad>(`${this.url}/id/${id}`);
  }

  // Create or update Actividad
  saveUpdate(Actividad:Actividad):Observable<Actividad> {
    return this.http.post<Actividad>(this.url, Actividad);
  }

  // Delete Actividad
  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
