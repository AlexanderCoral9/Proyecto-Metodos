import { Component } from '@angular/core';

interface SumasFactores {
  [key: string]: number;
}

@Component({
  selector: 'app-xii-localizacion-empresas',
  templateUrl: './xii-localizacion-empresas.component.html',
  styleUrls: ['./xii-localizacion-empresas.component.css']
})
export class XiiLocalizacionEmpresasComponent {
  factores: string = '';
  evaluacion: string = '';
  mejorLocalizacion: string = '';

  analizarLocalizacion() {
    const factoresArray = this.factores.split(',').map(factor => factor.trim());
    const evaluacionArray = this.evaluacion.split(',').map(evaluacion => parseInt(evaluacion.trim(), 10));

    if (factoresArray.length > 0 && factoresArray.length === evaluacionArray.length &&
      evaluacionArray.every(valor => !isNaN(valor) && valor >= 1 && valor <= 10)) {

      const sumas: SumasFactores = {};
      for (let i = 0; i < factoresArray.length; i++) {
        const factor = factoresArray[i];
        const valor = evaluacionArray[i];

        if (!(factor in sumas)) {
          sumas[factor] = 0;
        }

        sumas[factor] += valor;
      }

      const mejoresFactores = Object.keys(sumas).filter(factor => sumas[factor] === Math.max(...Object.values(sumas)));
      this.mejorLocalizacion = mejoresFactores.join(', ');
    } else {
      alert('Por favor, ingrese factores y evaluaciones válidas.');
    }
  }
}
