import { Topping } from "./topping";

export class Menuitem {

  constructor(
      public menuItem_title: string,
      public description: string,
      public price: number,
      public image_URL: string,
      public create_date: Date,
      public last_update: Date,
      public _links: {
        self: {
          href: string
        }
      },
      public toppings?: Topping[],
      public id?: number
  ) {
  }

  public getTitle(){
    return this.menuItem_title;
  }

}
