import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarA11y,
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarUtils,
  DateAdapter,
  CalendarMonthViewDay,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { addMonths, subMonths } from 'date-fns';
import { ClaseService } from '../../services/clase.service';
import { Clase } from '../../models/clase';
import { Router } from '@angular/router';
import { SocioService } from '../../services/socio.service'; // Importa el servicio para reservas
import { AuthService } from '../../services/auth.service';
import { Socio } from '../../models/socio';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CalendarModule, CommonModule],
  providers: [
    {
      provide: DateAdapter,
      useFactory: adapterFactory,
    },
    CalendarUtils,
    CalendarA11y,
    CalendarDateFormatter,
    CalendarEventTitleFormatter,
  ],
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  viewDate: Date = new Date(); // Fecha actual
  selectedDayEvents: CalendarEvent[] = []; // Eventos del día seleccionado
  events: CalendarEvent[] = []; // Lista completa de eventos
  reservedActivities: number[] = []; // IDs de actividades reservadas
  socio: Socio | null = null; // Socio autenticado


  constructor(private claseService: ClaseService, private router: Router, private socioService: SocioService, private authService: AuthService) {}

  ngOnInit(): void {
    const id = Number(this.router.url.split('/').pop());
  
    // Obtener el socio autenticado y cargar reservas y eventos
    this.socioService.getAll().subscribe((socios) => {
      this.socio = this.authService.getAuthenticatedSocio(socios);
  
      if (this.socio) {
        this.loadReservedActivities();
        this.loadEventsFromAPI(id);
      }
    });
  }
  

  
  // Crear eventos y marcar días reservados
  private createEvents(actividad: Clase): CalendarEvent[] {
    const start = new Date(actividad.fechaInicio);
    const end = new Date(actividad.fechaFin);
    const events: CalendarEvent[] = [];
    const [startTime, endTime] = actividad.horas.split(' - ');
  
    const [startHour, startMinute] = startTime.split(':').map((item) => parseInt(item, 10));
    const [endHour, endMinute] = endTime.split(':').map((item) => parseInt(item, 10));
  
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (actividad.diaSemana.split(',').map(day => day.trim()).includes(this.getDayName(d.getDay()))) {
        const eventStart = new Date(d);
        eventStart.setHours(startHour, startMinute);
  
        const eventEnd = new Date(d);
        eventEnd.setHours(endHour, endMinute);
  
        const isReserved = this.isClassReserved(actividad.id);
  
        events.push({
          start: eventStart,
          end: eventEnd,
          title: `${actividad.nombre} (${actividad.horas})`,
          cssClass: isReserved ? 'reserved-class' : '',
          meta: { actividad, isReserved }, // Marcar si está reservado
        });
      }
    }
    return events;
  }
  
  // Función que se llama antes de renderizar la vista mensual
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      this.setCustomDayClass(day);
      day.events.forEach((event) => {
        if (event.meta?.isReserved) {
          day.cssClass = 'reserved-day'; // Añade clase CSS personalizada
        }
      });
    });
  }

  // Cambiar al mes anterior
  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  // Cambiar al mes siguiente
  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  // Función para comprobar si el día coincide con los días especificados en diaSemana
  private isDayMatch(actividad: Clase): boolean {
    const start = new Date(actividad.fechaInicio);
    const end = new Date(actividad.fechaFin);

    const daysMap: Record<string, number> = {
      Lunes: 1,
      Martes: 2,
      Miércoles: 3,
      Jueves: 4,
      Viernes: 5,
      Sábado: 6,
      Domingo: 0,
    };

    const targetDays = actividad.diaSemana.split(',').map(day => daysMap[day.trim()]);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (targetDays.includes(d.getDay())) {
        return true;
      }
    }
    return false;
  }

  // Cargar eventos desde la API
  loadEventsFromAPI(id: number): void {
    this.claseService.getAll().subscribe((data) => {
      this.events = data
        .filter((actividad) => this.isDayMatch(actividad) && actividad.tipoActividad.id === id)
        .map((actividad) => this.createEvents(actividad))
        .flat();
    });
  }

  // Obtener el nombre del día
  private getDayName(dayIndex: number): string {
    const daysMap: Record<number, string> = {
      0: 'Domingo',
      1: 'Lunes',
      2: 'Martes',
      3: 'Miércoles',
      4: 'Jueves',
      5: 'Viernes',
      6: 'Sábado',
    };
    return daysMap[dayIndex];
  }

// Verificar si una clase ya está reservada
isClassReserved(eventId: number): boolean {
  console.log('Chequeando si la actividad está reservada:', eventId);
  return this.reservedActivities.includes(eventId);
}


// Cargar las actividades reservadas del socio
loadReservedActivities(): void {
  const socioId = this.socio?.id;
  if (socioId) {
    this.socioService.getById(socioId).subscribe((socio) => {
      // Carga las actividades reservadas del socio y actualiza la lista
      this.reservedActivities = socio.reservas.map((reserva: any) => reserva.id);
    });
  }
}



reservarClase(event: any): void {
  const socioId = this.socio?.id;

  if (!event.meta?.actividad || !socioId) {
    console.error('Datos insuficientes para realizar la reserva.');
    return;
  }

  const actividad = event.meta.actividad;
  const fecha = this.formatDate(this.viewDate); // Convierte a yyyy-MM-dd
  const hora = this.extractStartTime(actividad.horas); // Extrae la hora inicial HH:mm
  const actividadId = actividad.id;

  this.socioService.reservarActividad(socioId, fecha, hora, actividadId).subscribe({
    next: () => {
      this.reservedActivities.push(actividadId); // Añadir la actividad a la lista local
      console.log('Reserva realizada con éxito para actividad ID:', actividadId);
    },
    error: (err) => {
      console.error('Error al realizar la reserva:', err);
    }
  });
}

// Formatea una fecha en el formato 'yyyy-MM-dd'
private formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Extrae la hora inicial en formato 'HH:mm' desde una cadena como '08:00 - 09:00'
private extractStartTime(horas: string): string {
  return horas.split(' - ')[0];
}




// Cancelar una reserva
cancelarReserva(event: any): void {
  const socioId = this.socio?.id;
  if (socioId) {
    this.socioService.cancelarReserva(socioId, event.meta.actividad.id).subscribe(() => {
      this.reservedActivities = this.reservedActivities.filter(
        (id) => id !== event.meta.actividad.id
      ); // Eliminar la actividad de las reservas
    });
  }
}

  // Función que se llama cuando un día es seleccionado
  onDayClicked({ day }: { day: CalendarMonthViewDay }): void {
    if (!day || !day.date || this.isDayDisabled(day.date)) {
      return; // No permitir interacción con días desactivados
    }

    const clickedDate = new Date(day.date).toDateString();
    this.selectedDayEvents = this.events.filter(
      (event) => new Date(event.start).toDateString() === clickedDate
    );
    console.log('Eventos del día seleccionado:', this.selectedDayEvents);
  }

  setCustomDayClass(day: CalendarMonthViewDay): void {
    if (this.isDayDisabled(day.date)) {
      day.cssClass = 'disabled-day'; // Clase personalizada para días deshabilitados
    }
  }

  isDayDisabled(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajustar a la medianoche de hoy
    return date.getTime() < today.getTime(); // Comparar en milisegundos
  }
}
