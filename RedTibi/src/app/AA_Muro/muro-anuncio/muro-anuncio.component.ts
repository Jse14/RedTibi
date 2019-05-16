import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-muro-anuncio',
  templateUrl: './muro-anuncio.component.html',
  styleUrls: ['./muro-anuncio.component.scss'],
})
export class MuroAnuncioComponent implements OnInit {

  @Input() anuncio:String
  numero = 1;
  constructor() {
    this.numero = Math.floor(Math.random()*2)+1;
  }

  ngOnInit() {}

}
