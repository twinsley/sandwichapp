import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Topping} from '../../model/topping';
import {ToppingApiResponse} from 'src/app/model/topping-api-response';
import {Menuitem} from 'src/app/model/menuItem';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {

  menuItemUrl = 'http://localhost:8080/api/menuItems/';
  toppings: Topping[] = [];
  menuItemId: number = 0;
  menuItemTitle: string = ''

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // menuItem from page
    this.menuItemId = +this.route.snapshot.paramMap.get('menuItemId')!;

    this.getMenuItemTitle().subscribe(title => {
      this.menuItemTitle = title;
    });

    this.getToppings().subscribe(toppings => {
      toppings.forEach(topping => {
        let parsedId = topping._links.self.href.split("/")[5];
        topping.id = parseInt(parsedId);
      });

      this.toppings = toppings.sort(function (a, b) {
        if (a.topping_title < b.topping_title) {
          return -1;
        }
        if (a.topping_title > b.topping_title) {
          return 1;
        }
        return 0;
      });
    });
  }

  getToppings(): Observable<Topping[]> {
    return this.http.get<ToppingApiResponse>(this.menuItemUrl + this.menuItemId + '/toppings')
      .pipe(
        map(response => response._embedded.toppings)
      );
  }

  getMenuItemTitle(): Observable<string> {
    return this.http.get<Menuitem>(this.menuItemUrl + this.menuItemId)
      .pipe(
        map(response => response.menuItem_title)
      );
  }

}
