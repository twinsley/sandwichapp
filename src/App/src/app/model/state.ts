export class State {

  constructor(
    public id: number,
    public state_name: string,
    public country_id: number,
    public _links: {
      country: {
        href: string
      },
      self: {
        href: string
      }
    }
  ) {
  }
}
