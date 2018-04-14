import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OurHttpService {

  private api_url:string = "http://api.wunderground.com/api/f42e721aab0b0635/conditions/q//Ontario/Toronto.json";

  constructor(private http: Http) {}

 fetchData() {
   return this.http.get(this.api_url).map(
     (response) => response.json()
 )}

}
