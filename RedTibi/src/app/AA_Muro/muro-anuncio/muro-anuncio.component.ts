import { Component, OnInit,Input } from '@angular/core';
import { Publi } from '../publi';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-muro-anuncio',
  templateUrl: './muro-anuncio.component.html',
  styleUrls: ['./muro-anuncio.component.scss'],
})
export class MuroAnuncioComponent implements OnInit {

  anuncio: Array<Publi>=[];
  myAnuncio: Publi=null;
  numero = 0;
  constructor(private storage:Storage) {

    this.storage.get('anuncios').then((value) => {
      console.log(value)
      if(value!==null) {
        this.anuncio = value;
        this.numero = Math.floor(Math.random()*this.anuncio.length);
        this.myAnuncio = this.anuncio[this.numero];
      }
    })
    
  }

  ngOnInit() {
    
  }
}
