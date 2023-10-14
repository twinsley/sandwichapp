
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { map, Observable } from 'rxjs';

import { Menuitem } from '../../model/menuItem';
import {PurchaseDataService} from "../../services/purchase-data.service";
import {MenuItemDto} from "../../model/dto/menuItem-dto";
import {CartItemDto} from "../../model/dto/cart-item-dto";
import {PurchaseDto} from "../../model/dto/purchase-dto";
import {CustomerDto} from "../../model/dto/customer-dto";
import {CartDto} from "../../model/dto/cart-dto.model";

@Component({
  selector: 'app-menuItem-detail',
  templateUrl: './menuItem-detail.component.html',
  styleUrls: ['./menuItem-detail.component.css']
})
export class MenuitemDetailComponent implements OnInit {

  menuItemUrl = 'http://localhost:8080/api/menuItems';

  menuItem: Menuitem = new Menuitem("", "", 0, "", new Date(), new Date(), { self: { href: "" }});
  menuItemId: number = 0;

  purchaseServiceDto: any;

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private purchaseDataService: PurchaseDataService) { }

  ngOnInit(): void {

    // get data service
    this.purchaseDataService.purchaseServiceData.subscribe((serviceData) =>{
      this.purchaseServiceDto = serviceData;
    })

    this.menuItemId = +this.route.snapshot.paramMap.get('menuItemId')!;
    this.getMenuItem(this.menuItemId).subscribe(menuItem => this.menuItem = menuItem);

  }

  getMenuItem(menuItemId: number): Observable<Menuitem> {
    return this.http.get<Menuitem>(`${this.menuItemUrl}/${menuItemId}`)
        .pipe(
          map(menuItem => {
            let parsedId = menuItem._links.self.href.split("/")[5];
            menuItem.id = parseInt(parsedId);

            return menuItem;
          })
        )
  }

  ngOnDestroy(){

      this.purchaseServiceDto.getCurrentCartItem().getMenuItem().setId(this.menuItem.id);
      this.purchaseServiceDto.getCurrentCartItem().getMenuItem().setMenuItemTitle(this.menuItem.menuItem_title);
      this.purchaseServiceDto.getCurrentCartItem().getMenuItem().setDescription(this.menuItem.description);
      this.purchaseServiceDto.getCurrentCartItem().getMenuItem().setTravelPrice(this.menuItem.price);
      this.purchaseServiceDto.getCurrentCartItem().getMenuItem().setImageUrl(this.menuItem.image_URL);
  }

  ngAfterViewInit(){

      // create and set menuItem id for later use
      let tempMenuItemDto = new MenuItemDto(0, "", "", 0, "");
      tempMenuItemDto.setId(this.menuItemId);
      tempMenuItemDto.setMenuItemTitle(this.menuItem.menuItem_title);
      tempMenuItemDto.setTravelPrice(this.menuItem.price);

      // new cart item
      let tempCartItemDto = new CartItemDto(tempMenuItemDto, []);
      // set the menuItem in the cart item
      tempCartItemDto.setMenuItem(tempMenuItemDto);

      this.purchaseServiceDto.addCartItem(tempCartItemDto);

    }

}
