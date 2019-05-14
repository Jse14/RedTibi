import { Component, OnInit } from '@angular/core';
import { Publi } from '../publi';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage implements OnInit {

  public items: Array<Publi>=[];
  public ultimosMensajes: Array<string>=["Hola usuario1, ¿quedamos esta tarde?", "Vamos a salir a las 20",
  "Tengo que estudiar", "Vamonos de fiesta", "Hemos quedado a la 1 en The One"];
  public numMensajes: Array<number>=[2,5,1,4,6];
  public hora: Array<string>=["16:27","15:29","14:39","13:30","12:17"];

  constructor() {
    for (let i = 1; i < 6; i++) {
      var nuevaPubli = new Publi();
      nuevaPubli.title = 'user' + i;
      nuevaPubli.subtitle= this.ultimosMensajes[i - 1];
      nuevaPubli.icon = this.hora[i - 1];
      nuevaPubli.numLikes = this.numMensajes[i - 1];
      this.items.push(nuevaPubli);
    }
  }

  ngOnInit() {
  }

}
