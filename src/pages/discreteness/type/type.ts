import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GoodsDetailPage} from "../../goods-detail/goods-detail";

/*
  Generated class for the Type page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-type',
  templateUrl: 'type.html'
})
export class TypePage {
  //constructor(public nav: NavController,public navCtrl: NavController, public navParams: NavParams) {}
  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypePage');
  }
  goodsDetail(): void {
    this.nav.push(GoodsDetailPage);
  }
}
