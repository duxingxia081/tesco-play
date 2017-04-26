import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController) {

  }

  jumpSetting():void{
    this.navCtrl.push(SettingsPage);
  }

  jumpOrder():void{
    this.navCtrl.push(OrderPage);
  }
}
