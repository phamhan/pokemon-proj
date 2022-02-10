import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Array<Result>;
  constructor() { }

  ngOnInit(): void {
  }

}
