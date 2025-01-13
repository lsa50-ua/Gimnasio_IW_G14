import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Socio } from '../../models/socio';
import { SocioService } from '../../services/socio.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TpvService } from '../../services/tpv.service';

@Component({
  selector: 'app-saldo',
  imports: [ReactiveFormsModule],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {
  tpvForm: FormGroup;
  socios: Socio[] = [];
  socio: Socio | null = null;
  loading: boolean = false; // Bandera para el estado de carga

  constructor(private fb: FormBuilder, private authService: AuthService, private socioService: SocioService, private tpvService: TpvService) {
    this.tpvForm = this.fb.group({
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  getSocio() {
    this.socioService.getAll().subscribe(socios => {
      this.socios = socios;
      this.socio = this.authService.getAuthenticatedSocio(this.socios);
    });
  }

  ngOnInit() {
    this.getSocio();
  }

  recargarSaldo() {
    if (this.tpvForm.valid) {
      this.loading = true; // Inicia la carga
      const cantidad = this.tpvForm.get('cantidad')?.value;
      this.tpvService.create(Number(cantidad)).subscribe({
        next: (response: any) => {
          if (response && response.url) {
            window.location.href = response.url;
          } else {
            console.error('Respuesta inesperada de la API:', response);
          }
        },
        error: (error) => {
          console.error('Error al realizar la recarga:', error);
        },
        complete: () => {
          this.loading = false; // Termina la carga
          console.log('La recarga ha sido procesada correctamente.');
        }
      });
    } else {
      console.error('Formulario inválido');
    }
  }
}
