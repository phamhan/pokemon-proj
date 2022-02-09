import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { containers } from './containers';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    containers,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,

  ]
})
export class HomeModule {
}
