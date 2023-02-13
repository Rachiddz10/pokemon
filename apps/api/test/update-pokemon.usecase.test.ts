import {afterEach, describe, expect, test, vi} from 'vitest'
import {UpdatePokemonUsecase} from "../src/domain/pokemon/update-pokemon.usecase";
import {Trainer} from '../src/domain/entities';
import { Pokemon } from '@prisma/client';

describe('Update pokemon Usecase - test', () => {
 const pokemonRepositoryMock = {
        create: vi.fn(),
        findAll: vi.fn(),
        update : vi.fn()
    }

 const updatePokemonUsecase = new UpdatePokemonUsecase(pokemonRepositoryMock);

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('should update ', async () => {
        // GIVEN
     const expectedPokemon: Pokemon = {
        id: 1,
        name :"Pikapika",
        hp : 40,
        atk :15,
        def :50,
        atkspe :45,
        defspe : 50,
        speed : 30,
        type : "Electricity",
        image : " ",
        trainerId: 1
        }
     const command = {
         name :"Pikapoca",
         hp : 4,
         atk :1,
         def :5,
         atkspe :4,
         defspe : 0,
         speed : 10,
         type : "Electricity",
         image : " ",
        }
        pokemonRepositoryMock.update.mockImplementation(() => command)

        // WHEN
     const pokemon = await updatePokemonUsecase. execute( expectedPokemon.id , command  )

        // THEN
        expect(pokemonRepositoryMock.update).toHaveBeenCalledOnce()
        expect(pokemonRepositoryMock.update).toBeCalledWith(expectedPokemon.id, {
            name: command.name,
            hp : command.hp,
            atk :command.atk,
            def :command.def,
            atkspe :command.atkspe,
            defspe : command.defspe,
            speed : command.speed,
            type : command.type,
            image : command.image,
          
        })
        expect(command).toStrictEqual(pokemon);
    })
})