import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeyserStateService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeyserStateService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
    // this.data = [{ name: 'bob', state: true }, {name: 'fred', state: false}];
  }

  getRelays() {
    return this.data;
    // return [{ name: 'bob', state: true }];
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://localhost:3333/api/relays')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          console.log('-------------');
          console.log(data);
          console.log('-------------');
          resolve(this.data);
        });
    });
  }
}


