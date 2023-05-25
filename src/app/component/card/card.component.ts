import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() exlibros:Book;
@Input() par:Boolean;
@Input() buscar:number;
@Input() mostrar:Book;
@Output() borrarlibro=new EventEmitter<number>();

  
enviarborrado():void{
  console.log(this.exlibros.id_book);
  
  console.log("dsasdadasdas");
  
  this.borrarlibro.emit(this.exlibros.id_book);
}
}
