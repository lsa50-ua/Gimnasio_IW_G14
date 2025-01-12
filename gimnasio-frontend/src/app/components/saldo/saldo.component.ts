import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Socio } from '../../models/socio';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-saldo',
  imports: [],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {
  socios: Socio[] = [];
  socio: Socio | null;

  constructor(private authService: AuthService, private socioService: SocioService) {
    this.socio = authService.getAuthenticatedSocio(this.socios);
  }

  ngOnInit(): void {
    this.getAllSocios();
  }

  getAllSocios() {
    this.socioService.getAll().subscribe(socios => {
      this.socios = socios;
    });
  }
}
