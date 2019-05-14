import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensajePage } from './mensaje.page';
import { EnviarMensajeComponent } from '../enviar-mensaje/enviar-mensaje.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MensajePage
      }
    ])
  ],
  declarations: [MensajePage,EnviarMensajeComponent]
})
export class MensajePageModule {}
