import { Component, OnInit, Injectable } from '@angular/core';
import { Publi } from '../publi';
import { Router } from '@angular/router';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

@Injectable()
export class ListPage implements OnInit {

  private selectedItem: any;

  eventos = ['Partido de fútbol', 'Beerpong', 'Fiesta universitaria','Picnic en la UA', 'Torneo de paddle','Cervezas en mi casa', 'Partido de baloncesto'];
  public items: Array<Publi>=[];
  public anuncio: Array<Publi>=[];

  constructor(private router:Router,private storage:Storage) {
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
    this.storage.get('anuncios').then((value) => {
      this.anuncio = value
    })
  }

  crearAnuncio(arg0: any) {
    this.anuncio.push(arg0)
    this.storage.set('anuncios',this.anuncio);
    this.router.navigateByUrl('list');
  }
}
