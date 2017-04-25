import { Component,Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GoodsService} from "../../providers/goods-service";

@Component({
  selector: 'page-goods-evaluate',
  templateUrl: 'goods-evaluate.html'
})
export class GoodsEvaluatePage implements OnInit {
  @Input('goods') goods:any;
  listGoodsEvaluate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private goodsService: GoodsService) {}
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/listGoodsEvaluate&goodsId="+this.goods.goodsId).then((list) => {
      this.listGoodsEvaluate = list;
    });
  }

}
