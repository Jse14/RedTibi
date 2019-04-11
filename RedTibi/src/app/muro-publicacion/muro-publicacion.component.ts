import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-muro-publicacion',
  templateUrl: './muro-publicacion.component.html',
  styleUrls: ['./muro-publicacion.component.scss'],
})
export class MuroPublicacionComponent {
  @Input() titulo:string;
  @Input() subtitulo:string;
  tituloExtra:string = "prueba"
  constructor() {
  }
}
