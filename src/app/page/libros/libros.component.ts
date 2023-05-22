import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libro:Book[];
  constructor(){
    this.libro=[
      new Book("sergio","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg"),
      new Book("Irene","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg")
      ]  ;
}
enviar(titulo:string,autor:string,precio:number,url:string,genero:string){
  this.libro.push(new Book(titulo,genero,autor,precio,url));
}

}

