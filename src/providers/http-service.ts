import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from "rxjs";
@Injectable()
export class HttpService {
  local: Storage;
  constructor(
    private http: Http) {
    //this.local = new Storage(LocalStorage);
  }

  public httpGet(url: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }

  public httpPost(url: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
