import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-muro-publicacion',
  templateUrl: './muro-publicacion.component.html',
  styleUrls: ['./muro-publicacion.component.scss'],
})
export class MuroPublicacionComponent implements OnInit {
  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() numLikes:number;
  @Input() numComents:number;

  constructor() {}
  ngOnInit() {}
}
