import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopMensajePage } from '../pop-mensaje/pop-mensaje.page';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrls: ['./enviar-mensaje.component.scss'],
})
export class EnviarMensajeComponent implements OnInit {
  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() hora:string;
  @Input() numero:number;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  async openModal(){
    const modal = await this.modalController.create({
      component: PopMensajePage,
      componentProps:{
        titulo: this.titulo,
        subtitulo:this.subtitulo,
        hora:this.hora,
        numero:this.numero
      }
    });
    modal.present();
  }

}
