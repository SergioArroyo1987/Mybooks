import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
  constructor(public librosServicio:BooksService){
  
  }
  enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
    console.log("sergio");
    let mandar=new Book(titulo,genero,autor,precio,url,id,user);
    
    
    this.librosServicio.edit(mandar).subscribe((data:Book)=>{
      

    })
    
    
  }
}
