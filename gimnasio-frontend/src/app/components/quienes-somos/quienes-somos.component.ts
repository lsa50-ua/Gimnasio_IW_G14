import { Component } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  // Datos del gimnasio
  descripcion = 'Bienvenidos a nuestro gimnasio, un espacio dedicado a tu bienestar físico y mental. Ofrecemos instalaciones modernas y un equipo de entrenadores altamente cualificados para ayudarte a alcanzar tus objetivos de salud y fitness.';
  encabezado = 'Un lugar para mejorar tu bienestar';
  subEncabezado = 'Compromiso con tu salud';
  entrenadores: Monitor[] = [];

  constructor(private monitorService: MonitorService){}

  ngOnInit(): void {
    this.getEntrenadores();
  }

  getEntrenadores() {
    this.monitorService.getAll().subscribe(monitores => {
      this.entrenadores =  monitores;
    });
  }

}
