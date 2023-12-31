import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PurchaseDto} from "../model/dto/purchase-dto";
import {CustomerDto} from "../model/dto/customer-dto";
import {CartDto} from "../model/dto/cart-dto.model";
import {StatusType} from "../model/StatusType";
import {MenuItemDto} from "../model/dto/menuItem-dto";
import {CartItemDto} from "../model/dto/cart-item-dto";
import {ToppingDto} from "../model/dto/topping-dto";

/**
 * Purchase Data Service
 * Collects data during the application flow and delivers it for use in checkout
 *
 *
 */
@Injectable({
  providedIn: 'root'
})
export class PurchaseDataService {

  status: StatusType = StatusType.pending;
  tempCustomer: CustomerDto = new CustomerDto(0, "", "", "", "", "");
  tempMenuItem: MenuItemDto = new MenuItemDto(0, "", "", 0, "");
  tempCart: CartDto = new CartDto(0, 0, 1, this.status, this.tempCustomer);
  tempToppingList: ToppingDto[] = [];
  tempCartItemList: CartItemDto[] = [];
  purchaseDataDto: PurchaseDto = new PurchaseDto(this.tempCustomer, this.tempCart, this.tempCartItemList);


  constructor() {
  }

  // private data
  private data: BehaviorSubject<PurchaseDto> = new BehaviorSubject<PurchaseDto>(this.purchaseDataDto);

  // public observable
  purchaseServiceData: Observable<PurchaseDto> = this.data.asObservable();

  // setter
  public setData(dataIn: PurchaseDto) {
    this.data.next(dataIn)
  }

  // getter
  public getData() {
    return this.purchaseServiceData;
  }

}
