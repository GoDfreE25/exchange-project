import React, { useState } from 'react';
import './ExchangeInfo.scss';
import { ExchangeProps } from './ExchangeProps';

export const ExchangeInfo: React.FC<ExchangeProps> = ({ currency, getRate }) => {
  const [selectMainCurrency, setSelectMainCurrency] = useState('USD');

  const changeHendlerMainCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMainCurrency(event.target.value);
  };
  return (
    <>
    <div className="exchange">
      <div className="exchange__title">
        <span className='exchange__title-main'>Select your currency:</span>
        <select className="exchange__title-select" onChange={(changeHendlerMainCourse)}>
            <option defaultValue="USD">USD</option>
            {currency.map(current => (
            <option key={current.r030} value={current.cc}>{current.cc}</option>
          ))}
        </select>
      </div>
      <ul className='exchange__list'> 
        {currency.map(current => (
          <li className='exchange__item' key={current.r030}>
            {`1 ${selectMainCurrency} to ${current.cc} = ${getRate(selectMainCurrency, current.cc, currency)} `}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}