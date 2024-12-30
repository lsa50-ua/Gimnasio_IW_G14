import { Component } from '@angular/core';

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
  // Entrenadores (puedes agregar más si es necesario)
  entrenadores = [
    { nombre: 'Juan Pérez', especialidad: 'Crossfit', foto: 'entrenador1.jpg' },
    { nombre: 'Ana García', especialidad: 'Spinning', foto: 'entrenador2.jpg' },
    { nombre: 'Carlos Ruiz', especialidad: 'Yoga', foto: 'entrenador3.jpg' }
  ];
}
