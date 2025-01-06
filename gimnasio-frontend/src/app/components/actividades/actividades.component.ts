import { Component } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad';

@Component({
  selector: 'app-actividades',
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) { }

  ngOnInit(): void {
    this.getAllActividades();
  }

  getAllActividades() {
    this.actividadService.getAll().subscribe(actividades => {
      this.actividades = actividades;
    });
  }
}
