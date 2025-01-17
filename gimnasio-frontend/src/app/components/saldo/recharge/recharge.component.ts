import { Component } from '@angular/core';
import { SocioService } from '../../../services/socio.service';
import { AuthService } from '../../../services/auth.service';
import { Socio } from '../../../models/socio';
import { Router } from '@angular/router';
import { PagoService } from '../../../services/pago.service';

@Component({
  selector: 'app-recharge',
  imports: [],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.css'
})
export class RechargeComponent {
  socios: Socio[] = [];
  socio: Socio | null = null;

  constructor(private socioService: SocioService, private pagoService: PagoService , private authService: AuthService, private router: Router) {
    const cantidad = Number(this.router.url.split('/').pop());

    socioService.getAll().subscribe(socios => {
      this.socios = socios;
      this.socio = authService.getAuthenticatedSocio(this.socios);
      if (this.socio){
        this.socio.saldo += cantidad;
        socioService.saveUpdate(this.socio).subscribe({ next: (response) => {
          console.log("Socio actualizado correctamente");
          if (this.socio != null) {
            pagoService.saveUpdate({coste: cantidad, usuario: this.socio}).subscribe({ next: (response) => {
              console.log("Pago registrado correctamente");
            }
            , error: (error) => {
              console.error('Error al realizar el pago:', error);
          }
          });
          }
          this.router.navigate(['/saldo']);
        }});
      }
    });

  }
}
