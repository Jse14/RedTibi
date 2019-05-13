import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Publi } from '../publi';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  titulo=null;
  p:Publi = new Publi();
  constructor(private navParams:NavParams,private modalController: ModalController) { }

  ngOnInit() {
    this.p.title = this.navParams.get('titulo');
    this.p.subtitle = this.navParams.get('subtitulo');
    this.p.numLikes = this.navParams.get('numLikes');
    this.p.numComents = this.navParams.get('numComents');

  }
  closeModal(){
    this.modalController.dismiss();
  }

  verComentarios = true;
  verAsistentes = false;
  verCompartir = false;

  segmentChanged(ev: any){
    this.verComentarios=false;
    this.verAsistentes=false;
    this.verCompartir=false;
    switch(ev.detail.value){
      case "verComentarios": this.verComentarios=true;return;
      case "verAsistentes": this.verAsistentes=true;return;
      case "verCompartir": this.verCompartir=true;return;
      default:return;
    }
  }

}
