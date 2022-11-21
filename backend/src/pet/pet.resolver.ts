import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.schema';
import { CreatePetInput } from './pet.input';

@Resolver(() => Pet)
export class PetResolver {
    constructor(private petService: PetsService) { }

    @Mutation(() => Pet)
    async createPet(@Args('input') input: CreatePetInput) {
        return this.petService.create(input);
    }

    @Query(returns => [Pet])
    async pets() {
        return this.petService.findAll();
    }

    @Query(() => Pet)
    async pet(@Args('_id', { type: () => Number! }) id: number) {
        return this.petService.findOneById(id);
    }

}