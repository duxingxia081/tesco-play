import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';

@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html'
})
export class RecommendPage {
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
  }
}
