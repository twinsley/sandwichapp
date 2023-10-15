import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MenuItemApiResponse} from '../../model/menuItem-api-reponse';
import {Menuitem} from '../../model/menuItem';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MenuEditDetailComponent} from "../menu-edit-detail/menu-edit-detail.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  menuItemUrl = 'http://localhost:8080/api/menuItems';

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

    this.getMenuItems().subscribe(menuItems => {
      menuItems.forEach(menuItem => {
        let parsedId = menuItem._links.self.href.split("/")[5];
        menuItem.id = parseInt(parsedId);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMenuItem(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm) {
      this.http.delete(this.menuItemUrl + "/" + id).subscribe(
          response => {
            console.log("Item deleted successfully:", response);
            this.ngOnInit()
          },
          error => {
            console.error("Error deleting item:", error);
          }
      );
    }
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(MenuEditDetailComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log("next")
        if (val) {
          console.log("refreshing")
          this.ngOnInit();
        }
      }
    });
  }
  openAddEditFormDialog() {
    const dialogRef = this.dialog.open(MenuEditDetailComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log("next")
        if (val) {
          console.log("refreshing")
          this.ngOnInit();
        }
      },
    });
  }
}
