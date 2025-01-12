import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocioService } from '../../../../services/socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-socio',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-socio.component.html',
  styleUrl: './edit-socio.component.css'
})
export class EditSocioComponent {
  editSocioForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private socioService: SocioService, private router: Router) {
    const id = Number(this.router.url.split('/').pop());

    this.editSocioForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      activo:[]
    })

    this.socioService.getById(id).subscribe((socio) => {
      this.editSocioForm.patchValue(socio);
    });
  }
  editSocio() {
    if (this.editSocioForm.valid) {
      this.socioService.saveUpdate(this.editSocioForm.value).subscribe({
        next: (response) => {
          console.log("Socio actualizado correctamente");
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
    else {
      console.log('Bad Formated inputs');
      this.errorMessage = "Complete los campos adecuadamente antes de continuar.";
    }
  }
}
