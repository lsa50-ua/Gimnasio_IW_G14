import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

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
          console.log(response.token);
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
    let status: number | null = null;

    if (!token){
      return false;
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/api/usuarios/validarToken', false);
    xhr.setRequestHeader('token', `Bearer ${token}`);
    xhr.send(null);

    if (xhr.status === 200) {
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}

