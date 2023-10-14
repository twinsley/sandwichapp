import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartItem} from 'src/app/model/cart-item';
import {CartCartItemsApiResponse} from 'src/app/model/cart-cart-items-api-response';
import {Topping} from 'src/app/model/topping';
import {Menuitem} from 'src/app/model/menuItem';
import {Cart} from 'src/app/model/cart';
import {CartApiResponse} from 'src/app/model/cart-api-response';
import {Customer} from 'src/app/model/customer';
import {PurchaseDataService} from "../../services/purchase-data.service";
import {CartItemDto} from "../../model/dto/cart-item-dto";
import {ToppingDto} from "../../model/dto/topping-dto";

/**
 * Cart
 * Display cart on pages
 *
 *
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartsUrl = "http://localhost:8080/api/carts";
  cartItemsUrl = "";
  customerUrl = "http://localhost:8080/api/customers/1";

  cartId = 0;
  cartItems: CartItem[] = [];
  menuItems: Set<Menuitem> = new Set();
  package_price: number = 0;
  party_size: number = 1;
  cartItemsPrice: number = 0;
  purchaseServiceDto: any;

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private purchaseDataService: PurchaseDataService) {
  }


  ngOnInit(): void {

    // load data service
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) => {
      console.log('Topping Detail Current Data Service:', serviceData);
      this.purchaseServiceDto = serviceData;
    })


    // call sum with string
    this.sumCartItems(this.party_size.toString());

  }

  /**
   * process party size and price
   * call on init and when party size changes on page
   *
   * @param party_size
   */
  sumCartItems(party_size: string): void {

    this.party_size = parseInt(party_size)
    console.log("PARTY SIZE 2 " + this.party_size);
    this.purchaseServiceDto.getCart().setPartySize(this.party_size);
    // reset price for new calc
    this.cartItemsPrice = 0;

    let cartItemList: CartItemDto [] = this.purchaseServiceDto.getCartItems();
    cartItemList.forEach(currentCartItem => {
      // get menuItem price
      let menuItemPrice: number = currentCartItem.getMenuItem().getTravelPrice();
      // add menuItem cost
      this.cartItemsPrice += menuItemPrice;
      console.log(this.cartItemsPrice);
      // get topping prices
      let toppingList: ToppingDto [] = currentCartItem.getToppings();
      // loop through topping and add price
      toppingList.forEach(currentTopping => {
        let toppingPrice = currentTopping.getToppingPrice();
        this.cartItemsPrice += toppingPrice;
        console.log("Prices when add Toppings " + this.cartItemsPrice);
      })

      // calculate total package price
      this.package_price = this.cartItemsPrice * this.party_size;
      console.log("PACKAGE PRICE IN SUM " + this.package_price);
    })

    // update the data service with new package price and party size
    this.purchaseServiceDto.getCart().setPackagePrice(this.package_price);
    this.purchaseServiceDto.getCart().setPartySize(this.party_size);

  }
}
