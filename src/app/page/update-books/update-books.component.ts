import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
  constructor(public librosServicio:BooksService){
  
  }
  enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
    this.librosServicio.edit(new Book(titulo,genero,autor,precio,url,id,user));
    
    
  }
}
