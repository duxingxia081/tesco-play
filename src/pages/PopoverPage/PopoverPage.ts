import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController,ViewController } from 'ionic-angular';

/*/!*
  Generated class for the Goods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*!/*/
@Component({
  templateUrl:'PopoverPage.html'
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}
  num=1;
  title=[
    {name:'chose1',id:0},
    {name:'chose2',id:1},
    {name:'chose3',id:2},
    {name:'chose4',id:3},
    {name:'chose5',id:4},
    {name:'chose6',id:5}
  ];

  choseGoods:number;

  close() {
    this.viewCtrl.dismiss();
  }

  add():void{
    this.num++;
  }

  reduce():void{
    if(this.num>1){
      this.num--;
    }
  }

  choseNum(num:number){
    this.choseGoods = num;
  }
}
