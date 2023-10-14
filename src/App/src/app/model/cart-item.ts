export class CartItem {

  constructor(
    public _links: {
      self: {
        href: string
      },
      menuItem: {
        href: string
      },
      cart: {
        href: string
      },
      toppings: {
        href: string
      }
    }
  ) {
  }
}
