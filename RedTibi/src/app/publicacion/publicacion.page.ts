import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Publi } from '../publi';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

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

}
