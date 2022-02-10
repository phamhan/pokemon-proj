import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getPokemonImage, PokemonColors, PokemonDetail } from 'src/app/models';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  get pokemonName(): string {
    return this.data?.pokemon?.name;
  }

  get pokemonImage(): string {
    return getPokemonImage(this.data?.pokemon?.url);
  }

  get pokemonDetail(): PokemonDetail {
    return this.data.pokemon;
  }

  PokemonColors = PokemonColors;

  constructor(
    private dialogRef: MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
