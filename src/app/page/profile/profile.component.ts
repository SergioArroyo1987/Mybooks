import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 persona:User;
 constructor(){
  this.persona=new User("","","","");
 }
 enviar(nombre:string,apellidos:string,correo:string,url:string){
     this.persona=new User(nombre,apellidos,correo,url) ;
  console.log("assddas");
  
console.log(this.persona);



}
}

