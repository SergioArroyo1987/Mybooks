import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() exlibros:Book;
@Input() par:Boolean;
@Output() borrarlibro=new EventEmitter<number>();
enviarborrado():void{
  console.log(this.exlibros.id_book);
  
  console.log("dsasdadasdas");
  
  this.borrarlibro.emit(this.exlibros.id_book);
}
}
