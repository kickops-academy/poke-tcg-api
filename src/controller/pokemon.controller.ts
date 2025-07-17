import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from '../service/pokemon.service';

@Controller('card')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) { }

    @Get('/pokemon/random')
    async findRandomCardsByNameAndCategory(
        @Query('name') name?: string,
        @Query('category') category?: string,
        @Query('amount') amount?: number
    ) {
        const amountNum = Number(amount);
        if (!category || isNaN(amountNum)) return { error: 'Missing category or amount query param' };
        return this.pokemonService.findRandomCardsByNameAndCategory(name, category, amountNum);
    }
}