import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebmasterService {
  private apiUrl = 'http://localhost:8080/api/webmasters';

  constructor(private http: HttpClient) { }

  activarSocio(webMasterId: number, usuarioId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${webMasterId}/activarSocio/${usuarioId}`, {});
  }

  desactivarSocio(webMasterId: number, usuarioId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${webMasterId}/desactivarSocio/${usuarioId}`, {});
  }
}
