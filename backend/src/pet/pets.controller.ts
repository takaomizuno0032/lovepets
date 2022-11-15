import { Controller, Get } from '@nestjs/common';
import { Pet } from './pet.schema';
import { PetsService } from 'src/pet/pets.service';

@Controller('/api/vi/cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}