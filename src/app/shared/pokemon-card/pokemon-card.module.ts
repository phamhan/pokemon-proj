import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class PokemonCardModule {
}
