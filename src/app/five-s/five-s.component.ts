import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-s',
  templateUrl: './five-s.component.html',
  styleUrls: ['./five-s.component.css']
})
export class FiveSComponent {


  preguntasSeiri: String[] = ['¿Se ha realizado una clasificación reciente?',
    '¿Todos los elementos son necesarios?',
    '¿Se han eliminado adecuadamente los elementos no esenciales?',
    '¿Hay un sistema establecido para identificar y clasificar los elementos?'];

  preguntasSeiton: String[] = ['¿Cada elemento tiene un lugar designado?',
    '¿El espacio de trabajo está organizado eficientemente?',
    '¿Se han establecido reglas claras sobre cómo organizar y mantener el orden?',
    '¿Se revisa y ajusta regularmente la disposición de los elementos?'];

  preguntasSeiso: String[] = ['¿Se realiza regularmente la limpieza del área de trabajo?',
    '¿Existe un programa de mantenimiento para prevenir la acumulación de suciedad y desorden?',
    '¿Se fomenta la participación de todos en las actividades de limpieza?',
    '¿Se han identificado y eliminado las fuentes de suciedad y desorden en el área de trabajo?'];

  preguntasSeiketsu: String[] = ['¿Se han establecido procedimientos estándar para las actividades de clasificación, orden y limpieza?',
    '¿Están documentados y comunicados estos procedimientos a todo el personal?',
    '¿Se realiza capacitación regular para garantizar que todos comprendan y sigan los estándares establecidos?',
    '¿Los estándares se revisan y actualizan según sea necesario?'];

  preguntasShitsuke: String[] = ['¿Existe un compromiso constante por parte de todo el equipo para seguir los estándares establecidos?',
    '¿Se refuerza positivamente el cumplimiento de los estándares?',
    '¿Se abordan y corrigen rápidamente las desviaciones del sistema?',
    '¿Se promueve la autodisciplina y la responsabilidad individual en la aplicación de las "5S"?'];

  respuestasSeiri: string[] = new Array(4);
  respuestasSeiton: string[] = new Array(4);
  respuestasSeiso: string[] = new Array(4);
  respuestasSeiketsu: string[] = new Array(4);
  respuestasShitsuke: string[] = new Array(4);


  arrayPorcentajes: number[] = new Array(5);
  arrayNombres: string[] = new Array('Seiri', 'Seiton', 'Seiso', 'Seiketsu', 'Shitsuke');
  mostrarResultados: boolean = false;

  getPorcentaje(array: String[]): number {
    if (array.length === 0) {
      return 0;
    }

    let countTrue: number = 0;

    for (let index = 0; index < array.length; index++) {
      if (array[index] === 'true') {
        countTrue += 1;
      }
    }

    // Calcular el porcentaje
    const porcentaje: number = (countTrue / array.length) * 100;

    console.log('countTrue: ' + countTrue);
    console.log('porcentaje: ' + porcentaje);

    return porcentaje;
  }


  getResultados() {

    this.arrayPorcentajes[0] = this.getPorcentaje(this.respuestasSeiri);
    this.arrayPorcentajes[1] = this.getPorcentaje(this.respuestasSeiton);
    this.arrayPorcentajes[2] = this.getPorcentaje(this.respuestasSeiso);
    this.arrayPorcentajes[3] = this.getPorcentaje(this.respuestasSeiketsu);
    this.arrayPorcentajes[4] = this.getPorcentaje(this.respuestasShitsuke);

    this.mostrarResultados = true;
  }


  reloadPage() {
    window.location.reload();
  }




}
