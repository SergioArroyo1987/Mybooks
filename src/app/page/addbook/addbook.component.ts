import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
constructor(public librosServicio:BooksService){
  
}
enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
  this.librosServicio.add(new Book(titulo,genero,autor,precio,url,id,user));
  
  
}
}
