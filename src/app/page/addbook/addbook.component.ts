import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
constructor(public librosServicio:BooksService){
  
}
enviar(id:number,titulo:string,autor:string,precio:number,url:string,genero:string,user:number){
  let mandar=new Book(titulo,genero,autor,precio,url,id,user);
  
  
  this.librosServicio.add(mandar).subscribe((data)=>{
   
    
  });
  
  
}
}
