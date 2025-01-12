import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MonitorService } from '../../../../services/monitor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-monitor',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-monitor.component.html',
  styleUrl: './edit-monitor.component.css'
})
export class EditMonitorComponent {
  editMonitorForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private monitorService: MonitorService, private router: Router) {
    const id = Number(this.router.url.split('/').pop());

    this.editMonitorForm = this.fb.group({
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

    this.monitorService.getById(id).subscribe((monitor) => {
      this.editMonitorForm.patchValue(monitor);
    });
  }
  editMonitor() {
    if (this.editMonitorForm.valid) {
      this.monitorService.saveUpdate(this.editMonitorForm.value).subscribe({
        next: (response) => {
          console.log("Monitor actualizado correctamente");
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
