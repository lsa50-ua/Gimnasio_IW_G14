import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {
  CalendarA11y,
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarUtils,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarMonthViewDay } from 'angular-calendar';
import { addMonths, subMonths } from 'date-fns'; // Utilidades de date-fns

@Component({
  selector: 'app-clases',
  standalone: true, // Si estás usando componentes independientes
  imports: [CalendarModule, CommonModule], // Incluye CommonModule aquí
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
export class ClasesComponent {
  viewDate: Date = new Date(); // Fecha actual
  selectedDayEvents: any[] = []; // Eventos del día seleccionado
  events = [
    {
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      title: 'Evento inicial',
    },
    {
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      title: 'Evento de mañana',
    },
  ];

  // Cambiar al mes anterior
  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  // Cambiar al mes siguiente
  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  // Seleccionar un día del calendario
  onDayClicked({ day }: { day: any }): void {
    const clickedDate = new Date(day.date).toDateString();
    this.selectedDayEvents = this.events.filter(
      (event) => new Date(event.start).toDateString() === clickedDate
    );
    console.log('Eventos en el día:', this.selectedDayEvents);
  }
}


