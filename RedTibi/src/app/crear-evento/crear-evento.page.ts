import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

}
