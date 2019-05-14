import { Component, OnInit } from '@angular/core';
import { Publi } from '../publi';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pop-mensaje',
  templateUrl: './pop-mensaje.page.html',
  styleUrls: ['./pop-mensaje.page.scss'],
})
export class PopMensajePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  titulo=null;
  message="";
  p:Publi = new Publi();

  public items: Array<Publi>=[];
  public mensajePropio: Array<string>=["Holiiii", "¿Que tal te va?"];
  public mensajeOtro: Array<string>=["Eiiiiii", "Haciendo GCS je je je"];

  constructor(private navParams:NavParams,private modalController: ModalController) { 
    for (let i = 1; i < 3; i++) {
      var nuevaPubli = new Publi();
      nuevaPubli.title = this.mensajePropio[i - 1];
      nuevaPubli.subtitle = this.mensajeOtro[i - 1];
      this.items.push(nuevaPubli);
    }
  }

  ngOnInit() {
    this.titulo = this.navParams.get('titulo');
  }

  sendMessage() {
    var nuevaPubli = new Publi();
    nuevaPubli.title = this.message;
    this.message = "";
    nuevaPubli.subtitle = "Vale";
    this.items.push(nuevaPubli);
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
