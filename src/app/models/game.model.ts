import { environment } from 'src/environments/environment';
import { items, pokemon } from './const';

export interface GameVersionResult {
    count: number;
    next?: string;
    previous?: string;
    results?: Array<Result>;
}

export interface Result {
    name: string;
    url: string;
}

export interface PokemonsFilter {
    textSearch?: string;
    url?: string;
    offset?: number;
    limit?: number;
}

export interface PokemonDetail {
    id: string;
    name: string;
    order: string;
    types: Array<PokemonType>;
    weight: number;
    height: number;
    form: Result;
    species: Result;
    url?: string;
}

export interface PokemonType {
    slot: number;
    type: Result;
}

export function getPokemonImage(pokemonUrl: string): string {
    if (!pokemonUrl || pokemonUrl.length < 1) {
        return `${environment.imgRoot}/${pokemon}/0.png`;
    }
    const pokemonId = pokemonUrl.replace(`${environment.apiRoot}/${pokemon}/`, '').replace('/', '');
    return `${environment.imgRoot}/${pokemon}/${pokemonId}.png`;
}

export function getItemImage(itemName: string): string {
    if (!itemName || itemName.length < 1) {
        return `${environment.imgRoot}/${pokemon}/0.png`;
    }
    return `${environment.imgRoot}/${items}/${itemName}.png`;
}
