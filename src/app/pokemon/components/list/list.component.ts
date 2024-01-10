import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemons } from '../../interface/pokemons.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public pokemonList: Pokemons[] = [{
    name: 'Abra',
    type: 'Psiquico'
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()


  onDeletePokemon(id?: string):void{
    if(!id) return
    this.onDelete.emit(id)
  }

}
