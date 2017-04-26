import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import {StorageService} from "../../providers/storage-service";
import {UserGoods} from "../../entity/UserGoods";

@Component({
  templateUrl:'PopoverPage.html'
})
export class PopoverPage {
  goods:any;
  userGoods:UserGoods;
  constructor(public viewCtrl: ViewController,private storageService:StorageService,public navParams: NavParams) {
    this.goods = navParams.get("goods");
    this.userGoods = new UserGoods(1,0,1,this.goods.money);
  }
  num=1;
  title=[
    {name:'chose1',id:0},
    {name:'chose2',id:1},
    {name:'chose3',id:2},
    {name:'chose4',id:3},
    {name:'chose5',id:4},
    {name:'chose6',id:5}
  ];

  close() {
    this.viewCtrl.dismiss();
  }

  add():void{
    this.userGoods.buyNum += 1
  }

  reduce():void{
    if(this.num>1){
      this.userGoods.buyNum -= 1
    }
  }

  choseNum(num:number){
    this.userGoods.goodsBreed=num;
    this.userGoods.goodsBreed=num;
  }
  addCart():void{
    console.log(this.userGoods);
    this.storageService.write(this.userGoods.goodsId.toString(),this.userGoods);
  }
}
