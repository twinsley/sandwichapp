import { Menuitem } from './menuItem';

export class MenuItemApiResponse {

  constructor(
      public _embedded: { menuItems: Menuitem[] },
      public _links: Object[],
      public page: Object
  ) {
  }
}
