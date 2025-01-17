import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Socio } from '../../models/socio';
import { SocioService } from '../../services/socio.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-reservas',
  imports: [CommonModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  socio: Socio | null = null; // Socio autenticado
  reservas: Reserva[] = []; // Reservas del socio

  constructor(
    private router: Router,
    private socioService: SocioService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.router.url.split('/').pop());

    // Obtener el socio autenticado y cargar reservas y eventos
    this.socioService.getAll().subscribe((socios) => {
      this.socio = this.authService.getAuthenticatedSocio(socios);

      if (this.socio) {
        this.reservas = this.socio.reservas;
      }
    });
  }

  cancelarReserva(reserva: Reserva): void {
    if (!this.socio) {
      console.error('Socio no autenticado.');
      return;
    }
    this.socioService.cancelarReserva(this.socio.id, reserva.id).subscribe({
      next: () => {
        // Elimina la reserva cancelada de la lista de reservas
        this.reservas = this.reservas.filter((r) => r.id !== reserva.id);
        console.log('Reserva cancelada con éxito.');
      },
      error: (err) => {
        console.error('Error al cancelar la reserva:', err);
      }
    });
  }
}
