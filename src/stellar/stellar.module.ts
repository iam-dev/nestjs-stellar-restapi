import { Module } from '@nestjs/common';
import { StellarService } from './stellar.service';
import { StellarController } from './stellar.controller';
import { Stellar } from './models/stellar.model';

@Module({
  controllers: [StellarController],
  providers: [StellarService, Stellar]
})
export class StellarModule {}
