import { Component,Output,EventEmitter,Input, OnInit } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../PopoverPage/PopoverPage';
import {GoodsService} from "../../providers/goods-service";

@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class GoodsPage implements OnInit {
  @Input('goods') goods:any;
  @Output() onVoted = new EventEmitter<void>();
  countGoodsEvaluate:number;
  listGoodsEvaluate:any;
  listGoodsImgs:any;
  constructor( public popoverCtrl: PopoverController,private goodsService: GoodsService) {
  }
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/countGoodsEvaluate&goodsId="+this.goods.goodsId).then((count) => {
      this.countGoodsEvaluate = count;
    });
    this.goodsService.getGoodsData("/goods/listGoodsEvaluate&goodsId="+this.goods.goodsId).then((list) => {
      this.listGoodsEvaluate = list;
    });
    this.goodsService.getGoodsData("/goods/goodsImgs&goodsId="+this.goods.goodsId).then((list) => {
      this.listGoodsImgs = list;
    });
  }
  ngOnChanges():void{

  }
  presentPopover(myEvent,goods) {
    let popover = this.popoverCtrl.create(PopoverPage,{goods:goods});
    popover.present({
      ev: myEvent
    });
  }

  jumpComment():void{
    this.onVoted.emit();
  }
}
