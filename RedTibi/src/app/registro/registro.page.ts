import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  @Output() toLogin = new EventEmitter();

  onRegisterForm = this.fb.group({
    email:['',Validators.compose([Validators.email,Validators.required])],
    password:['',Validators.required],
    fName:['',Validators.required],
    lName:['',Validators.required]
  });

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  goLogin() {
    this.toLogin.emit();
  }

  get email() {
    return this.onRegisterForm.get('email');
  }
}
