import { Test, TestingModule } from '@nestjs/testing';
import { PhotoResolver } from './photo.resolver';

describe('PhotoResolver', () => {
  let resolver: PhotoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoResolver],
    }).compile();

    resolver = module.get<PhotoResolver>(PhotoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
