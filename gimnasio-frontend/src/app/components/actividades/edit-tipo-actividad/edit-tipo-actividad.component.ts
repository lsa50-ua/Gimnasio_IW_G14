import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadService } from '../../../services/actividad.service';
import { Actividad } from '../../../models/actividad';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-tipo-actividad',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-tipo-actividad.component.html',
  styleUrl: './edit-tipo-actividad.component.css'
})
export class EditTipoActividadComponent {
  editActivityForm: FormGroup;
  
  constructor(private fb: FormBuilder, private actividadService: ActividadService, private router: Router) {
    this.editActivityForm = this.fb.group({
      id: [''],
      tipo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    const currentUrl = this.router.url;
    
    // Extraer el ID usando split
    const id_str = currentUrl.split('/').pop();
    if (id_str !== undefined) {
      const id = parseInt(id_str);

      this.actividadService.getById(id).subscribe({
        next: (response) => {
          console.log("Tipo de actividad obtenida correctamente");
          // Manejo del caso exitoso
          const actividad = response as Actividad;
          this.editActivityForm.setValue({
            id: actividad.id,
            tipo: actividad.tipo,
            descripcion: actividad.descripcion,
            imagen: actividad.imagen
          });
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

  editActivity() {
    this.actividadService.saveUpdate(this.editActivityForm.value).subscribe({
      next: (response) => {
        // Manejo del caso exitoso
        console.log("Tipo de actividad modificada correctamente");
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
