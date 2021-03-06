import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core'

import { ListPage } from './list.page';
import { MuroPublicacionComponent} from '../muro-publicacion/muro-publicacion.component'
import { MuroAnuncioComponent } from '../muro-anuncio/muro-anuncio.component';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),    
    IonicStorageModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage,MuroPublicacionComponent,MuroAnuncioComponent]
})
export class ListPageModule {}
