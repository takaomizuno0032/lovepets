import { Seeder } from 'mongoose-data-seed';
import { PetsService } from '../src/pet/pets.service';

const data = [{

}];

class PetsSeeder extends Seeder {

  async shouldRun() {
    return Model.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Model.create(data);
  }
}

export default PetsSeeder;
