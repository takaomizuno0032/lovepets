import * as mongoose from 'mongoose';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Schema, Prop } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Photo extends Document {
    @Field(() => ID)
    _id: number;

    @Prop()
    @Field()
    img: string;


    @Prop()
    @Field()
    title: string;

    @Prop({ type: Int })
    @Field()
    rows: number;

    @Prop({ type: Int })
    @Field()
    cols: number;


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' })
    @Field(() => ID)
    pet_id: number;
}

export const PhotoSchema = new mongoose.Schema({
    _id: Number,
    img: {
        data: Buffer,
        contentType: String
    },
    title: String,
    rows: Number,
    cols: Number,
    pet_id: Number
});



