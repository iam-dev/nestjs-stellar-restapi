import { Injectable } from '@nestjs/common';
import { Stellar } from './models/stellar.model';
import { ITransaction } from './interfaces/transaction.interface';

@Injectable()
export class StellarService {
  constructor(private stellar: Stellar = new Stellar()) {}
  
  generateAccount() : Stellar {
    return this.stellar.generateAccount();
  }

  async createAccount(publicKey: string): Promise<ITransaction> {
    return await this.stellar.createAccount(publicKey);
  }
}
