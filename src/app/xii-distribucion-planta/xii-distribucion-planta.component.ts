import { Component } from '@angular/core';

@Component({
  selector: 'app-xii-distribucion-planta',
  templateUrl: './xii-distribucion-planta.component.html',
  styleUrls: ['./xii-distribucion-planta.component.css']
})

export class XiiDistribucionPlantaComponent {
  definicion: string = '';
  tipos: string = '';
  factores: string = '';
  mostrarResultados: boolean = false;

  analizarDistribucion() {
    if (this.definicion.trim() !== '' && this.tipos.trim() !== '' && this.factores.trim() !== '') {
      // Puedes realizar más lógica aquí si es necesario
      this.mostrarResultados = true;
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
