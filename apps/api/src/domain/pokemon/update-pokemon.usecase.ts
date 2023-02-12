import {Pokemon} from "../entities";
import { IPokemonRepository } from "../interfaces";

export class UpdatePokemonUsecase {
private pokemonRepository: IPokemonRepository;

constructor(pokemonRepository: IPokemonRepository) {
this.pokemonRepository = pokemonRepository;
}

async execute(id: number, command: { name: string,
hp: number,
atk: number,
def: number,
atkspe: number,
defspe: number,
speed: number,
type: string,
image : string  }): Promise<Pokemon> {
// update an existing trainer in db
const updatedTrainer = await this.pokemonRepository.update(id, {
name: command.name,
hp: command.hp,
atk: command.atk,
def: command.def,
atkspe: command.atkspe,
defspe: command.defspe,
speed: command.speed,
type: command.type,
image : command.image 
,
});
return updatedTrainer;
}
}
