import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from "./http-service";

@Injectable()
export class GoodsService{

  API_URL = "http://localhost:8080";
  constructor(
      private http: Http,
      private httpService: HttpService) { }

  listGoods() {
    var url = this.API_URL + "/goods/listGoods";
    return this.httpService.httpGet(url);
  }
  getGoodsData(url) {
    return this.httpService.httpGet(this.API_URL + url);
  }
}
