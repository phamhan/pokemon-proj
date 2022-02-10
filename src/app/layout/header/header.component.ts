import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Result } from 'src/app/models';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  gameVersions: Array<Result>;
  generations: Array<Result>;

  constructor(
    private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGameVersions();
    this.getGenerations();
  }

  getGameVersions(): void {
    this.gamesService.getVersions().pipe(take(1)).subscribe(val => {
      this.gameVersions = val.results;
    });
  }

  getGenerations(): void {
    this.gamesService.getGenerations().pipe(take(1)).subscribe(val => {
      this.generations = val.results;
    });
  }

}
