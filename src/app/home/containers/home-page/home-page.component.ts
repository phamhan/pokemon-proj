import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { PokemonsFilter, Result } from 'src/app/models';
import { ItemsService } from 'src/app/services/items.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  slides = [
    'https://www.youtube.com/embed/D0zYJ1RQ-fs',
    'https://www.youtube.com/embed/1roy4o4tqQM',
    'https://www.youtube.com/embed/bILE5BEyhdo',
    'https://www.youtube.com/embed/uBYORdr_TY8',
  ];

  pokemons: Array<Result>;
  items: Array<Result>;

  constructor(
    public sanitizer: DomSanitizer,
    private pokemonService: PokemonsService,
    private itemsService: ItemsService,
    ) {
    }

  ngOnInit(): void {
    this.getPokemons();
    this.getItems();
  }

  getPokemons(): void {
    const filter = {
      textSearch: null,
      url: null,
      offset: 0,
      limit: 10,
    } as PokemonsFilter;

    this.pokemonService.getPokemons(filter).pipe(take(1)).subscribe(val => {
      this.pokemons = val.results;
    });
  }

  getItems(): void {
    this.itemsService.getItems().pipe(take(1)).subscribe(val => {
      this.items = val.results;
    });
  }

}
