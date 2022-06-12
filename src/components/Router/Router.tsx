import { Route, Routes } from "react-router-dom";
import { CurrencyCalculator } from "../../Pages/CurrencyCalculator/CurrencyCalculator";
import { ExchangeInfo } from "../../Pages/ExchangeInfo/ExchangeInfo";
import { Navigation } from "../Navigation/Navigation";
import { getRate } from "../GetRate/GetRate";
import { RouterProps } from "./RouterProps";

export const Router: React.FC<RouterProps> = ({ currency }) => (
  <>
    <Navigation />
      <Routes>
        <Route path="/Rate" element={<ExchangeInfo
        currency={currency}
        getRate={getRate}
      />}/>
        <Route path="/Calculator" element={<CurrencyCalculator 
        currency={currency}
        getRate={getRate}
      />}/>
      </Routes>
  </>
  );