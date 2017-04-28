import { Component,OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
import {GoodsDetailPage} from "../../goods-detail/goods-detail";

@Component({
  selector: 'page-type-one',
  templateUrl: 'type-one.html'
})
export class TypeOnePage implements OnInit {
  listGoods:any;
  constructor(public nav: NavController,private goodsService: GoodsService) {
  }
  ngOnInit(): void {
    this.goodsService.listGoods().then((list) => {
      this.listGoods = list;
    });
  }
  goodsDetail(goods:any): void {
    this.nav.push(GoodsDetailPage,{goods:goods});
  }
}
