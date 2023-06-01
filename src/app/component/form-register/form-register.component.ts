import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  public formulario:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.buildForm();
    
  }
  private buildForm(){
    this.formulario=this.formBuilder.group({
      "nombre":[,Validators.required],
      "correo":[,[Validators.required,Validators.email]],
      "apellido":[,Validators.required],
      "url":[,Validators.required],
      "contraseña":[,[Validators.required,Validators.minLength(6)]],
      "repetir":[,[Validators.required,Validators.minLength(6)]],
    });
    
  }
  
  register(){
   
    const user=this.formulario.value;
    console.log(user);
    this.buildForm();
  }
  comprobar():boolean{
    let devolver=false;
    let contraseña=this.formulario.get("contraseña");
    let repetir=this.formulario.get("repetir");
    if(contraseña==repetir){
      console.log(contraseña,repetir);
      
      devolver=true;
    }
    return devolver;

  }
  ngOnInit(): void {
    
  }
}
