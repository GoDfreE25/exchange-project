import { Currency } from "../type/Currency";

const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

export const getExchangeCourse = (): Promise<Currency[]> => (
  fetch(BASE_URL)
    .then(response => response.json())
);
