import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-x-punto-optimo',
  templateUrl: './x-punto-optimo.component.html',
  styleUrls: ['./x-punto-optimo.component.css']
})
export class XPuntoOptimoComponent {
  numeroProductos: number = 3;
  produccionPorProducto: number | undefined;

  @ViewChild('resultado', { static: false }) resultadoElement: ElementRef | undefined;
  @ViewChild('gantt', { static: false }) ganttElement: ElementRef | undefined;

  calcularPuntoOptimo() {
    if (this.produccionPorProducto !== undefined) {
      const produccionTotal = this.numeroProductos * this.produccionPorProducto;
      const tiempoTotal = produccionTotal > 0 ? produccionTotal / 2 : 0;

      this.mostrarResultados(produccionTotal, tiempoTotal);
      this.generarDiagramaGantt(this.numeroProductos, tiempoTotal);
    } else {
      alert('Por favor, ingrese números válidos.');
    }
  }

  mostrarResultados(produccionTotal: number, tiempoTotal: number) {
    if (this.resultadoElement) {
      this.resultadoElement.nativeElement.innerHTML = `
        <h3>Resultados del Punto Óptimo</h3>
        <p><strong>Número de Productos:</strong> ${this.numeroProductos}</p>
        <p><strong>Producción por Producto:</strong> ${this.produccionPorProducto} unidades por hora</p>
        <p><strong>Producción Total:</strong> ${produccionTotal} unidades por hora</p>
        <p><strong>Tiempo Total Óptimo:</strong> ${tiempoTotal.toFixed(2)} horas</p>
      `;
    }
  }

  generarDiagramaGantt(numeroProductos: number, tiempoTotal: number) {
    if (this.ganttElement) {
      const ganttTable = document.createElement('table');
      ganttTable.id = 'ganttTable';

      // ... (el resto del código para generar el diagrama de Gantt)

      this.ganttElement.nativeElement.innerHTML = '';
      this.ganttElement.nativeElement.appendChild(ganttTable);
    }
  }

}
