import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadService } from '../../../services/actividad.service';

@Component({
  selector: 'app-add-tipo-actividad',
  imports: [ReactiveFormsModule],
  templateUrl: './add-tipo-actividad.component.html',
  styleUrl: './add-tipo-actividad.component.css'
})
export class AddTipoActividadComponent {
  addActivityForm: FormGroup;
  
    constructor(private fb: FormBuilder, private actividadService: ActividadService, private router: Router) {
      this.addActivityForm = this.fb.group({
        tipo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        imagen: ['', [Validators.required]]
      });
    }
  
    createActivity() {
      this.actividadService.saveUpdate(this.addActivityForm.value).subscribe({
        next: (response) => {
          // Manejo del caso exitoso
          console.log("Tipo de actividad creada correctamente");
          this.router.navigate(['/actividades']);
        },
        error: (error) => {
          // Manejo del error
          if (error.error && error.error.message) {
            console.error(error.error.message);
          } else {
            console.error('An unexpected error occurred. Please try again later.');
          }
        }
      });
      
    }

}
