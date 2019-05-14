import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SingletonService } from '../singleton.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  onLoginForm = this.fb.group({
    email:['',Validators.compose([Validators.email,Validators.required])],
    password:['',Validators.required]
  });

  constructor(private fb:FormBuilder,private router:Router,public global: SingletonService) { }

  ngOnInit() {
  }

  goToHome(){
    this.global.loginState = true;
    this.router.navigateByUrl('list');
  }

  register(){
    this.router.navigateByUrl('registro');
  }

  get email() {
    return this.onLoginForm.get('email');
  } 
}
