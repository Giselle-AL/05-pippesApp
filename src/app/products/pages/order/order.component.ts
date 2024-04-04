import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.innterface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public orderBy: keyof Hero | undefined;

  public heroes: Hero[] =[
    {
      name: 'Midoriya',
      CanFLy: true,
      color: Color.green
    },
    {
      name: 'Hawks',
      CanFLy: true,
      color: Color.yellow
    },
    {
      name: 'Kirishima',
      CanFLy: false,
      color: Color.red
    },
    {
      name: 'Todoroki',
      CanFLy: true,
      color: Color.white
    },
    {
      name: 'Bakugo',
      CanFLy: true,
      color: Color.orange
    },
    {
      name: 'Uraraka',
      CanFLy: true,
      color: Color.pink
    },
    {
      name: 'All Might',
      CanFLy: false,
      color: Color.yellow
    },
    {
      name: 'Endeavor',
      CanFLy: true,
      color: Color.red
    },
    {
      name: 'Aizawa',
      CanFLy: false,
      color: Color.black
    },
    {
      name: 'Momo',
      CanFLy: false,
      color: Color.red
    },
    {
      name: 'Tokoyami',
      CanFLy: true,
      color: Color.black
    },
    {
      name: 'Denki',
      CanFLy: false,
      color: Color.yellow
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy= value;

  }
}
