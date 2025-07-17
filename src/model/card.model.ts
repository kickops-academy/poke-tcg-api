import { Booster } from './booster.model';
import { SetBrief } from './set-brief.model';

export interface CardModel {
    id: string;
    localId: string | number;
    name: string;
    image?: string;
    category: string;
    illustrator?: string;
    rarity?: string;
    variants: {
        normal: boolean;
        reverse: boolean;
        holo: boolean;
        firstEdition: boolean;
    };
    boosters?: Booster[] | null;
    set: SetBrief;
    // Pokémon-specific
    dexId?: number[];
    hp?: number;
    types?: string[];
    evolveFrom?: string;
    description?: string;
    level?: string;
    stage?: string;
    suffix?: string;
    item?: { name: string; effect: string };
    // Trainer-specific
    effect?: string;
    trainerType?: string;
    // Energy-specific
    energyType?: string;
} 