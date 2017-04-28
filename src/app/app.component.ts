import {Component, ViewChild, OnInit} from "@angular/core";
import {Nav, Platform, NavController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {GoodsService} from "../providers/goods-service";
import {GoodsListPage} from "../pages/goods-list/goods-list";
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: NavController;

  rootPage = TabsPage;

  pages: Array<{goodsType: any, component: any}> = new Array();
  constructor(public platform: Platform,private goodsService: GoodsService) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/type").then((list) => {
      if(list){
        list.forEach((goodsType)=>{
            this.pages.push({goodsType:goodsType,component: GoodsListPage})
          }
        );
      }
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component,{goodsType:page.goodsType});
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
