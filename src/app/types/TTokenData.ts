import { TBlockchain } from './TBlockchain';

export type TTokenData = {
  company: string;
  tokenName: string;
  symbol: string;
  tokenSupply: number | null;
  blockchain: TBlockchain;
  enabled: boolean;
  id: number;
};
