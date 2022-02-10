import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { GameVersionResult, pageOptionDefault } from 'src/app/models';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Destroyable } from 'src/app/shared/pokemon-card/take-until-destroy';

@Destroyable()
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  listResult: GameVersionResult;
  pageOptionDefault = pageOptionDefault;

  constructor(private pokemonServices: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonServices.getPokemons().pipe(take(1)).subscribe(val => {
      console.log('dsadsa', val);
      this.listResult = val;
    });
  }

  // tslint:disable-next-line:typedef
  pageEvent(event) {

  }

}
