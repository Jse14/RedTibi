import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
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
  ];;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  choose(lang) {
    this.translateService.use(lang.detail.value);
  }
}
