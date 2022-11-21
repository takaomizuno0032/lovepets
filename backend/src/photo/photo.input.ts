import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
    @Field(() => ID)
    _id: number;

    @Field()
    img: string;

    @Field()
    title: string;

    @Field()
    rows: number;

    @Field()
    cols: number;

    @Field(() => ID)
    pet_id: number;

}