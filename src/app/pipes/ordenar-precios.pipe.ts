import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../modules/home/home.component';


@Pipe({
  name: 'ordenarPrecios'
})
export class OrdenarPreciosPipe implements PipeTransform {
  
  transform( values: Game[], field: keyof Game): Game[]{
    return values.sort((value1, value2) => (value1[field] as number) - (value2[field] as number));
  }

}
