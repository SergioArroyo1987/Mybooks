import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros:Book[];
  constructor(){
    this.libros=[
      new Book("sergio","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg"),
      new Book("Irene","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg")
      ]  ;
}
enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
  this.libros.push(new Book(titulo,genero,autor,precio,url,id,user));
}
eliminarlibro(borrarlibro:number):void{
  console.log(borrarlibro);
  
  this.libros=this.libros.filter(exlibros=>exlibros.id_book!=borrarlibro);
}
}

