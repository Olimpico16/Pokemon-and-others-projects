import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  public name:string = 'kyojuro rengoku';
  public age:string = '20';

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return ` ${this.name} - ${this.age}`;
  }

  changeCharacter():void   {
    this.name = 'Muichiro Tokito';
  }

  changeAge():void {
   this.age = '14';

  }

  resetForm():void {
    this.name = 'kyojuro rengoku';
    this.age = '20';

  }

}
