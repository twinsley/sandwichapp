import { Topping } from "./topping";

export class CartItemToppingsApiResponse {

  constructor(
    public _embedded: {
      toppings: Topping[]
    }
  ) {
  }
}
