import React, { useState } from 'react';
import { Currency } from '../../type/Currency';
import './CurrencyCalculator.scss';

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const CurrencyCalculator: React.FC<Props> = ({ currency, getRate }) => {
  const [mainCurrency, setMainCurrency] = useState('');
  const [errorQuery, setErrorQuery] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainCurrency(event.target.value);
    setErrorQuery(!errorQuery)
  };

  const parseInput = (input: string) => {
    const [amount = '', baseValue = '', _, currentValue = ''] = input.split(' ');

    const preperedAmount = Number(amount);
    const preperedBase = baseValue.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();
    const preperedCurrent = currentValue.split('').filter(str => str.toLocaleUpperCase() !== str.toLocaleLowerCase()).join('').toLocaleUpperCase();

    const preperedInput = `${preperedAmount} ${preperedBase} in ${preperedCurrent}`;

    let result;
    try {
      const exchangeResult = getRate(preperedBase, preperedCurrent, currency) * preperedAmount;
      result = {
        preperedInput,
        exchangeResult,
      }
    } catch {
      return {
        preperedInput,
        exchangeResult: 0,
      }
    }

    return result;
  }
  const userInput = parseInput(mainCurrency);

  return (
    <>
    <div className="component">
     <div className="calculator">
       <h2 className='calculator__title'>
       In this input you can enter the text as “15 usd in uah” and get the result
       </h2>
      {errorQuery && 
        <span className='calculator__error'>{isFinite(userInput.exchangeResult) ? '' : 'Write correct text'}</span>
      }
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
     </div>
  </div>
    </>
  );
}