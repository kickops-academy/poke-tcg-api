import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from '../service/pokemon.service';

@Controller('card')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) { }

    @Get('/pokemon/random')
    async findRandomCardByNameAndCategory(@Query('name') name: string, @Query('category') category: string) {
        if (!name || !category) return { error: 'Missing name or category query param' };
        return this.pokemonService.findRandomCardByNameAndCategory(name, category);
    }
}