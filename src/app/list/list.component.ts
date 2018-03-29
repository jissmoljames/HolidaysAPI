import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  holidays = {};
  dates = []
  

  constructor(
    private datasource : DatasourceService
  ) { }

  ngOnInit() {
    this.datasource.getList().subscribe(res => {
      this.holidays = res['holidays'];
      this.dates = Object.keys(this.holidays);
    });
  }

}
