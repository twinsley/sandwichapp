import {MenuItemDto} from "./menuItem-dto";
import {ToppingDto} from "./topping-dto";

/**
 * Cart Item Dto
 * Data Transfer Object for cart item
 * used for rest api message sent to back end
 *
 *
 */
export class CartItemDto {

  constructor(
    private menuItem: MenuItemDto,
    private toppings: ToppingDto []
  ) {
  }

  // set menuItem
  public setMenuItem(menuItemIn: MenuItemDto) {
    this.menuItem = menuItemIn;
  }

  // get menuItem
  public getMenuItem() {
    return this.menuItem;
  }

  // add topping
  public addTopping(toppingIn: ToppingDto) {
    // // console.log("Pushing Topping");
    // // console.log(toppingIn.getToppingTitle());
    this.toppings.push(toppingIn);
  }

  // get toppings
  public getToppings() {
    return this.toppings;
  }

}
