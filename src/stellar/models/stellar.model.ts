import { Injectable } from '@nestjs/common';
import * as StellarSdk from 'stellar-sdk';
import { IStellar } from '../interfaces/stellar.interface'
import { IKeypair } from '../interfaces/keypair.interface';
import { ITransaction } from '../interfaces/transaction.interface';
import { config } from '../../../config/config';

@Injectable()
export class Stellar implements IStellar {
  type: string;
  publicKey: string;
  secretKey: string;
  private server;

  constructor() {
    this.server = new StellarSdk.Server(config.stellarServer);  
    StellarSdk.Network.useTestNetwork();
  }

  generateAccount(): any {
    const pair = StellarSdk.Keypair.random()
    return {
      tuype: pair.type,
      publicKey: pair.publicKey(),
      secretKey: pair.secret()
    };
  }

  async createAccount(publicKey: string): Promise<ITransaction> {
    const masterKeypair = StellarSdk.Keypair.fromSecret(config.masterAccount.secretKey);
    let fromAccount = await this.server.loadAccount(masterKeypair.publicKey());
    let transaction = new StellarSdk.TransactionBuilder(fromAccount)
      .addOperation(StellarSdk.Operation.createAccount({
        destination: publicKey,
        startingBalance: '1'
      }))
      .build();
    transaction.sign(masterKeypair);
    let result = await this.server.submitTransaction(transaction);
    return result;
  }
  
}