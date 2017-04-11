import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from "./http-service";
import {StorageService} from "./storage-service";

/*
  Generated class for the GoodsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoodsService{

  API_URL = "http://localhost:8080";
  constructor(
      private http: Http,
      private httpService: HttpService,
      private storageService:StorageService) { }

  listGoods() {
    var url = this.API_URL + "/goods/listGoods";
    return this.httpService.httpGet(url);
  }

}
