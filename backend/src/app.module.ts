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

require('dotenv').config();

@Module({
  // should use .env file
  imports: [
    MongooseModule.forRoot(process.env.PASS_DB),
    MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PetsService, PetResolver],
})
export class AppModule { }



