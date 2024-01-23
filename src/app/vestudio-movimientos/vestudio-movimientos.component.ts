import { Component } from '@angular/core';

@Component({
  selector: 'app-vestudio-movimientos',
  templateUrl: './vestudio-movimientos.component.html',
  styleUrls: ['./vestudio-movimientos.component.css']
})
export class VestudioMovimientosComponent {
  actividad: string = '';
  tiempo: number | null = null;
  historial: { actividad: string, tiempo: number }[] = [];

  registrarTiempo(): void {
    if (this.actividad && this.tiempo !== null) {
      const registro = { actividad: this.actividad, tiempo: this.tiempo };
      this.historial.push(registro);

      // Aquí podrías realizar cálculos o enviar datos a un servidor para un análisis más avanzado.

      // Limpiar los campos después de registrar el tiempo
      this.actividad = '';
      this.tiempo = null;
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
