import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from "./http-service";
import {StorageService} from "./storage-service";
import {OnInit} from "../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Injectable()
export class GoodsService{

  API_URL = "http://181.215.150.214:8080";
  constructor(
      private http: Http,
      private httpService: HttpService,
      private storageService:StorageService) { }

  listGoods() {
    var url = this.API_URL + "/goods/listGoods";
    return this.httpService.httpGet(url);
  }
  getGoodsData(url) {
    return this.httpService.httpGet(this.API_URL + url);
  }
}
