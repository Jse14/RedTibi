import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ListPage } from '../AA_Muro/list/list.page';
import { Storage } from '@ionic/storage';
import { Publi } from '../AA_Muro/publi';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})

export class AnuncioPage implements OnInit {
  
  onAnuncioForm = this.fb.group({
    descri:['',Validators.required],
    imagen:['',Validators.required],
    fecha:['',Validators.required],
    pago:['',Validators.required]
  });

  public fecha = new Date().toISOString()
  descripcion = ""

  constructor(private fb:FormBuilder,private router:Router,public myService: ListPage,private storage:Storage) { }

  ngOnInit() {
  }

  anyadirAnuncio() {
    this.storage.get('user').then((variable) => {
      var nuevaPubli = new Publi();
      nuevaPubli.title = variable;
      nuevaPubli.subtitle = this.fecha;
      nuevaPubli.icon = this.descripcion;
      let rand = Math.floor(Math.random()*20)+1;
      nuevaPubli.numLikes = rand;
      this.descripcion = ""
      this.myService.crearAnuncio(nuevaPubli)
    })
  }
}
