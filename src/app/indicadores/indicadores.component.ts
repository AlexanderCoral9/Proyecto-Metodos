import { Component, OnInit } from '@angular/core';

interface Indicadores {
  nombre: string;
  nombreCriterio1: string;
  nombreCriterio2: string;
  criterio1?: number;
  criterio2?: number;
  resultado?: number;
  nombreResultado: string;
  msgIndicador?: string;
  clickIndicador: boolean;
  accion: boolean; //true es para dividir y false para multiplicar
}

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  public arrayIndicadores: Indicadores[] = [
    //eficiencia economica
    {
      nombre: 'Calculadora de la Eficiencia Economica',
      nombreCriterio1: 'Resultados Obtenidos',
      nombreCriterio2: 'Recursos Utilizados: ',
      nombreResultado: 'La Eficiencia Economica es: ',
      clickIndicador: false,
      accion: true,
    },

    //eficiencia fisica
    {
      nombre: 'Calculadora de la Eficiencia Fisica',
      nombreCriterio1: 'Produccion Real',
      nombreCriterio2: 'Produccion Esperada',
      nombreResultado: 'La Eficiencia Fisica es: ',
      clickIndicador: false,
      accion: true,
    },

    //eficacia
    {
      nombre: 'Calculadora de la Eficacia',
      nombreCriterio1: 'Resultados Planificados Logrados: ',
      nombreCriterio2: 'Resultados Planificados: ',
      nombreResultado: 'La Eficacia es: ',
      clickIndicador: false,
      accion: true,
    },

    {
      nombre: 'Calculadora de la Efectividad',
      nombreCriterio1: 'Eficacia',
      nombreCriterio2: 'Eficiencia',
      nombreResultado: 'La Efectividad es: ',
      clickIndicador: false,
      accion: false,
    },

    {
      nombre: 'Calculadora de la Productividad',
      nombreCriterio1: 'Producción',
      nombreCriterio2: 'Mano de Obra Empleada',
      nombreResultado: 'La Productividad es: ',
      clickIndicador: false,
      accion: true,
    },

    {
      nombre: 'Calculadora de la Productividad Económica',
      nombreCriterio1: 'Ventas',
      nombreCriterio2: 'Costo',
      nombreResultado: 'La Productividad Economica es: ',
      clickIndicador: false,
      accion: true,
    },

  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  calcularIndicador(indicador: Indicadores) {
    // Lógica para calcular eficiencia económica
    // Validar
    if (indicador.criterio1 === undefined || indicador.criterio2 === undefined || indicador.criterio1 === null || indicador.criterio2 === null) {
      indicador.msgIndicador = 'Faltan completar algunos campos';
    } else {
      if (indicador.accion) {//divido
        if (indicador.nombre === 'Calculadora de la Productividad Económica') {
          indicador.resultado = this.dividir(parseFloat(indicador.criterio1.toString()) - parseFloat(indicador.criterio2.toString()), parseFloat(indicador.criterio1.toString())) * 100;
        } else {
          indicador.resultado = this.dividir(parseFloat(indicador.criterio1.toString()), parseFloat(indicador.criterio2.toString())) * 100;
        }
      } else {//multiplico
        indicador.resultado = this.multiplicar(parseFloat(indicador.criterio1.toString()), parseFloat(indicador.criterio2.toString())) * 100;
      }
      indicador.msgIndicador = indicador.nombreResultado + indicador.resultado + '%';
    }
    indicador.clickIndicador = true;
  }

  // Función para dividir dos números
  dividir(numero1: number, numero2: number): number {
    if (numero2 === 0) {
      throw new Error('No se puede dividir por cero');
    }

    return numero1 / numero2;
  }

  // Función para multiplicar dos números
  multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }

}
