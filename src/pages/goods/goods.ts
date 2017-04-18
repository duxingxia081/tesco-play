import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController,ViewController } from 'ionic-angular';
import { PopoverPage } from '../PopoverPage/PopoverPage';
import { GoodsEvaluatePage } from '../goods-evaluate/goods-evaluate';

/*/!*
  Generated class for the Goods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*!/*/
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class GoodsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  jumpComment():void{
    this.navCtrl.push(GoodsEvaluatePage);
  }
}
