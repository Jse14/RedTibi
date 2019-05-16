import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './login/login.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent},
  { path: 'list', loadChildren: './AA_Muro/list/list.module#ListPageModule'},
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
  { path: 'anuncio', loadChildren: './anuncio/anuncio.module#AnuncioPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'crear-evento', loadChildren: './crear-evento/crear-evento.module#CrearEventoPageModule' },
  { path: 'mensaje', loadChildren: './mensaje/mensaje.module#MensajePageModule' },
  { path: 'pop-mensaje', loadChildren: './pop-mensaje/pop-mensaje.module#PopMensajePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
