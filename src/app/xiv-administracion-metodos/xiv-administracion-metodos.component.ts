import { Component } from '@angular/core';

@Component({
  selector: 'app-xiv-administracion-metodos',
  templateUrl: './xiv-administracion-metodos.component.html',
  styleUrls: ['./xiv-administracion-metodos.component.css']
})
export class XivAdministracionMetodosComponent {
  objetivo: string = '';
  recursos: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  proyectosPlanificados: any[] = [];

  planificarMejora() {
    if (this.objetivo.trim() !== '' && this.recursos.trim() !== '' && this.fechaInicio !== '' && this.fechaFin !== '') {
      const proyecto = {
        objetivo: this.objetivo,
        recursos: this.recursos,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      };

      this.proyectosPlanificados.push(proyecto);

      // Guardar en el almacenamiento local
      localStorage.setItem('proyectosPlanificados', JSON.stringify(this.proyectosPlanificados));
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  // Mostrar proyectos planificados al cargar la página
  constructor() {
    this.mostrarProyectosPlanificados();
  }

  mostrarProyectosPlanificados() {
    const proyectosPlanificadosStr = localStorage.getItem('proyectosPlanificados');
    if (proyectosPlanificadosStr) {
      this.proyectosPlanificados = JSON.parse(proyectosPlanificadosStr);
    } else {
      this.proyectosPlanificados = [];
    }
  }
}
