import { Component,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams,PopoverController,ViewController } from 'ionic-angular';
import { PopoverPage } from '../PopoverPage/PopoverPage';
import { GoodsEvaluatePage } from '../goods-evaluate/goods-evaluate';

@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class GoodsPage {

  @Output() onVoted = new EventEmitter<void>();

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
    this.onVoted.emit();
  }
}
