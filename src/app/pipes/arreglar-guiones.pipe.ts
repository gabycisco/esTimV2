import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arreglarGuiones'
})
export class ArreglarGuionesPipe implements PipeTransform {

  transform(str: string): string {
    return str.replace("_","  ");
  }

}
