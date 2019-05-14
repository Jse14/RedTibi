import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
  { path: 'anuncio', loadChildren: './anuncio/anuncio.module#AnuncioPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'crear-evento', loadChildren: './crear-evento/crear-evento.module#CrearEventoPageModule' },  { path: 'mensaje', loadChildren: './mensaje/mensaje.module#MensajePageModule' },
  { path: 'pop-mensaje', loadChildren: './pop-mensaje/pop-mensaje.module#PopMensajePageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
