import { Injectable } from '@angular/core';
import { Pokemons } from '../interface/pokemons.interface';
import { ToastService } from 'angular-toastify';
import {v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _toastService: ToastService) { }

  public pokemons:Pokemons[] = []

  onNewPokemon( pokemon: Pokemons ):void{
    const newPokemon:Pokemons = { id:uuid(),...pokemon }
    this.pokemons.push(newPokemon)
  }

  deletePokemonById(id: string){
    const deletedPokemonIndex = this.pokemons.findIndex(pokemon => pokemon.id === id);

  if (deletedPokemonIndex !== -1) {
    const deletedPokemon = this.pokemons.splice(deletedPokemonIndex, 1)[0];
    this._toastService.warn(`${deletedPokemon.name} eliminado`);
  } else {
    this._toastService.info(`No se encontró el Pokémon con ID ${id}`);
  }
  }

}
