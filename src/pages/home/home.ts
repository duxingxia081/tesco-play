import { Component } from '@angular/core';

import {GoodsService} from "../../providers/goods-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listGoodsImgs:any;
  constructor(private goodsService: GoodsService) {

  }
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/listTopGoods").then((list) => {
      this.listGoodsImgs = list;
    });
  }
}
