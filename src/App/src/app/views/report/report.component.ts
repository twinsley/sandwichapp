import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {Report} from "../../model/report";
import {ReportApiResponse} from "../../model/report-api-response";
import {Menuitem} from '../../model/menuItem';
import {MenuItemApiResponse} from '../../model/menuItem-api-reponse';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  menuItemUrl = '/api/menuItems';

  // menuItems for the page
  menuItems: Menuitem[] = [];
  displayedColumns: string[] = [
    'id',
    'menuItem_title',
    'description',
    'price',
    'last_update',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    let parsedMenuItems: Menuitem[] = [];
    const currentDate = new Date();
    const lastWeekDate = new Date(currentDate.getTime()
        - 7 * 24 * 60 * 60 * 1000);
    this.getMenuItems().subscribe(menuItems => {
      menuItems.forEach(menuItem => {
        let parsedId = menuItem._links.self.href.split("/")[5];
        menuItem.id = parseInt(parsedId);
        if (menuItem.last_update != null && menuItem.last_update > lastWeekDate){
          const index = menuItems.indexOf(menuItem);
          console.log(index)
          menuItems.splice(index, 1)
        }
      });
      this.menuItems = menuItems;

      this.dataSource = new MatTableDataSource(menuItems);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });



  }

  getMenuItems(): Observable<Menuitem[]> {
    return this.http.get<MenuItemApiResponse>(this.menuItemUrl)
        .pipe(
            map(response => response._embedded.menuItems)
        )
  }
}
