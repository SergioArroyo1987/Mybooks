import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  libro:Book[];
  constructor(){
    this.libro[0]=new Book("sergio","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg");
}
 
 
 
}
