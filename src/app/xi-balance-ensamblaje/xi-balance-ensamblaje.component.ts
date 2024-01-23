import { Component } from '@angular/core';

@Component({
  selector: 'app-xi-balance-ensamblaje',
  templateUrl: './xi-balance-ensamblaje.component.html',
  styleUrls: ['./xi-balance-ensamblaje.component.css']
})
export class XiBalanceEnsamblajeComponent {
  tiempoEstacion: string = '';
  analitico: number | undefined;
  pesoPosicional: number | undefined;
  heuristico: number | undefined;

  calcularBalance() {
    const tiemposPorEstacion = this.tiempoEstacion.split('\n').map(tiempo => parseFloat(tiempo.trim()));

    if (tiemposPorEstacion.every(tiempo => !isNaN(tiempo) && tiempo > 0)) {
      this.analitico = this.metodoAnalitico(tiemposPorEstacion);
      this.pesoPosicional = this.metodoPesoPosicional(tiemposPorEstacion);
      this.heuristico = this.metodoHeuristico(tiemposPorEstacion);
    } else {
      alert('Por favor, ingrese tiempos válidos para cada estación.');
    }
  }

  metodoAnalitico(tiempos: number[]): number {
    const sumaTiempos = tiempos.reduce((total, tiempo) => total + tiempo, 0);
    const promedioTiempos = sumaTiempos / tiempos.length;
    return promedioTiempos;
  }

  metodoPesoPosicional(tiempos: number[]): number {
    const pesoPosicional = tiempos.reduce((total, tiempo, index) => total + (tiempo * (index + 1)), 0);
    return pesoPosicional;
  }

  metodoHeuristico(tiempos: number[]): number {
    const maxTiempo = Math.max(...tiempos);
    const heuristico = maxTiempo * 0.8; // Porcentaje arbitrario del tiempo máximo
    return heuristico;
  }
}
