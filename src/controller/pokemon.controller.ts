import { Controller, Get, Param, Query } from "@nestjs/common";
import { PokemonService } from "../service/pokemon.service";
import { ApiOperation, ApiParam, ApiQuery } from "@nestjs/swagger";

@Controller("card")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get("/pokemon/random")
  @ApiOperation({
    summary: "Returns a set amount of random Pokémon cards",
    description:
      "Returns a set amount of random Pokémon cards based on the provided name, category and amount.",
  })
  @ApiQuery({
    name: "name",
    required: false,
    type: String,
  })
  @ApiQuery({
    name: "category",
    required: false,
    enum: ["Pokemon", "Trainer", "Energy"],
    default: "Pokemon",
  })
  @ApiQuery({
    name: "amount",
    required: false,
    type: Number,
    default: 10,
  })
  async findRandomCardsByNameAndCategory(
    @Query("name") name?: string,
    @Query("category") category: string = "Pokemon",
    @Query("amount") amount: number = 10
  ) {
    const amountNum = Number(amount);

    if (!category || isNaN(amountNum)) {
      return { error: "Missing category or amount query param" };
    }

    return this.pokemonService.findRandomCardsByNameAndCategory({
      name: name || undefined,
      category: category,
      amount: amountNum || 1,
    });
  }

  @Get("/pokemon/:type")
  @ApiParam({
    name: "type",
    required: true,
    enum: [
      "Colorless",
      "Darkness",
      "Dragon",
      "Fairy",
      "Fighting",
      "Fire",
      "Grass",
      "Lightning",
      "Metal",
      "Psychic",
      "Water",
    ],
  })
  @ApiQuery({
    name: "amount",
    required: false,
    type: Number,
    default: 10,
  })
  async findRandomCardsByType(
    @Param("type") type?: string,
    @Query("amount") amount: number = 10
  ) {
    const amountNum = Number(amount);

    if (!type || isNaN(amountNum)) {
      return { error: "Missing Pokémon type or amount query param" };
    }

    return this.pokemonService.findRandomPokemonCardsByType({
      type,
      amount: amountNum || 1,
    });
  }
}
