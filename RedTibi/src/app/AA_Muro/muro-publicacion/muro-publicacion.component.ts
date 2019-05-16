import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PublicacionPage } from '../publicacion/publicacion.page';
import { Publi } from '../publi';

@Component({
  selector: 'app-muro-publicacion',
  templateUrl: './muro-publicacion.component.html',
  styleUrls: ['./muro-publicacion.component.scss'],
})
export class MuroPublicacionComponent implements OnInit {
  @Input() publicacion:Publi

  constructor(private modalController:ModalController) {}
  ngOnInit() {}
  async openModal(){
    var modal = await this.modalController.create({
      component: PublicacionPage,
      componentProps:{
        publicacion : this.publicacion
      }
    });
    return await modal.present();
  }
}
