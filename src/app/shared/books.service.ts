import { Injectable } from '@angular/core';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private libros:Book[];
  constructor() {
    this.libros=[
      new Book("sergio","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg",1),
      new Book("Irene","Arroyo","Terror",109,"https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg",2)
      ]  ;
   }
   add(libro:Book):void{
    this.libros.push(libro);

   }
   getall():Book[]{
    return this.libros;

   }
   getOne(idlibro:number):Book{
    for(let recorer of this.libros){
      if(recorer.id_book==idlibro){
        return recorer;
      }
    }
   }
   delete(id:number):boolean{
    this.libros=this.libros.filter(libros=>libros.id_book!=id);
    return true;
   }
   edit(libro:Book):boolean{
    let modificacion=false;
    for(let a=0;a<=this.libros.length;a++){
      if(libro.id_book==this.libros[a].id_book){
        this.libros[a]=libro;
        modificacion=true;
      }
    }
    return modificacion;
   }

}
