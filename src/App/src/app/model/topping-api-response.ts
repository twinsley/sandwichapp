import { Topping } from './topping';

export class ToppingApiResponse {
  constructor(
    public _embedded: { toppings: Topping[] }
  ) {
  }
}
