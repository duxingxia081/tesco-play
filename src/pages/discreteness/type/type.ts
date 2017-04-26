import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GoodsDetailPage} from "../../goods-detail/goods-detail";
import {GoodsService} from "../../../providers/goods-service";

@Component({
  selector: 'page-type',
  templateUrl: 'type.html'
})
export class TypePage implements OnInit {
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
