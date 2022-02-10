import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, take } from 'rxjs/operators';
import { GameVersionResult, pageOptionDefault, PokemonsFilter, Result } from 'src/app/models';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Destroyable, takeUntilDestroyed } from 'src/app/shared/take-until-destroy';

@Destroyable()
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  listResult: GameVersionResult;
  pageOptionDefault = pageOptionDefault;

  form = this.formBuilder.group({
    textSearch: [''],
  });

  get searchCtrl(): FormControl {
    return this.form.get('textSearch') as FormControl;
  }

  get pokemonShow(): Array<Result> {
    const text = this.searchCtrl?.value ?  this.searchCtrl.value.trim().toLowerCase() : null;
    if (text && this.listResult?.count > 0) {
      return this.listResult?.results.filter(v => v.name.toLowerCase().includes(text))
      ?? [];
    }
    return this.listResult?.results ?? [];
  }

  get routerFragment(): string {
   return this.route.snapshot.fragment ?? null;
  }

  constructor(
    private pokemonServices: PokemonsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getPokemons();
    this.searchCtrl.valueChanges.pipe(debounceTime(300), takeUntilDestroyed(this)).subscribe((val: string) => {
      this.getPokemons();
    });
  }

  // tslint:disable-next-line:typedef
  pageEvent(event) {
    if (this.pageOptionDefault.pageSize !== event.pageSize) {
      const pageSize = event.pageSize;
      this.pageOptionDefault.pageSize = pageSize;
      return this.getPokemons(null, 0, pageSize);
    }

    if (this.pageOptionDefault.pageIndex > event.pageIndex) {
      this.getPokemons(this.listResult.previous);
    }else {
      this.getPokemons(this.listResult.next);
    }
    this.pageOptionDefault.pageIndex = event.pageIndex;
  }

  getPokemons(url?: string, offset?: number, limit?: number): void {
    const name = this.searchCtrl.value ?  this.searchCtrl.value.trim().toLowerCase() : null;
    const filter = {
      textSearch: name,
      url,
      offset,
      limit,
    } as PokemonsFilter;

    this.pokemonServices.getPokemons(filter).pipe(take(1)).subscribe(val => {
      this.listResult = val;
    });
  }

}
