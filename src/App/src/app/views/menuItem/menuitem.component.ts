import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MenuItemApiResponse} from '../../model/menuItem-api-reponse';
import {Menuitem} from '../../model/menuItem';
import {PurchaseDataService} from "../../services/purchase-data.service";
import {Customer} from "../../model/customer";
import {Cart} from "../../model/cart";
import {CartApiResponse} from "../../model/cart-api-response";
import {CartDto} from "../../model/dto/cart-dto.model";
import {StatusType} from "../../model/StatusType";
import {CustomerDto} from "../../model/dto/customer-dto";
import {CustomerApiResponse} from "../../model/customer-api-response";


/**
 *
 */
@Component({
  selector: 'app-menuItem',
  templateUrl: './menuItem.component.html',
  styleUrls: ['./menuItem.component.css']
})
export class MenuitemComponent implements OnInit {

  // urls
  menuItemUrl = 'http://localhost:8080/api/menuItems';
  cartsUrl = 'http://localhost:8080/api/carts';
  customerUrl = "http://localhost:8080/api/customers";

  // menuItems for the page
  menuItems: Menuitem[] = [];

  // data service payload
  purchaseServiceDto: any;

  // customer
  customer: Customer = new Customer(0, "", "", "", "", "", 0)

  status: StatusType = StatusType.pending;
  customerDto: CustomerDto = new CustomerDto(0, "", "", "", "", "");
  cartDto: CartDto = new CartDto(0,0, 0, this.status , this.customerDto);

  allCarts: Cart [] = [];
  newCartDto: CartDto = new CartDto(0,0, 0, this.status , this.customerDto);
  customers: Customer[] = [];
  newestCustomerInDB: number = 0;
  lastCartId: number = 0;

  constructor(private http: HttpClient,
              private purchaseDataService: PurchaseDataService) { }

  ngOnInit(): void {
    // purchase data service
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) => {
      // console.log('Topping Detail Current Data Service:', serviceData);
      this.purchaseServiceDto = serviceData;
    })


    // get the ID of the newest customer in the database
    this.getCustomers().subscribe(customers =>
    {
      this.customers = customers
      console.log("CUSTOMER LENGTH " + this.customers.length);
      this.newestCustomerInDB = this.customers[customers.length-1].id;
      console.log("LAST CUSTOMER " + this.newestCustomerInDB.toString());

      this.getCustomer(this.newestCustomerInDB).subscribe(customer => {
        this.customer = customer
        console.log("LAST CUSTOMER IN DB " + this.customer);
      });

    });

    this.getMenuItems().subscribe(menuItems => {
      menuItems.forEach(menuItem => {
        let parsedId = menuItem._links.self.href.split("/")[5];
        menuItem.id = parseInt(parsedId);
      });
      this.menuItems = menuItems;
    });

  }// end on init

  ngOnDestroy(){
    // set customer details
    this.purchaseServiceDto.getCustomer().setId(this.customer.id);
    this.purchaseServiceDto.getCustomer().setFirstName(this.customer.firstName);
    this.purchaseServiceDto.getCustomer().setLastName(this.customer.lastName);
    this.purchaseServiceDto.getCustomer().setAddress(this.customer.address);
    this.purchaseServiceDto.getCustomer().setPostalCode(this.customer.postal_code);
    this.purchaseServiceDto.getCustomer().setPhone(this.customer.phone);

    // set cart status
    this.purchaseServiceDto.getCart().setStatusType(StatusType.pending);

  }

  getCustomer(idIn: number): Observable<Customer> {
    console.log("CUSTOMER ID PASSED TO GET CUSTOMER " + idIn);
    return this.http.get<Customer>(this.customerUrl + "/" + idIn);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<CustomerApiResponse>(this.customerUrl)
      .pipe(
        map(response => response._embedded.customers)
      )
  }


  getMenuItems(): Observable<Menuitem[]> {
    return this.http.get<MenuItemApiResponse>(this.menuItemUrl)
      .pipe(
        map(response => response._embedded.menuItems)
      )
  }

}
