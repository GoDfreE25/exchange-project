import React, { useState } from 'react';
import { Currency } from '../../type/Currency';

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const CurrencyCalculator: React.FC<Props> = ({ currency, getRate }) => {
  const [mainCurrency, setMainCurrency] = useState('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainCurrency(event.target.value);
  };

  const parseInput = (input: string) => {
    const [amount = '', base = '', _, current = ''] = input.split(' ');

    const preperedAmount = Number(amount);
    const preperedBase = base.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();
    const preperedCurrent = current.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();

    const isAmountValid = !isNaN(preperedAmount);
    const baseValid = preperedBase.length === 3;
    const currentValid = preperedCurrent.length === 3;
    const preperedInput = `${preperedAmount} ${preperedBase} in ${preperedCurrent}`;

    let result;
    try {
      const exchangeResult = getRate(preperedBase, preperedCurrent, currency) * preperedAmount;
      result = {
        isValid: baseValid && currentValid && isAmountValid,
        preperedInput,
        exchangeResult,
      }
    } catch {
      return {
        isValid: false,
        preperedInput,
        exchangeResult: 0,
      }
    }

    return result;
  }

  const userInput = parseInput(mainCurrency);

  return (
    <>
    <div className="control">
      <input
        type="text"
        value={mainCurrency}
        onChange={handleChange}
        id="search-query"
        className="input"
        placeholder="Type the Currency Amount"
      />
      <h2>{isFinite(userInput.exchangeResult) ? userInput.exchangeResult : ''}</h2>
      <h3>{userInput.isValid && 'Put wrong state'}</h3>
  </div>
    </>
  );
}