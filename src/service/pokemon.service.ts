import { Injectable } from '@nestjs/common';
import { CardBrief } from '../model/card-brief.model';

@Injectable()
export class PokemonService {
    async findRandomCardByNameAndCategory(name: string, category: string): Promise<CardBrief[]> {
        const url = `https://api.tcgdex.net/v2/en/cards?name=${name}&category=${category}`;
        const res = await fetch(url);
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return [];

        const cards = this.mapToCardBriefArray(data);

        if (cards.length === 1) return cards;
        const idx = Math.floor(Math.random() * cards.length);

        return [cards[idx]];
    }

    private mapToCardBriefArray(cardsToMap: any[]): CardBrief[] {
        const cardsMapped: CardBrief[] = new Array(cardsToMap.length);

        for (let i = 0; i < cardsToMap.length; i++) {
            const card = cardsToMap[i];
            cardsMapped[i] = {
                id: card.id,
                localId: card.localId,
                name: card.name,
                image: card.image
            };
        }
        return cardsMapped;
    }
} 