import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

interface Cards {

  img: string,
  text: string,
  year?: number,
  autor: string,

}

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})

export class HistoriaComponent implements OnInit {

  public dataHistoria: Cards[] = [];

  ngOnInit(): void {
    this.dataHistoria = [
      { img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Jean-Rodolphe_Perronet.jpg', 
      text: 'Los estudios más antiguos documentados que se conocen son los que realizo el francés, Perronet, quien hizo un profundo análisis en las tareas que eran necesarias para la fabricación de alfileres.',
      year: 1760, autor: 'Perronet' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/800px-Charles_Babbage_-_1860.jpg', 
      text: 'El inglés Charles Babbage efectuó un estudio parecido y concluyo que aquello solo eran cortometrajes de unas series completas de tareas.', 
      year: 1830, autor: 'Charles Babbage' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Frederick_Winslow_Taylor_%281%29.JPG', 
      text: 'El ingeniero Frederick Taylor creó un sistema científico y sistemático conocido en su momento como Estudio del Tiempo. Dividió las tareas en operaciones fundamentales', 
      year: 1883, autor: 'Frederick Taylor' },
      { img: 'https://wcps.info/wp-content/uploads/2020/10/Gilbreth.png', 
      text: 'Mientras tanto, Frank Gilbreth y su esposa Lillian desarrollaron un enfoque de análisis ligeramente diferente. Desglosa la tarea en sus elementos esenciales. Para Gilbert lo más importante es el movimiento. Así se da origen, el Estudio de Métodos', 
      year: 1912, autor: 'Frank y Lillian Gilbreth' },
      { img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Harold_Bright_Maynard.jpg', 
      text: 'Se utiliza por primera vez la frase “Ingeniería de Métodos” por H. B. Maynard, que la define como la técnica que cada operación determinada del trabajo es sometida a análisis, con el fin de eliminar todas las operaciones innecesarias', 
      year: 1932, autor: 'H.B. Maynard' },
      { img: 'https://www.webyempresas.com/wp-content/uploads/2019/04/Para-qu%C3%A9-sirve-la-Ingenier%C3%ADa-de-M%C3%A9todos.jpg', 
      text: 'En la actualidad, la ingeniería de métodos ha evolucionado para incluir una amplia gama de técnicas, que van desde la robótica y la automatización, hasta la simulación de procesos y la gestión de la cadena de suministro.', 
      autor: 'Actualidad' },
    ];
  }
  
}
