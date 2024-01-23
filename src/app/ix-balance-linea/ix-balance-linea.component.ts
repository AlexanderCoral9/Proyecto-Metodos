import { Component } from '@angular/core';

@Component({
  selector: 'app-ix-balance-linea',
  templateUrl: './ix-balance-linea.component.html',
  styleUrls: ['./ix-balance-linea.component.css']
})
export class IxBalanceLineaComponent {
  tipoLinea: string = 'produccion';
  numeroEstaciones: number | undefined;
  produccionPorEstacion: number | undefined;
  mostrarResultados: boolean = false;

  produccionTotal: number | undefined;
  tiempoMuerto: number | undefined;
  eficienciaLinea: number | undefined;

  calcularBalance() {
    if (this.numeroEstaciones !== undefined && this.produccionPorEstacion !== undefined) {
      this.produccionTotal = this.numeroEstaciones * this.produccionPorEstacion;
      this.tiempoMuerto = this.produccionTotal > 0 ? (this.numeroEstaciones - 1) * 5 : 0;
      this.eficienciaLinea = ((this.produccionTotal - this.tiempoMuerto) / this.produccionTotal) * 100;

      this.mostrarResultados = true;
    } else {
      alert('Por favor, ingrese números válidos.');
    }
  }
}
