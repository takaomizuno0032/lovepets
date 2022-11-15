import * as mongoose from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Pet extends Document {
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

export const PetSchema = new mongoose.Schema({
    name: String,
    animalType: String,
    type: String,
    gender: String,
    description: String,
    img: String,
    area: String,
    age: Number,
});