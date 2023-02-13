import {afterEach, describe, expect, test, vi} from 'vitest'
import {UpdateTrainerUsecase} from "../src/domain/trainer/update-trainer.usecase";
import {Trainer} from '../src/domain/entities';

describe('Update Trainer Usecase - test', () => {
    const trainerRepositoryMock = {
        create: vi.fn(),
        findAll: vi.fn(),
        update : vi.fn()
    }

    const updateTrainerUsecase = new UpdateTrainerUsecase(trainerRepositoryMock);

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('should update ', async () => {
        // GIVEN
        const expectedTrainer: Trainer = {
            id: 1,
            name: 'Toto',
            gender: 'f',
        }
        const command = {
            name: 'Tata',
            gender: 'm',
        }
        trainerRepositoryMock.update.mockImplementation(() => command)

        // WHEN
        const trainer = await updateTrainerUsecase.execute( expectedTrainer.id , command  )

        // THEN
        expect(trainerRepositoryMock.update).toHaveBeenCalledOnce()
        expect(trainerRepositoryMock.update).toBeCalledWith(expectedTrainer.id, {
            name: command.name,
            gender: command.gender
        })
        expect(command).toStrictEqual(trainer);
    })
})