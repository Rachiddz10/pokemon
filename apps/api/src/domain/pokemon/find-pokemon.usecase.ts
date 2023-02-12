import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class FindPokemonsUsecase {
    private pokemonRepository: IPokemonRepository;
  
    constructor(pokemonRepository: IPokemonRepository) {
        this.pokemonRepository = pokemonRepository;
      }
    
      async execute(name: string): Promise<Pokemon[]> {
        // find all pokemons in db
        const pokemons = await this.pokemonRepository.findAll();
        // filter pokemons by name
        const filteredPokemons = pokemons.filter(p => p.name === name);
        return filteredPokemons;
      }
  }