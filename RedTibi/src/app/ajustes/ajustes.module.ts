import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjustesPage } from './ajustes.page';
import { TranslateModule } from '@ngx-translate/core';

import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: AjustesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [AjustesPage]
})
export class AjustesPageModule {}
