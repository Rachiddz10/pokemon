import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class FilterPokemonsUsecase {
    private pokemonRepository: IPokemonRepository;

    constructor(pokemonRepository: IPokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    async execute(name?: string, hp?: number, atk?: number, def?: number, atkspe?: number, defspe?: number, speed?: number, type?: string): Promise<Pokemon[]> {
        // find all pokemons in db
        /* let pokemons = await this.pokemonRepository.findAll();*/

        let filteredPokemons: Pokemon[] = [];


        // filter pokemons by name
        if (name) {

            filteredPokemons = await this.pokemonRepository.findByName(name);

        }
        // filter pokemons by type
        if (type) {
            if (name) {
                filteredPokemons = filteredPokemons.filter(p => p.type.toLowerCase() === type.toLowerCase())
            }
            else {
                filteredPokemons = await this.pokemonRepository.findByType(type);
            }

        }

        // filter pokemons by speed
        if (speed) {
            if (name || type) {
                filteredPokemons = filteredPokemons.filter(p => p.speed == speed);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findBySpeed(speed);
            }
        }

        // filter pokemons by speed
        if (def) {
            if (name || type || speed) {
                filteredPokemons = filteredPokemons.filter(p => p.def == def);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findByDefense(def);
            }
        }


        if (hp) {
            if (name || type || speed || def) {
                filteredPokemons = filteredPokemons.filter(p => p.hp == hp);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findByhp(hp);
            }
        }


        if (atk) {
            if (name || type || speed || def || hp) {
                filteredPokemons = filteredPokemons.filter(p => p.atk == atk);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findByatke(atk);
            }
        }


        if (atkspe) {
            if (name || type || speed || def || hp || atk) {
                filteredPokemons = filteredPokemons.filter(p => p.atkspe == atkspe);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findByatkspe(atkspe);
            }
        }

        if (defspe) {
            if (name || type || speed || def || hp || atk || atkspe) {
                filteredPokemons = filteredPokemons.filter(p => p.defspe == defspe);

            }
            else {
                filteredPokemons = await this.pokemonRepository.findBydefspe(defspe);
            }
        }



        if (!def && !speed && !name && !type && !atkspe && !defspe && !atk && !hp) {
            return this.pokemonRepository.findAll();
        }


        return filteredPokemons;
    }
}
