import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PhotosService } from './photos.service';
import { Photo } from './photo.schema';
import { CreatePhotoInput } from './photo.input';

@Resolver(() => Photo)
export class PhotoResolver {
    constructor(private photosService: PhotosService) { }

    @Mutation(() => Photo)
    async createPhoto(@Args('input') input: CreatePhotoInput) {
        return this.photosService.create(input);
    }

    @Query(returns => [Photo])
    async photos() {
        return this.photosService.findAll();
    }

    @Query(() => Photo)
    async photo(@Args('_id', { type: () => Number! }) id: number) {
        return this.photosService.findOneById(id);
    }

    @Query(() => [Photo])
    async photosByPetId(@Args('_petId', { type: () => Number! }) pet_id: number) {
        return this.photosService.findByPetId(pet_id);
    }

}