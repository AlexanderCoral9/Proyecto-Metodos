import { Component } from '@angular/core';

@Component({
  selector: 'app-vii-herramientas-reactivas',
  templateUrl: './vii-herramientas-reactivas.component.html',
  styleUrls: ['./vii-herramientas-reactivas.component.css']
})
export class ViiHerramientasReactivasComponent {
  itemAVerificar: string = '';
  historial: string[] = [];
  canvas: any;
  ctx: any;

  ngOnInit(): void {
    this.canvas = document.getElementById('histograma');
    this.ctx = this.canvas.getContext('2d');
  }

  agregarChequeo() {
    if (this.itemAVerificar) {
      this.historial.push(this.itemAVerificar);
      this.actualizarHistorial();
      this.dibujarHistograma();
      this.itemAVerificar = '';
    } else {
      alert('Por favor, ingrese un ítem a verificar.');
    }
  }

  actualizarHistorial() {
    // No es necesario hacer nada aquí, Angular se encarga automáticamente de actualizar la lista.
  }

  dibujarHistograma() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const frecuencias = this.calcularFrecuencias();
    const maxFrecuencia = Math.max(...frecuencias);

    const barWidth = this.canvas.width / this.historial.length;

    frecuencias.forEach((frecuencia, index) => {
      const barHeight = (frecuencia / maxFrecuencia) * this.canvas.height;
      const x = index * barWidth;
      const y = this.canvas.height - barHeight;

      this.ctx.fillStyle = '#3498db';
      this.ctx.fillRect(x, y, barWidth, barHeight);
    });
  }

  calcularFrecuencias() {
    const frecuencias: { [key: string]: number } = {};

    this.historial.forEach(item => {
      frecuencias[item] = (frecuencias[item] || 0) + 1;
    });

    return Object.values(frecuencias);
  }
}
