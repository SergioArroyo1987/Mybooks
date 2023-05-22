import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class ReferenciaPipe implements PipeTransform {

  transform(value:string):string {
    let resultado:string;
    resultado="Ref - "+value;
    return resultado;
  }

}
