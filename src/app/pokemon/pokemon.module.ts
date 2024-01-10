import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';

import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularToastifyModule,
  ],
  providers:[ToastService],
  exports:[
    MainPageComponent
  ]
})
export class PokemonModule { }
