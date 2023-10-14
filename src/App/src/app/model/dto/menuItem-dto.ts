export class MenuItemDto {

  /**
   * Menuitem Dto
   * Data Transfer Object for menuItem
   * used for rest api message sent to back end
   *
   *
   */
  constructor(
    private id: number,
    private menuItem_title: string,
    private description: string,
    private price: number,
    private image_URL: string,
  ) {
  }

  // set id
  public setId(idIn: number) {
    this.id = idIn;
  }

  // get id
  public getId() {
    return this.id;
  }

  // set menuItem title
  public setMenuItemTitle(titleIn: string) {
    this.menuItem_title = titleIn;
  }

  // get menuItem title
  public getMenuItemTitle() {
    return this.menuItem_title;
  }

  // set  description
  public setDescription(descriptionIn: string) {
    this.description = descriptionIn;
  }

  // get menuItem title
  public getDescription() {
    return this.description;
  }

  // set travel price
  public setTravelPrice(priceIn: number) {
    this.price = priceIn;
  }

  // get travel price
  public getTravelPrice() {
    return this.price;
  }

  // set url
  public setImageUrl(urlIn: string) {
    this.image_URL = urlIn;
  }

  // get url
  public getImageUrl() {
    return this.image_URL;
  }

}
