import { Currency } from "../../components/type/Currency";

export type CurrencyProps = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}