import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Output() conectado = new EventEmitter();
  @Output() toRegistro = new EventEmitter();
  
  onLoginForm = this.fb.group({
    email:['',Validators.compose([Validators.email,Validators.required])],
    password:['',Validators.required]
  });

  constructor(private fb:FormBuilder,private router:Router,private storage:Storage) { }

  ngOnInit() {
  }

  goToHome(){
    this.storage.set('token','1234');
    this.conectado.emit(true);
  }

  register(){
    this.toRegistro.emit();
    this.router.navigateByUrl('registro');
  }

  get email() {
    return this.onLoginForm.get('email');
  } 
}
