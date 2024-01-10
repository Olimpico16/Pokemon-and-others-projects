import { Injectable } from '@angular/core';
import { Pokemons } from '../interface/pokemons.interface';
import { ToastService } from 'angular-toastify';
import {v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _toastService: ToastService) { }

  public pokemons:Pokemons[] = [{
    id: uuid(),
    name: 'Snorlax',
    type: 'Normal'
  },{
    id: uuid(),
    name: 'Blaziken',
    type: 'Fuego/Lucha'
  },{
    id: uuid(),
    name: 'Bulbasur',
    type: 'Planta'
  }]

  onNewPokemon( pokemon: Pokemons ):void{
    const newPokemon:Pokemons = { id:uuid(),...pokemon }
    this.pokemons.push(newPokemon)
  }

  deletePokemonById(id: string){
    const pokeFilter: (string | undefined)[] = this.pokemons.filter((pokemon) => pokemon.id !== id).map(p => p.id);
    const idNumberPokemon = pokeFilter.reduce((acc: string, num: string | undefined) => {
      if (num !== undefined) {
        return acc + num;
      }
      return acc;
    }, "");

    this._toastService.info(`${this.pokemons} eliminado`)
    console.log(idNumberPokemon);
  }

}
