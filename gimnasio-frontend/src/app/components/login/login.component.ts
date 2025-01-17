import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$')]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Manejo del caso exitoso
          if (response.token) {
            console.log('Credentials Valid');
            this.authService.setToken(response.token);
            this.router.navigate(['/actividades']);
          }
          if (response.message) {
            console.log(response.message);
            this.errorMessage = response.message;
          }
        },
        error: (error) => {
          // Manejo del error
          if (error.error && error.error.message) {
            console.error(error.error.message);
            this.errorMessage = error.error.message; // Captura el mensaje del servidor
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      });
    } else {
      console.log('Invalid Credentials');
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
  
}
