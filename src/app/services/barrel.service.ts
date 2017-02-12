import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BarrelService {

  private baseUrl = 'http://127.0.0.1:2050/list';

  constructor(
    private http: Http
  ) {}

  getAllList = (): Observable<Response> => {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl, options);
  };
}
