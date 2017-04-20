import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GoodsDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html'
})
export class GoodsDetailPage {

  msg = "goods";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsDetailPage');
  }
  changeMsg(massage:string):void
  {
    console.log("msg:"+massage);
    this.msg=massage;
  }
}
