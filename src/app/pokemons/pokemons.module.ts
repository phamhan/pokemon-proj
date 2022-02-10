import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { containers } from './containers';
import { MaterialModule } from '../material.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { components } from './components';
import { PokemonCardModule } from '../shared/pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [
    containers,
    components,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonsRoutingModule,
    PokemonCardModule
  ]
})
export class PokemonsModule {
}
