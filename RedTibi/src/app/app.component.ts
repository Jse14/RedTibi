import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

import { Storage } from '@ionic/storage';
import { ThemeService } from './theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  

  public appPages = [
    {title: 'Muro', url: '/list', icon: 'list'},
    {title: 'Perfil', url: '/perfil', icon: 'contact'},
    {title: 'Contactos', url: '/contactos', icon: 'people'},
    {title: 'Eventos', url: '/eventos', icon: 'images'},
    {title: 'Mensajes', url: '/mensaje', icon: 'chatbubbles'},
    {title: 'Anuncios', url: '/anuncio', icon: 'cash'},
    {title: 'Ajustes', url: '/ajustes', icon: 'settings'},
    {title: 'Salir', url: '/', icon: 'log-out'}
  ];

  login = true;
  registro = false;
  conectado:boolean=false;
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private themeService:ThemeService,
  ) {
    
  }
  logout(){
    this.conectado = false;
    this.login = true;
    this.registro = false;
    this.storage.remove('token');
    
  }
  conectar(event):void{
    this.conectado=event;
  }
  
  toLogin(){this.login = true;this.registro=false;}
  toRegistro(){this.login=false;this.registro=true;}

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.addLangs(['es','en']);
      this.translate.setDefaultLang('en');

      this.storage.get('lang').then((val) => {
        if(val==null) this.translate.use('es');
        else this.translate.use(val);
      });
      this.storage.get('theme').then(cssText => {
        this.themeService.setGlobalCSS(cssText);
      });
      this.storage.get('token').then(token => {
        if(token==null) this.conectado=false;
        else {
          this.login=false;
          this.registro = false;
          this.conectado=true;
        }
      });

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.storage.set('lang', event.lang);
      });
    });
  }
  ngOnInit(): void {
    this.initializeApp();
  }
}
