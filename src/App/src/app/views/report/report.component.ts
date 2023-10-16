import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {Report} from "../../model/report";
import {ReportApiResponse} from "../../model/report-api-response";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportUrl = 'http://localhost:8080/api/report/sales';

  // menuItems for the page
  reports: Report[] = [];
  displayedColumns: string[] = [
      'purchaseCount',
    'menuItem_title',
    'price',
    'created_date',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.getReport().subscribe(reports => {
      this.reports = reports;
      this.dataSource = new MatTableDataSource(reports);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


  }

  getReport(): Observable<Report[]> {
    return this.http.get<ReportApiResponse>(this.reportUrl)
        .pipe(
            map(response => response._embedded.reports)
        )
  }
}
