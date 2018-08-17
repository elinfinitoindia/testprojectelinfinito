import { Http } from '@angular/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the ServicesDealsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesDealsProvider {

  public data: any;

  constructor(public http: Http) {
    console.log('Hello ServicesDealsProvider Provider');
  }

  getMarketApplication() {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/marketplace.json')
        .map((res) => res.json());
    }
  }

}
