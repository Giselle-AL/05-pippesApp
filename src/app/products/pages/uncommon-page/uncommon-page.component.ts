import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  //i18n Select
  public name:string='Giselle';
  public gender:'Female'|'Male'= 'Female';

  public invitationMap={
    Male:'invitarlo',
    Female:'invitarla'
  };

  public ChangeClient(){
    this.name='Gabriel';
    this.gender='Male';
  }

  //i18n Plural
  public dogs:string[]=['Quique', 'Ramona','Pelusa','Duque Malvavisco','Manchas',
                            'Patas','Huesos','Corazón', 'Titán', 'Caiser']

  public dogsMap={ '=0' : 'ningún perro por bañar',
  '=1':'1 perro por bañar',
  '=2':'2 perros por bañar',
  'other':'# perros por bañar'
  }

  public DeleteClient():void {
    this.dogs.shift();
  }
}
