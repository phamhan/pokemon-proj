import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { containers } from './containers';
import { MaterialModule } from '../material.module';
import { PokemonCardModule } from '../shared/pokemon-card/pokemon-card.module';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SafePipe } from '../shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    containers,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HomeRoutingModule,
    PokemonCardModule,
    IvyCarouselModule,
  ]
})
export class HomeModule {
}
