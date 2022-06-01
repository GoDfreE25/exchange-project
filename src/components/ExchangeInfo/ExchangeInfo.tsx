import React from 'react';
import { Currency } from '../../type/Currency';

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const ExchangeInfo: React.FC<Props> = ({ currency, getRate }) => {
  
  return (
    <>
     
    </>
  );
}