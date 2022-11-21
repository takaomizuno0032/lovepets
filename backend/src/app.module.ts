import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Pet, PetSchema } from './pet/pet.schema';
import { PetResolver } from './pet/pet.resolver';
import { PetsService } from './pet/pets.service';
import { join } from 'path';
import { PhotoResolver } from './photo/photo.resolver';
import { PhotosService } from './photo/photos.service';
import { Photo, PhotoSchema } from './photo/photo.schema';


require('dotenv').config();

@Module({
  // should use .env file
  imports: [
    MongooseModule.forRoot(process.env.PASS_DB),
    MongooseModule.forFeature([
      { name: Pet.name, schema: PetSchema },
      { name: Photo.name, schema: PhotoSchema }
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PetsService, PetResolver, PhotoResolver, PhotosService],
})
export class AppModule { }



