import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { Result, getPokemonImage, getItemImage } from 'src/app/models';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Result;
  @Input() isItem: boolean;

  get pokemonName(): string {
    return this.pokemon?.name;
  }

  get pokemonImage(): string {
    return this.isItem ? getItemImage(this.pokemon?.name) : getPokemonImage(this.pokemon?.url);
  }

  constructor(
    private dialog: MatDialog,
    private pokemonServices: PokemonsService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    if (!this.isItem) {
      this.pokemonServices.getPokemon(this.pokemon.url).pipe(take(1)).subscribe(val => {
        this.dialog.open(CardModalComponent, {
          width: '600px',
          height: '350px',
          data: {
            title: 'Pokemon Detail',
            pokemon: {...val, url: this.pokemon.url}
          },
        });
      });
    }
  }

}
