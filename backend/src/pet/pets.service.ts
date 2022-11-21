import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './pet.schema';
import { CreatePetDto } from './create-pet.dto';
import { Model, FilterQuery } from 'mongoose';
import CreateQuery from 'mongoose';


@Injectable()
export class PetsService {
    constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) { }

    async create(createPetDto: CreatePetDto): Promise<Pet> {
        const createdPet = new this.petModel(createPetDto);
        return createdPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return this.petModel.find().exec();
    }

    async findOneById(id: number): Promise<Pet> {
        return this.petModel.findOne({ _id: `${id}` }).exec();
    }
}