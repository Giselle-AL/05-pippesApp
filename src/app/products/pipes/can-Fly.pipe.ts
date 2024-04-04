
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede' | 'No puede' {
    return value  ?   'Puede' : 'No puede';
  }
}
