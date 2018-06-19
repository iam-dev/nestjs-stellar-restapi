import { Controller, Post, Param } from '@nestjs/common';
import { StellarService } from './stellar.service';
import { Stellar } from './models/stellar.model';
import { ITransaction } from './interfaces/transaction.interface';

@Controller('/api/v1/stellar')
export class StellarController {
  constructor(private readonly stellarService: StellarService) {}

  @Post()
  generateAccount(): Stellar {
    return this.stellarService.generateAccount();
  }

  @Post(':publicKey')
  async createAccount(@Param('publicKey') publicKey): Promise<ITransaction> {
    return this.stellarService.createAccount(publicKey);
  }

}
