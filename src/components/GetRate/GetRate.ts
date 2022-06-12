import { Currency } from "../type/Currency";

export const getRate = (baseName: string, currentName: string, currency: Currency[]) => {
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
};
