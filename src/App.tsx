import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { getExchangeCourse } from './api/api';
import './App.scss';
import { CurrencyCalculator } from './components/CurrencyCalculator/CurrencyCalculator';
import { ExchangeInfo } from './components/ExchangeInfo/ExchangeInfo';
import { Currency } from './type/Currency';


export const App: React.FC = () => {
  const [currency, setCurrency] = useState<Currency[]>([]);

  useEffect(() => {
    getExchangeCourse()
      .then((data: any) => setCurrency(data))
  }, []);

  const getRate = (baseName: string, currentName: string, currency: Currency[]) => {
    const base: Currency | undefined = currency.find(element => element.cc === baseName);
      let baseRes: number = 0;  
      if(base !== undefined) {
          baseRes = base.rate;
      }
    const current: Currency | undefined = currency.find(element => element.cc === currentName);
      let currentRes: number = 0;
      if(current !== undefined) {
        currentRes = current.rate;
      }

    let resultRate = baseRes / currentRes;

    return Math.round(resultRate * 100) / 100;
  }
  
  const currencyWithUah = [...currency, {
    cc: "UAH",
    exchangedate: "01.06.2022",
    r030: 0,
    rate: 1,
    txt: "Гривня",
  }];

  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/Rate" element={<ExchangeInfo
          currency={currencyWithUah}
          getRate={getRate}
        />}/>
          <Route path="/Calculator" element={<CurrencyCalculator 
          currency={currencyWithUah}
          getRate={getRate}
        />}/>
        </Routes>
    </div>
  );
}
