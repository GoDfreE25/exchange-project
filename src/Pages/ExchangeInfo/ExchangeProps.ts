import { Currency } from "../../components/type/Currency";

export type ExchangeProps = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}