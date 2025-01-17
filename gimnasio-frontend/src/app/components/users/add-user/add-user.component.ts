import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { WebmasterService } from '../../../services/webmaster.service';
import { MonitorService } from '../../../services/monitor.service';
import { Router } from '@angular/router';
import { SocioService } from '../../../services/socio.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addUserForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private webmasterService: WebmasterService, private socioService: SocioService, private monitorService: MonitorService, private router: Router) {

    this.addUserForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      activo:['true']
    })
  }
  addUser(tipo: string) {
    if (this.addUserForm.valid) {
        if (tipo === 'WebMaster') {
        this.webmasterService.saveUpdate(this.addUserForm.value).subscribe({
          next: (response) => {
            console.log("WebMaster creado correctamente");
            this.router.navigate(['/users']);
          },
          error: (error) => {
            if (error.error && error.error.message) {
              console.error(error.error.message);
            } else {
              console.error('An unexpected error occurred. Please try again later.');
            }
          }
        });
      }
      if (tipo === 'Socio') {
        this.socioService.saveUpdate(this.addUserForm.value).subscribe({
          next: (response) => {
            console.log("Socio creado correctamente");
            this.router.navigate(['/users']);
          },
          error: (error) => {
            if (error.error && error.error.message) {
              console.error(error.error.message);
            } else {
              console.error('An unexpected error occurred. Please try again later.');
            }
          }
        });
      }
      if (tipo === 'Monitor') {
        this.monitorService.saveUpdate(this.addUserForm.value).subscribe({
          next: (response) => {
            console.log("Monitor creado correctamente");
            this.router.navigate(['/users']);
          },
          error: (error) => {
            if (error.error && error.error.message) {
              console.error(error.error.message);
            } else {
              console.error('An unexpected error occurred. Please try again later.');
            }
          }
        });
      }
    }
    else {
      console.log('Bad Formated inputs');
      this.errorMessage = "Complete los campos adecuadamente antes de continuar.";
    }
  }
}
