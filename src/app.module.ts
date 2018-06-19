import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StellarModule } from './stellar/stellar.module';

@Module({
  imports: [StellarModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
