import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../tabs/tabs";

/*
  Generated class for the Recommend page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
