import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MenuItemApiResponse} from '../../model/menuItem-api-reponse';
import {Menuitem} from '../../model/menuItem';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  // urls
  menuItemUrl = 'http://localhost:8080/api/menuItems';

  // menuItems for the page
  menuItems: Menuitem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getMenuItems().subscribe(menuItems => {
      menuItems.forEach(menuItem => {
        let parsedId = menuItem._links.self.href.split("/")[5];
        menuItem.id = parseInt(parsedId);
      });
      this.menuItems = menuItems;
    });

  }
  getMenuItems(): Observable<Menuitem[]> {
    return this.http.get<MenuItemApiResponse>(this.menuItemUrl)
      .pipe(
        map(response => response._embedded.menuItems)
      )
  }

}
