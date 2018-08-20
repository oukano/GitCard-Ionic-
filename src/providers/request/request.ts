import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  url='http://trip.samoox.com/images.php';

  constructor(public http: Http) {
  }

  get(){
    return this.http.get(this.url+'')
      .map(res => res.json());
  }


}
