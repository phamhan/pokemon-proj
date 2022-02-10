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
