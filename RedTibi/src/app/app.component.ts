import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: '/list',
      icon: 'images'
    },{
      title: 'Mensajes',
      url: '/list',
      icon: 'chatbubbles'
    },{
      title: 'Anuncios',
      url: '/list',
      icon: 'cash'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
