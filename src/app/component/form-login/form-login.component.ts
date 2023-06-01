import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
public formulario:FormGroup;

constructor(private formBuilder:FormBuilder){
  this.buildForm();
  
}

private buildForm(){
  this.formulario=this.formBuilder.group({
    "nombre":[,Validators.required],
    "email":[,Validators.required,Validators.email]
  });
  
}
ngOnInit():void{};
register(){
   
  const user=this.formulario.value;
  console.log(user);
  this.buildForm();
}
}
