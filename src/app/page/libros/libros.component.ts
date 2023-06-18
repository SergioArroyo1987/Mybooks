import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libro:Book;
  libros:Book[]=[];
  mostrar:Book;
  constructor(public servicio:BooksService,private router:Router){
    this.getall();
    
}
getall(){
  this.servicio.getall().subscribe((data:Book[])=>{
  this.libros=data;
  console.log("sergio");
  
})}

enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
  let recibido=new Book(titulo,genero,autor,precio,url,id,user);
  console.log(recibido);
  
  this.servicio.add(recibido).subscribe((data:Boolean)=>{
    

  })
}
eliminarlibro(borrarlibro:number):void{
  
  console.log("eliminar");
  
   this.servicio.delete(borrarlibro).subscribe((data:Boolean)=>{
  
   })
   this.getall();
}
buscarfuncion(a:number){
  if(a){
  this.libros=[];
   this.servicio.getOne(a).subscribe((data:Book)=>{
    this.libros.push(data);
   });
   
  }else{
    this.getall();
  }  
  
  
}


}

