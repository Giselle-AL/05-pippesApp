import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
@Pipe({
  name: 'sortBy'
})

export class sortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | undefined, isAscending:boolean=true): Hero[] {
      switch (sortBy) {
        case 'name':
          return heroes.sort((a, b) => (a.name > b.name ? 1 : -1) * (isAscending ? 1 : -1));
        case 'CanFLy':
          return heroes.sort((a, b) => (a.CanFLy === b.CanFLy ? 0 : a.CanFLy ? -1 : 1) * (isAscending ? 1 : -1));
        case 'color':
          return heroes.sort((a, b) => (a.color > b.color ? 1 : -1) * (isAscending ? 1 : -1));
        default:
          return heroes;
      }
  }
}
