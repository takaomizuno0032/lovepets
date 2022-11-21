import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet } from "../src/pet/pet.schema";
import { Seeder, DataFactory } from "nestjs-seeder";


@Injectable()
export class PetsSeeder implements Seeder {
    constructor(@InjectModel(Pet.name) private readonly pet: Model<Pet>) { }

    async seed(): Promise<any> {
        // Generate 10 Pets.
        const pets = DataFactory.createForClass(Pet).generate(10);

        // Insert into the database.
        return this.pet.insertMany(pets);
    }

    async drop(): Promise<any> {
        return this.pet.deleteMany({});
    }
}