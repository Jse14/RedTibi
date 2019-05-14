import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { SingletonService } from './singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Muro',
      url: '/list',
      icon: 'list'
    },{
      title: 'Perfil',
      url: '/perfil',
      icon: 'contact'
    },{
      title: 'Contactos',
      url: '/contactos',
      icon: 'people'
    },{
      title: 'Eventos',
      url: '/eventos',
      icon: 'images'
    },{
      title: 'Mensajes',
      url: '/mensaje',
      icon: 'chatbubbles'
    },{
      title: 'Anuncios',
      url: '/anuncio',
      icon: 'cash'
    },{
      title: 'Ajustes',
      url: '/ajustes',
      icon: 'settings'
    },{
      title: 'Salir',
      url: '/login',
      icon: 'log-out'
    }

  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    public global: SingletonService
  ) {
    this.initializeApp();
    this.global.loginState = false;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.addLangs(['es','en']);
      this.translate.setDefaultLang('en');
      this.translate.use('es');
    });
  }
}
