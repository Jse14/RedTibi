import { Component, OnInit } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})

export class ContactosPage implements OnInit {

  contactos;
  contactosFiltrados;
  showContacts = true;
  showPendientes = false;
  contactosPendientes;
  contactosPendientesFiltrados;
  public buscado:string=""; 

  constructor() { 
    this.contactos=["Juan","Pedro","Ana","Miguel","Fernando","Paula","Emilia"];
    this.contactosPendientes=["Javier","Manuel","Angela","Helena","Miriam"];
    this.filter();
  }

  ngOnInit() {
  }

  filter(){
    this.contactosFiltrados = this.contactos.filter(item => {
      return item.toLocaleLowerCase().indexOf(this.buscado.toLocaleLowerCase())>-1;
    })
    this.contactosPendientesFiltrados = this.contactosPendientes.filter(item => {
      return item.toLocaleLowerCase().indexOf(this.buscado.toLocaleLowerCase())>-1;
    })
  }

  segmentChanged(ev: any) {
    if(ev.detail.value=="friends"){
      this.showContacts=true;
      this.showPendientes=false;
      return;
    }
    if(ev.detail.value=="pendientes"){
      this.showContacts=false;
      this.showPendientes=true;
      return;
    }
  }

  acceptContact(name:string){
    this.contactos.push(this.contactosPendientes[name])
    this.contactosPendientes.splice(name,1)
    this.filter();
  }
  discardContact(name:string){
    this.contactosPendientes.splice(name,1)
    this.filter();
  }
}
