import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {ResponseContentType} from "../../node_modules/@angular/http/src/enums";

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {

  myInfoLocal: any;
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
  public httpPostImag(url: string) {
    let options = new RequestOptions({method:'get',responseType:ResponseContentType.Blob});
    return this.http.get(url, options).toPromise()
        .then(res => {
           return URL.createObjectURL(new Blob([res], {type: "image/jpg"}));
        })
        .catch(err => {
          this.handleError(err);
        });
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
