import { Component } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { PagoGet } from '../../models/pago';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-informe',
  imports: [CurrencyPipe],
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {
  pagos: PagoGet[] = [];
  totalIngresos: number = 0;
  ingresosPorAno: { year: number, total: number }[] = [];
  ingresosPorMes: { month: string, total: number }[] = [];

  constructor(private pagoService: PagoService) {}

  ngOnInit(): void {
    this.pagoService.getAll().subscribe(pagos => {
      this.pagos = pagos;
      this.calcularEstadisticas();
    });
  }

  calcularEstadisticas(): void {
    let total = 0;
    const ingresosPorAno: { [key: number]: number } = {};
    const ingresosPorMes: { [key: string]: number } = {};

    this.pagos.forEach(pago => {
      total += pago.coste;

      const year = new Date(pago.fecha).getFullYear();
      const month = new Date(pago.fecha).toLocaleString('default', { month: 'long' });

      // Sumar ingresos por año
      if (!ingresosPorAno[year]) {
        ingresosPorAno[year] = 0;
      }
      ingresosPorAno[year] += pago.coste;

      // Sumar ingresos por mes
      if (!ingresosPorMes[month]) {
        ingresosPorMes[month] = 0;
      }
      ingresosPorMes[month] += pago.coste;
    });

    this.totalIngresos = total;

    // Convertir los objetos a arrays para mostrar en el HTML
    this.ingresosPorAno = Object.keys(ingresosPorAno).map(year => ({
      year: parseInt(year),
      total: ingresosPorAno[parseInt(year)]
    }));

    this.ingresosPorMes = Object.keys(ingresosPorMes).map(month => ({
      month: month,
      total: ingresosPorMes[month]
    }));
  }
}
