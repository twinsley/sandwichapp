import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Cart} from 'src/app/model/cart';
import {CartApiResponse} from 'src/app/model/cart-api-response';
import {CartCartItemsApiResponse} from 'src/app/model/cart-cart-items-api-response';
import {CartItem} from 'src/app/model/cart-item';
import {CartItemToppingsApiResponse} from 'src/app/model/cart-item-toppings-api-response';
import {Customer} from 'src/app/model/customer';
import {Menuitem} from 'src/app/model/menuItem';
import {PurchaseDataService} from "../../services/purchase-data.service";
import {CustomerDto} from "../../model/dto/customer-dto";
import {CartItemDto} from "../../model/dto/cart-item-dto";

/**
 * Cart Summary
 * manages values for cart summary display
 *
 *
 */
@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItemsUrl = "";
  checkoutUrl = "http://localhost:8080/api/checkout/purchase";
  customerUrl = "http://localhost:8080/api/customers";
  cartsUrl = "http://localhost:8080/api/carts"
  cartId = 0;

  cartItems: CartItem[] = [];
  menuItems: Set<Menuitem> = new Set();
  customer: Customer = new Customer(0, "", "", "", "", "", 0)
  package_price: number = 0;
  party_size: number = 1;

  purchaseServiceDto: any;

  cartItemList: CartItemDto [] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private purchaseDataService: PurchaseDataService) {
  }

  ngOnInit(): void {

    // get data service
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) => {
      // // console.log('Topping Detail Current Data Service:', serviceData);
      this.purchaseServiceDto = serviceData;
    })

    // get customer details
    this.populateCustomerFromService();

    // get the package price
    this.package_price = this.purchaseServiceDto.getCart().getPackagePrice();

    // build list of menuItems with toppings for each to populate html
    this.cartItemList = this.purchaseServiceDto.getCartItems();


  }

  // get values from data service for page
  populateCustomerFromService() {
    this.customer.id = this.purchaseServiceDto.getCustomer().getId();
    this.customer.address = this.purchaseServiceDto.getCustomer().getId();
    this.customer.postal_code = this.purchaseServiceDto.getCustomer().getPostalCode();
    this.customer.firstName = this.purchaseServiceDto.getCustomer().getFirstName();
    this.customer.lastName = this.purchaseServiceDto.getCustomer().getLastName();
    this.customer.phone = this.purchaseServiceDto.getCustomer().getPhone();
  }

}
