import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core'
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { EventosPage } from './eventos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    IonicStorageModule.forRoot(),
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
