import { Component, Input, OnInit } from '@angular/core';
import { GameVersion, getPokemonImage } from 'src/app/models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: GameVersion;

  get pokemonName(): string {
    return this.pokemon?.name;
  }

  get pokemonImage(): string {
    return getPokemonImage(this.pokemon?.url);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
