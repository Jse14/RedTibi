import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

import { ThemeService } from '../theme.service';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  idioms: any[] = [
    {
      value: 'es',
      label: 'Español'
    },
    {
      value: 'en',
      label: 'Inglés'
    }
  ];
  constructor(private translateService: TranslateService,private theme: ThemeService) {
  }

  ngOnInit() {
  }

  choose(lang) {
    this.translateService.use(lang.detail.value);
  }
  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }
}
