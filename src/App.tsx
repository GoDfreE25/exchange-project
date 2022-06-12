import React, { useEffect, useState } from 'react';
import { getExchangeCourse } from './api/api';
import './App.scss';
import { Currency } from './components/type/Currency';
import { Router } from './components/Router/Router';


export const App: React.FC = () => {
  const [currency, setCurrency] = useState<Currency[]>([]);

  useEffect(() => {
    getExchangeCourse()
      .then((data: any) => setCurrency(data))
  }, []);

  const currencyWithUah = [...currency, {
    cc: "UAH",
    exchangedate: "01.06.2022",
    r030: 0,
    rate: 1,
    txt: "Гривня",
  }];

  return (
    <div className="App">
      <Router currency={currencyWithUah}/>
    </div>
  );
}
