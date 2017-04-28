import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html'
})
export class GoodsDetailPage {
  goods:any;
  msg = "goods";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goods = navParams .get("goods");
  }

  changeMsg(massage:string):void
  {
    this.msg=massage;
  }
}
