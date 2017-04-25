import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpService} from "./http-service";
import {StorageService} from "./storage-service";
@Injectable()
export class GoodsTypeService {
  API_URL = "http://181.215.150.214:8080";
  constructor(
    private http: Http,
    private httpService: HttpService) { }

  getGoodsType() {
    var url = this.API_URL + "/goods/type";
    return this.httpService.httpGet(url);
  }
}
