import { Component,OnInit } from '@angular/core';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent   {
public formulario:FormGroup;

constructor(private formBuilder:FormBuilder){
  this.buildForm();
  
}

private buildForm(){
  this.formulario=this.formBuilder.group({
    "nombre":[,Validators.required],
    "correo":[,[Validators.required,Validators.email]]
  });
  
}

register(){
   
  const user=this.formulario.value;
  console.log(user);
  this.buildForm();
}
}
