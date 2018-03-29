import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private datasource : DatasourceService
  ) { }

  holidays = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.datasource.getList().subscribe(res => {
        this.holidays = res['holidays'][params.date];
      })
   });
  }

}
