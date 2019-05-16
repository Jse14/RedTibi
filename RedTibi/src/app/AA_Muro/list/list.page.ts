import { Component, OnInit } from '@angular/core';
import { Publi } from '../publi';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  eventos = ['Partido de fútbol', 'Beerpong', 'Fiesta universitaria','Picnic en la UA', 'Torneo de paddle','Cervezas en mi casa', 'Partido de baloncesto'];
  public items: Array<Publi>=[];
  public anuncio: Array<String>=['anuncio1','anuncio2'];
  constructor() {
    for (let i = 1; i < 11; i++) {
      var nuevaPubli = new Publi();
      nuevaPubli.title = 'user' + i;
      nuevaPubli.subtitle= '@User' + i;
      nuevaPubli.numLikes=Math.floor(Math.random()*100);
      nuevaPubli.numComents=Math.floor(Math.random()*100);
      nuevaPubli.image="assets/events/"+this.eventos[Math.floor(Math.random()*this.eventos.length)]+".jpg";
      this.items.push(nuevaPubli);
    }
  }

  ngOnInit() {
  }
}
