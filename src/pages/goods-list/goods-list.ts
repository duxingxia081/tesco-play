import { Component,OnInit } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import {GoodsDetailPage} from "../goods-detail/goods-detail";
import {GoodsService} from "../../providers/goods-service";
@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html'
})
export class GoodsListPage implements OnInit {
  listGoods:any;
  goodsType:any;
  constructor(public nav: NavController,private goodsService: GoodsService, public navParams: NavParams) {
    this.goodsType = navParams .get("goodsType");
  }
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/listGoodsByType&goodsType="+this.goodsType.goodsType).then((list) => {
      this.listGoods = list;
    });
  }
  goodsDetail(goods:any): void {
    this.nav.push(GoodsDetailPage,{goods:goods});
  }
}
