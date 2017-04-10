import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpService} from "./http-service";
import {StorageService} from "./storage-service";

/*
  Generated class for the GoodsTypeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoodsTypeService {
  API_URL = "http://181.215.150.214:8080";
  constructor(
    private http: Http,
    private httpService: HttpService,
    private storageService:StorageService) { }

  getGoodsType() {
    var url = this.API_URL + "/goods/type";
    return this.httpService.httpGet(url);
  }
}
