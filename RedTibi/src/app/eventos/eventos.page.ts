import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  creados;
  asistir;
  pendientes;

  showCreados = true;
  showAsistir = false;
  showPendientes = false;

  dates;
  dates2;
  dates3;

  descripcionCreados;
  descripcionAsistir;
  descripcionPendientes;

  public items: Array<{ event: string; date: string; description:string; numLikes:any;numComents:any}> = [];
  public items2: Array<{ event: string; date: string; description:string; numLikes:any;numComents:any}> = [];
  public items3: Array<{ event: string; date: string; description:string; numLikes:any;numComents:any}> = [];

  constructor() { 
    this.asistir = ['Partido de fútbol', 'Beerpong', 'Fiesta universitaria'];
    this.creados = ['Picnic en la UA', 'Torneo de paddle'];
    this.pendientes = ['Cervezas en mi casa', 'Partido de baloncesto'];

    this.dates = ['27/05/2019', '02/06/2019', '14/06/2019'];
    this.dates2 = ['29/05/2019', '01/06/2019', '19/06/2019'];
    this.dates3 = ['05/06/2019', '10/06/2019'];

    this.descripcionAsistir = ['Partido de fútbol a las 11 en el campo de San Blas', 
    'Beerpong en mi casa a las 12', 'Fiesta en sala The One para la despedida del curso'];
    this.descripcionCreados = ['Picnic en la zona de los patos de la UA', 
    'Torneo de padel en las pistas de la UA. Inscripcion 3 euros.'];
    this.descripcionPendientes = ['Cervecitas de tranquis en mi casa', 'Basquet 3 contra 3, quien pierda invita a una ronda'];
    for (let i = 0; i < this.asistir.length; i++) {
      this.items.push({
        event: this.asistir[i],
        date: this.dates[i],
        description: this.descripcionAsistir[i],
        numLikes:Math.floor(Math.random()*100),
        numComents:Math.floor(Math.random()*100)
      });
    }
    for (let i = 0; i < this.creados.length; i++) {
      this.items2.push({
        event: this.creados[i],
        date: this.dates2[i],
        description: this.descripcionCreados[i],
        numLikes:Math.floor(Math.random()*100),
        numComents:Math.floor(Math.random()*100)
      });
    }
    for (let i = 0; i < this.pendientes.length; i++) {
      this.items3.push({
        event: this.pendientes[i],
        date: this.dates3[i],
        description: this.descripcionPendientes[i],
        numLikes:Math.floor(Math.random()*100),
        numComents:Math.floor(Math.random()*100)
      });
    }
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    if(ev.detail.value=="Asistir"){
      this.showCreados=true;
      this.showAsistir=false;
      this.showPendientes=false;
      return;
    }
    if(ev.detail.value=="Creados"){
      this.showCreados=false;
      this.showAsistir=true;
      this.showPendientes=false;
      return;
    }
    if(ev.detail.value=="Pendientes"){
      this.showCreados=false;
      this.showAsistir=false;
      this.showPendientes=true;
      return;
    }
  }
  acceptEvent(event:any, i:any){
    console.log(i);
    this.items.push({
      event: event.event,
      date: event.date,
      description: event.description,
      numLikes: event.numLikes,
      numComents: event.numComents});
    this.items3.splice(i,1)
  }
  discardEvent(i:any){
    this.items3.splice(i,1)
  }
}
