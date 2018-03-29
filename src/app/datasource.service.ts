import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class DatasourceService {

  constructor(
    private http : HttpClient
  ) { }

  getList() {
    return this.http.get('https://holidayapi.com/v1/holidays?key=bcd4dae9-7ccf-4116-b695-ae31a709b1de&country=US&year=2017');
  }

}
