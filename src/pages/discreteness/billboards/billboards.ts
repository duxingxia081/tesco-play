import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';//注入轮播

@Component({
  selector: 'page-billboards',
  templateUrl: 'billboards.html'
})
export class BillboardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillboardsPage');
  }

  @ViewChild('mySlider') slider:Slides;
  mySlideOptions={
  	autoplay:2000,
		speed:300
  };
  ngOnInit(){//页面加载完成后自己调用
  	setInterval(()=>{
  		this.slider.slideNext(300,true);
  	},4000)
  }
}
