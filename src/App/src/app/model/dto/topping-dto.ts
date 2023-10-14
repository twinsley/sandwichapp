export class ToppingDto {

  /**
   * Topping Dto
   * Data Transfer Object for topping
   * used for rest api message sent to back end
   *
   *
   */
  constructor(
    private id: number,
    private topping_title: string,
    private topping_price: number,
    private image_URL: string
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

  // set topping title
  public setToppingTitle(titleIn: string) {
    this.topping_title = titleIn;
  }

  // get topping title
  public getToppingTitle() {
    return this.topping_title;
  }

  // set topping price
  public setToppingPrice(priceIn: number) {
    this.topping_price = priceIn;
  }

  // get topping price
  public getToppingPrice() {
    return this.topping_price;
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
