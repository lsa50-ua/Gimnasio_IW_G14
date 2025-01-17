import { Component } from '@angular/core';
import { ClaseService } from '../../../services/clase.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../../services/actividad.service';
import { MonitorService } from '../../../services/monitor.service';
import { Monitor } from '../../../models/monitor';

@Component({
  selector: 'app-crear',
  imports: [ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  addClaseForm!: FormGroup;
  id_tipo_actividad: number;
  monitores: Monitor[] = [];

    
  constructor(private clasesService: ClaseService, private router: Router, private fb: FormBuilder, private actividadService: ActividadService, private monitorService: MonitorService) {
    this.id_tipo_actividad = Number(this.router.url.split('/').pop());
    actividadService.getById(this.id_tipo_actividad).subscribe((actividad) => {
      monitorService.getAll().subscribe((monitores) => {
        this.monitores = monitores;
        this.addClaseForm = this.fb.group({
          nombre: ['', [Validators.required]],
          diaSemana: ['', [Validators.required]],
          horas: ['', [Validators.required]],
          fechaInicio: ['', [Validators.required]],
          fechaFin: ['', [Validators.required]],
          capacidad: ['', [Validators.required]],
          precio: ['', [Validators.required]],
          tipoActividad: [actividad],
          monitor: ['', [Validators.required]],
        });
      });
    });
  }

  // Método para crear una clase
  crearClase() {
    this.clasesService.saveUpdate(this.addClaseForm.value).subscribe((clase) => {
      this.router.navigate(['/actividades']);
    });
  }
}
