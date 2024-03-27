import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
 public nameLower: string = 'giselle';
 public nameUpper:string = 'GISELLE';
 public fullName:string='GiSeLlE CaNo';

 public customDate:Date = new Date();

}
