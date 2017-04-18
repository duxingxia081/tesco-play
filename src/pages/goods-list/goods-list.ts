import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GoodsDetailPage} from "../goods-detail/goods-detail";

/*
  Generated class for the GoodsDeatails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html'
})
export class GoodsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsDeatailsPage');
  }

  goodsDetail():void{
    this.navCtrl.push(GoodsDetailPage);
  }
}
