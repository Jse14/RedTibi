import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PublicacionPage } from '../publicacion/publicacion.page';

@Component({
  selector: 'app-muro-publicacion',
  templateUrl: './muro-publicacion.component.html',
  styleUrls: ['./muro-publicacion.component.scss'],
})
export class MuroPublicacionComponent implements OnInit {
  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() numLikes:number;
  @Input() numComents:number;

  constructor(private modalController:ModalController) {}
  ngOnInit() {}
  async openModal(){
    var modal = await this.modalController.create({
      component: PublicacionPage,
      componentProps:{
        titulo: this.titulo,
        subtitulo:this.subtitulo,
        numLikes:this.numLikes,
        numComents:this.numComents
      }
    });
    return await modal.present();
  }
}
