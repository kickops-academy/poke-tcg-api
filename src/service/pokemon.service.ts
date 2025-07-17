import { Injectable } from '@nestjs/common';
import { CardBrief } from '../model/card-brief.model';
import { CardModel } from '../model/card.model';

@Injectable()
export class PokemonService {
    async findRandomCardsByNameAndCategory(name: string | undefined, category: string, amount: number): Promise<CardModel[]> {
        if (!name) {
            // Generate 'amount' unique random numbers between 1 and 151
            const dexIds = new Set<number>();
            while (dexIds.size < amount) {
                dexIds.add(Math.floor(Math.random() * 151) + 1);
            }
            // For each dexId, fetch cards and pick one random card from the data array
            const allResults: CardModel[] = [];
            for (const dexId of dexIds) {
                const url = `https://api.tcgdex.net/v2/en/cards?category=${category}&dexId=eq:${dexId}`;
                const res = await fetch(url);
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    // Pick one random card from the data array
                    const randomIdx = Math.floor(Math.random() * data.length);
                    const card = data[randomIdx];
                    const fullCard = await this.findCardById(String(card.id));
                    if (fullCard) {
                        allResults.push(fullCard);
                    }
                }
            }
            return allResults;
        }
        let url = `https://api.tcgdex.net/v2/en/cards?category=${category}`;
        if (name) url += `&name=${name}`;
        const res = await fetch(url);
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return [];

        const cards = this.mapToCardBriefArray(data);

        if (cards.length === 0)
            return [];
        if (amount >= cards.length)
            amount = cards.length;

        // For each card, fetch the full card data by id
        const fullCards: CardModel[] = [];
        for (let i = 0; i < amount; i++) {
            const cardBrief = cards[i];
            const fullCard = await this.findCardById(String(cardBrief.id));
            if (fullCard) {
                fullCards.push(fullCard);
            }
        }
        return fullCards;
    }

    async findCardById(id: string): Promise<CardModel | null> {
        const url = `https://api.tcgdex.net/v2/en/cards/${id}`;
        const res = await fetch(url);
        if (!res.ok) return null;
        const data = await res.json();
        if (!data || !data.id) return null;
        return data as CardModel;
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