export class Customer {

  constructor(
    public id: number,
    public address: string,
    public postal_code: string,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public state_id: number,
    public _links?: {
      self?: {
        href : string
      },
      customer?: {
        href : string
      },
      state_id?: {
        href : string
      },
      carts?: {
        href : string
      }
    }
  ) {
  }
}
