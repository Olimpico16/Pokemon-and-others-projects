import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public charactersName:string[] = ['Tanjiro Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Uzui Tengen', 'Kyuojuro Rengoku', 'Giyu Tomioka', 'Genya Shinazugawa', 'Muzan Kibutsuji', 'Aoi Kanzaki', 'Nezuko Kamado', 'Akaza', 'Doma', 'Kokushibo', 'Hantengu','Gyokko', 'Gyutaro', 'Dako'];

  public deletedCharacter?:string = '';

  removeLastCharacter():void {
    this.deletedCharacter = this.charactersName.pop()
  }

  orderCharacters():string[] {
    const order = this.charactersName.sort()
    return order
  }

}
