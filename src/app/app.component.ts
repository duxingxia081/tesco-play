import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { RecommendPage } from '../pages/recommend/recommend';

import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '热门推荐', component: RecommendPage },
      { title: '个护化妆', component: SettingsPage },
      { title: '母婴幼儿', component: AccountPage },
      { title: '医药保健', component: AccountPage },
      { title: '家乡特产', component: AccountPage }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
