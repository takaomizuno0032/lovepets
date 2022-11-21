// src/user/user.input.ts
import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
    @Field(() => ID)
    _id: number;

    @Field()
    name: string;

    @Field()
    animalType: string;

    @Field()
    type: string;

    @Field()
    gender: string;

    @Field()
    description: string;

    @Field()
    img: string;

    @Field()
    area: string;

    @Field()
    age: number;

}