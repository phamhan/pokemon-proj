import { environment } from 'src/environments/environment';
import { pokemon } from './const';

export interface GameVersionResult {
    count: number;
    next?: string;
    previous?: string;
    results?: Array<GameVersion>;
}

export interface GameVersion {
    name: string;
    url: string;
}

export function getPokemonImage(pokemonUrl: string): string {
    if (!pokemonUrl || pokemonUrl.length < 1) {
        return `${environment.imgRoot}/${pokemon}/0.png`;
    }
    const pokemonId = pokemonUrl.replace(`${environment.imgRoot}/${pokemon}/`, '').replace('/', '');
    return `${environment.imgRoot}/${pokemon}/${pokemonId}.png`;
}
