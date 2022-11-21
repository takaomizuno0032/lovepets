import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Photo } from './photo.schema';
import { CreatePhotoDto } from './create-photo.dto';
import { Model } from 'mongoose';

@Injectable()
export class PhotosService {
    constructor(@InjectModel(Photo.name) private photoModel: Model<Photo>) { }

    async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
        const createdPhoto = new this.photoModel(createPhotoDto);
        return createdPhoto.save();
    }

    async findAll(): Promise<Photo[]> {
        return this.photoModel.find().exec();
    }

    async findOneById(_id: Number): Promise<Photo> {
        return this.photoModel.findOne({ _id: _id }).exec();
    }

    async findByPetId(_petId: Number): Promise<Photo[]> {
        return this.photoModel.find({ pet_id: _petId }).exec();
    }
}