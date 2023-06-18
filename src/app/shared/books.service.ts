import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
   
  private url="http://localhost:3000/book";
  constructor(private http:HttpClient) {
    
   }
   add(libro:Book){
    
    
    console.log("hola");
    
    return this.http.post(this.url,libro);

   }
   getall(){
    console.log("chupi");
    
    return this.http.get(this.url);

   }
   getOne(idlibro:number){
    
    
        return this.http.get(this.url)
      }
    
   
   delete(id:number){
    
    return this.http.request('delete',this.url,{body:{id_book:id}});
   }
   edit(libro:Book){
    console.log(libro);
    
    
      return this.http.put(this.url,libro);
    }
    
    
    
    
   }
   



