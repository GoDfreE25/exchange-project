import React, { useState } from 'react';
import { Currency } from '../../type/Currency';

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const CurrencyCalculator: React.FC<Props> = ({ currency, getRate }) => {
  const [selectMainCurrency, setSelectMainCurrency] = useState('USD');
  const [selectSecondCurrency, setSelectSecondCurrency] = useState('UAH');
  const [numberOFMainCurrency, setNumberOfMainCurrency] = useState(0);
  const [numberOFSecondCurrency, setNumberOfSecondCurrency] = useState(0);

  const changeHendlerMainCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMainCurrency(event.target.value);
  };

  const changeHendlerSecondCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSecondCurrency(event.target.value);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfMainCurrency(Number(event.target.value));
    setNumberOfSecondCurrency(getRate(selectMainCurrency, selectSecondCurrency, currency) * Number(numberOFMainCurrency));
  };

  console.log(getRate(selectMainCurrency, selectSecondCurrency, currency));

  return (
    <>
    <div className="control">
      <input
        type="number"
        value={numberOFMainCurrency}
        onChange={handleChange}
        id="search-query"
        className="input"
        placeholder="Type the Currency Amount"
      />
       <input
        type="number"
        value={numberOFSecondCurrency}
        onChange={handleChange}
        id="search-query"
        className="input"
        placeholder="Type the Currency Amount"
      />
      <select className="App__user-selector" onChange={(changeHendlerMainCourse)}>
        <option defaultValue="USD">USD</option>
        {currency.map(current => (
        <option key={current.r030} value={current.cc}>{current.cc}</option>
      ))}
      </select>
      <select className="App__user-selector" onChange={(changeHendlerSecondCourse)}>
        <option defaultValue="UAH">UAH</option>
        {currency.map(current => (
        <option key={current.r030} value={current.cc}>{current.cc}</option>
      ))}
      </select>
  </div>
     
    </>
  );
}