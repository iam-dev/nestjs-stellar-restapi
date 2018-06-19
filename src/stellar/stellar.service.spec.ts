import { Test, TestingModule } from '@nestjs/testing';
import { StellarService } from './stellar.service';

describe('StellarService', () => {
  let service: StellarService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StellarService],
    }).compile();
    service = module.get<StellarService>(StellarService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
