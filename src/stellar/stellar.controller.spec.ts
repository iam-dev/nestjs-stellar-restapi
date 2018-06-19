import { Test, TestingModule } from '@nestjs/testing';
import { StellarController } from './stellar.controller';

describe('Stellar Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StellarController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: StellarController = module.get<StellarController>(StellarController);
    expect(controller).toBeDefined();
  });
});
