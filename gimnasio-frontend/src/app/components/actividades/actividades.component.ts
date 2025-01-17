import { Component } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-actividades',
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  actividades: Actividad[] = [];
  userType: string | null = "";

  constructor(private actividadService: ActividadService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllActividades();
    this.userType = this.authService.getUserType();
  }

  getAllActividades() {
    this.actividadService.getAll().subscribe(actividades => {
      this.actividades = actividades;
    });
  }

  deleteActividad(id: number) {
    this.actividadService.delete(id).subscribe({
        next: () => {
            console.log(`Actividad con ID ${id} eliminada.`);
            // Recargar datos
            this.getAllActividades();
        },
        error: (err) => {
            console.error('Error al eliminar la actividad:', err);
        }
    });
  }

}
