import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {

  onAnuncioForm = this.fb.group({
    imagen:['',Validators.required],
    fecha:['',Validators.required],
    pago:['',Validators.required]
  });

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

}
