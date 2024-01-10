import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemons } from '../../interface/pokemons.interface';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent {

  constructor(private _toastService: ToastService) { }

  @Output()
  public onNewPokemon: EventEmitter<Pokemons> = new EventEmitter();

  public pokemon: Pokemons = {
    name:'',
    type: ''
  };

  addPokemon():void {
    if(this.pokemon.name.length === 0 || this.pokemon.type.length === 0) {
      this._toastService.error('Completa todos los campos')
      return
    }
    this.onNewPokemon.emit({...this.pokemon});
    this._toastService.success(`${this.pokemon.name} agregado con exito`);
    this.pokemon.name = '';
    this.pokemon.type = '';
  }

}

