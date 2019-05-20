import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Publi } from '../AA_Muro/publi';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})

export class AnuncioPage implements OnInit {
  
  onAnuncioForm = this.fb.group({
    descri:['',],
    imagen:['',],
    fecha:['',Validators.required],
    pago:['',Validators.required]
  });

  public fecha = new Date().toISOString()
  descripcion = ""

  constructor(private fb:FormBuilder,private router:Router,private storage:Storage) { }

  ngOnInit() {
  }

  anyadirAnuncio() {
    this.storage.get('user').then((variable) => {
      var nuevaPubli = new Publi();
      nuevaPubli.title = variable;
      nuevaPubli.subtitle = this.fecha;
      nuevaPubli.icon = this.descripcion;
      nuevaPubli.image = "anuncio"+Math.floor(Math.random()*3+1);
      nuevaPubli.numLikes = Math.floor(Math.random()*20)+1;
      this.storage.get('anuncios').then((value) => {
        if(value===null){
          value=[];
        }
        value.push(nuevaPubli)
        this.storage.set('anuncios',value);
        this.router.navigateByUrl('list');
      })
    })
  }
}
