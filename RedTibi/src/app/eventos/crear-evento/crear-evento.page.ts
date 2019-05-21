import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  onEventForm = this.fb.group({
    titulo:['',Validators.required],
    imagen:['', Validators.required],
    description:[''],
    fecha:['',Validators.required],
    lugar:['',Validators.required],
    tipo:['',Validators.required],
    caracter:['',Validators.required]
  });

  constructor(private fb:FormBuilder,private router:Router,private storage:Storage) { }

  ngOnInit() {
  }
  file:Blob=null;
  imageSrc: string = null;
  getPictures(event:any){
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];      
      const reader = new FileReader();
      reader.onload = () => this.imageSrc = reader.result+"";
      reader.readAsDataURL(this.file);
    }
  }

  do(){
    this.router.navigateByUrl('eventos');
    this.storage.set("crearEvento",true)
  }

  

}
