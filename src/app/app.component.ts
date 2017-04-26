import {Component, ViewChild, OnInit} from "@angular/core";
import {Nav, Platform, NavController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {RecommendPage} from "../pages/recommend/recommend";
import {GoodsService} from "../providers/goods-service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: NavController;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}> = new Array();
  constructor(public platform: Platform,private goodsService: GoodsService) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.goodsService.getGoodsData("/goods/type").then((list) => {
      if(list){
        list.forEach((goodsType)=>{
            this.pages.push({ title:goodsType.title, component: RecommendPage })
          }
        );
      }
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
