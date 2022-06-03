import React, { useState } from 'react';
import { Currency } from '../../type/Currency';
import './CurrencyCalculator.scss';

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
    const [amount = '', baseValue = '', inn = '', currentValue = ''] = input.split(' ');

    const preperedAmount = Number(amount);
    const preperedBase = baseValue.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();
    const preperedCurrent = currentValue.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();
    const preparedInn = inn.split('').filter(s => s.toUpperCase() !== s.toLowerCase()).join('').toUpperCase();

    const ValueValid = !isNaN(preperedAmount);
    const baseValid = preperedBase.length === 3;
    const currentValid = preperedCurrent.length === 3;
    const isValidIn = preparedInn === 'IN'
    const preperedInput = `${preperedAmount} ${preperedBase} in ${preperedCurrent}`;

    let result;
    try {
      const exchangeResult = getRate(preperedBase, preperedCurrent, currency) * preperedAmount;
      result = {
        isValid: baseValid && currentValid && ValueValid && isValidIn,
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

  if (!mainCurrency) {
    userInput.isValid = true;
  }

  return (
<>
  <div className="component">
    <div className="calculator">
      <h2 className='calculator__title'>
       In this input you can enter the text as “15 usd in uah” and get the result
      </h2>
      <input
          type="text"
          value={mainCurrency}
          onChange={handleChange}
          id="search-query"
          className="calculator__input"
          placeholder="Type the text"
      />
      <span className='calculator__exchange'>
        {isFinite(userInput.exchangeResult) ? `Result is: ${userInput.exchangeResult}` :''}
      </span>
      <span className='calculator'>
        {isFinite(userInput.exchangeResult) ? `You must imput like this: ${userInput.preperedInput}` :''}
      </span>
      {!userInput.isValid && 
        <span className='calculator__error'>
      {userInput.isValid ? '' : 'Write correct text'}
        </span>
      } 
    </div>
  </div>
</>
  );
}