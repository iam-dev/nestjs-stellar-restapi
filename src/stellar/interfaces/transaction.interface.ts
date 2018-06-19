import { IKeypair } from '../interfaces/keypair.interface';

export interface ITransaction {
  readonly hash: string;
  readonly ledger: number;
  readonly envelope_xdr: string;
  readonly result_xdr: string;
  readonly result_meta_xdr: string;
  readonly sign: IKeypair;
}