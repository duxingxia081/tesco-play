import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GoodsDetailPage} from "../../goods-detail/goods-detail";
import {GoodsService} from "../../../providers/goods-service";

/*
  Generated class for the Type page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-type',
  templateUrl: 'type.html'
})
export class TypePage implements OnInit {
  listGoods:any;
  constructor(public nav: NavController,private goodsService: GoodsService) {}
  ngOnInit(): void {
    this.goodsService.listGoods().then((list) => {
      this.listGoods = list;
    });
  }
  goodsDetail(): void {
    this.nav.push(GoodsDetailPage);
  }
}
