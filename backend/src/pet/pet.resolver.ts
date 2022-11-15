import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.schema';
import { CreatePetInput } from './pet.input';

@Resolver(() => Pet)
export class PetResolver {
    constructor(private petService: PetsService) { }

    @Mutation(() => Pet)
    async createUser(@Args('input') input: CreatePetInput) {
        return this.petService.create(input);
    }

    @Query(returns => [Pet])
    async find() {
        return this.petService.findAll();
    }
}