import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from 'src/app/model/cart-item';
import {Customer} from 'src/app/model/customer';
import {PurchaseApiResponse} from 'src/app/model/purchase-api-response';
import {Menuitem} from 'src/app/model/menuItem';
import {PurchaseDataService} from "../../services/purchase-data.service";
import {CustomerDto} from "../../model/dto/customer-dto";
import {CartDto} from "../../model/dto/cart-dto.model";
import {PurchaseDto} from "../../model/dto/purchase-dto";
import {StatusType} from "../../model/StatusType";
import {MenuItemDto} from "../../model/dto/menuItem-dto";
import {ToppingDto} from "../../model/dto/topping-dto";
import {CartItemDto} from "../../model/dto/cart-item-dto";


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  cartItemsUrl = "";
  checkoutUrl = "/api/checkout/purchase";
  customerUrl = "/api/customers/1";
  cartsUrl = "/api/carts";
  cartId = 0;

  cartItems: CartItem[] = [];
  menuItems: Set<Menuitem> = new Set();
  customer: Customer = new Customer(0, "", "", "", "", "", 0)

  orderTrackingNumber: string = ""

  purchaseServiceDto: any;

  customerDto: CustomerDto = new CustomerDto(0, "", "", "", "", "");

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private purchaseDataService: PurchaseDataService
  ) {
  }

  ngOnInit(): void {
    // new purchase data service dto
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) => {
      // console.log('Topping Detail Current Data Service:', serviceData);
      this.purchaseServiceDto = serviceData;
    })

    // get customer dto from data service
    this.customerDto = this.purchaseServiceDto.getCustomer();

    this.checkout();

  }

  ngOnDestroy() {
    // reset the data service
    let status: StatusType = StatusType.pending;
    let tempCustomer: CustomerDto = new CustomerDto(0, "", "", "", "", "");
    let tempMenuItem: MenuItemDto = new MenuItemDto(0, "", "", 0, "");
    let tempCart: CartDto = new CartDto(0, 0, 1, status, tempCustomer);
    let tempToppingList: ToppingDto[] = [];
    let tempCartItem: CartItemDto = new CartItemDto(tempMenuItem, tempToppingList);
    let tempCartItemList: CartItemDto[] = [];
    let purchaseDataDto: PurchaseDto = new PurchaseDto(tempCustomer, tempCart, tempCartItemList);

    this.purchaseDataService.setData(purchaseDataDto);
  }

  checkout() {

    // convert data service object to plain old object for api call
    let purchasePlain = Object.assign({}, this.purchaseServiceDto);

    // send request to back end
    this.http.post<PurchaseApiResponse>(this.checkoutUrl, purchasePlain).subscribe(response => {
      this.orderTrackingNumber = response.orderTrackingNumber;
    });

  }
}
