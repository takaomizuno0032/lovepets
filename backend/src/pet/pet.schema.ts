import * as mongoose from 'mongoose';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Pet extends Document {
    @Field(() => ID)
    _id: number;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    animalType: string;

    @Prop()
    @Field()
    type: string;

    @Prop()
    @Field()
    gender: string;

    @Prop()
    @Field()
    description: string;

    @Prop()
    @Field()
    img: string;

    @Prop()
    @Field()
    area: string;

    @Prop()
    @Field()
    age: number;
}

export const PetSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    animalType: String,
    type: String,
    gender: String,
    description: String,
    img: String,
    area: String,
    age: Number,
});