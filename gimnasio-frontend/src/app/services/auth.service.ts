import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { User } from '../models/user';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/api/usuarios/login';
  private tokenKey = 'auth-token';
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.url, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      })
    )
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
  
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
      return decoded.exp > currentTime; // Verifica si el token ha expirado
    } catch (error) {
      console.error('Token inválido:', error);
      return false;
    }
  }
  

  getAuthenticatedUserId(users: User[]): number | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // Decodifica el token
        if (decoded.sub !== null) {
          for (let i = 0; i < users.length; i++){
            if (users[i].email === decoded.sub){
              return users[i].id;
            }
          }
        }
        return null;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }
    return null;
  }

  getAuthenticatedUser(users: User[]): User | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // Decodifica el token
        if (decoded.sub !== null) {
          for (let i = 0; i < users.length; i++){
            if (users[i].email === decoded.sub){
              return users[i];
            }
          }
        }
        return null;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }
    return null;
  }

  getAuthenticatedSocio(socios: Socio[]): Socio | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // Decodifica el token
        if (decoded.sub !== null) {
          for (let i = 0; i < socios.length; i++){
            console.log(socios[i]);
            if (socios[i].email === decoded.sub){
              return socios[i];
            }
          }
        }
        return null;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }
    return null;
  }

  getUserType(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // Decodifica el token
        return decoded.userType || null; // Devuelve el userType si está presente
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}

