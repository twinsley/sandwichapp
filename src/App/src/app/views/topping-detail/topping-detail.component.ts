import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Topping} from 'src/app/model/topping';

import {Cart} from 'src/app/model/cart';
import {CartApiResponse} from 'src/app/model/cart-api-response';

import {PurchaseDataService} from "../../services/purchase-data.service";
import {Menuitem} from "../../model/menuItem";

import {ToppingDto} from "../../model/dto/topping-dto";

@Component({
  selector: 'app-topping-detail',
  templateUrl: './topping-detail.component.html',
  styleUrls: ['./topping-detail.component.css']
})
export class ToppingDetailComponent implements OnInit {

  menuItemUrl: string = '/api/menuItems';
  toppingsUrl = "/api/toppings/";
  cartItemsUrl: string = '/api/cartItems';
  cartsUrl = "/api/carts";
  cartUrl: string = '';
  cartId: number = 0;

  topping: Topping = new Topping("", 0, "", new Date(), new Date(), {self: {href: ""}}, 0);

  menuItem: Menuitem = new Menuitem("",
    "",
    0,
    "",
    new Date(),
    new Date(),
    {self: {href: ""}},
    [],
    0);

  // capture values for menuItem
  menuItemId: number = 0;

  toppingId: number = 0;

  purchaseServiceDto: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private purchaseDataService: PurchaseDataService
  ) {
  }

  ngOnInit(): void {
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) => {
      // console.log('Topping Detail Current Data Service:', serviceData);
      this.purchaseServiceDto = serviceData;
    })

    this.menuItemId = +this.route.snapshot.paramMap.get('menuItemId')!;
    this.toppingId = +this.route.snapshot.paramMap.get('toppingId')!;
    this.getTopping(this.menuItemId, this.toppingId).subscribe(topping => this.topping = topping);

    this.getMenuItem(this.menuItemId).subscribe(menuItem => this.menuItem = menuItem);

  }

  getCarts(): Observable<Cart[]> {
    return this.http.get<CartApiResponse>(this.cartsUrl)
      .pipe(
        map(response => response._embedded.carts)
      );
  }

  getTopping(menuItemId: number, toppingId: number): Observable<Topping> {
    return this.http.get<Topping>(`${this.menuItemUrl}/${menuItemId}/toppings/${toppingId}`);
  }

  getMenuItem(menuItemId: number): Observable<Menuitem> {
    return this.http.get<Menuitem>(`${this.menuItemUrl}/${menuItemId}`);
  }

  addToCart(toppingId: number, menuItemId: number) {
    // console.log("++++++++++++++++++++ ADD TO CART ++++++++++++++++++++")
    // add topping to data service
    this.addToppingToDataService();

    this.router.navigate(['/menuItem', this.menuItemId, 'toppings']);


  }

  addToppingToDataService() {
    let newTopping: ToppingDto = new ToppingDto(0, "", 0, "");
    newTopping.setId(this.topping.id);
    newTopping.setToppingTitle(this.topping.topping_title);
    newTopping.setToppingPrice(this.topping.topping_price);
    newTopping.setImageUrl(this.topping.image_URL);

    this.purchaseServiceDto.getCurrentCartItem().addTopping(newTopping);

  }
}
