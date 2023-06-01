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
  libros:Book[];
  mostrar:Book;
  constructor(public libro:BooksService,private router:Router){
    this.libros=libro.getall();
    
}

enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
  this.libros.push(new Book(titulo,genero,autor,precio,url,id,user));
}
eliminarlibro(borrarlibro:number):void{
  
  
 this.libros= this.libros.filter(libros=>libros.id_book!=borrarlibro);
 this.libro.delete(borrarlibro);
}
buscarfuncion(a:number){
  if(a){
  this.libros=[];
   this.libros.push(this.libro.getOne(a));
  }else{
    this.libros=this.libro.getall();
  }  
  
  
}


}

