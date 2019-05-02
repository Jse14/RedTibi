import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnuncioPage } from './anuncio.page';
import {TranslateModule} from '@ngx-translate/core'
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '',
    component: AnuncioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [AnuncioPage]
})
export class AnuncioPageModule {}
