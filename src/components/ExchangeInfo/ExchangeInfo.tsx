import React, { useState } from 'react';
import { Currency } from '../../type/Currency';
import './ExchangeInfo.scss'

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const ExchangeInfo: React.FC<Props> = ({ currency, getRate }) => {
  const [selectMainCurrency, setSelectMainCurrency] = useState('USD');

  const changeHendlerMainCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMainCurrency(event.target.value);
  };
  return (
    <>
    <div className="exchange">
      <div className="exchange__title">
        <span className='exchange__title-main'>{`For 1 ${selectMainCurrency} You can get:`}</span>
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
            {`1 ${selectMainCurrency} to ${current.cc} ${getRate(selectMainCurrency, current.cc, currency)} `}
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
}