import {Component, ViewChild, OnInit} from "@angular/core";
import {Nav, Platform, NavController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {RecommendPage} from "../pages/recommend/recommend";
import {GoodsTypeService} from "../providers/goods-type-service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: NavController;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}> = new Array();
  pageList:any = "";

  constructor(public platform: Platform,private goodsTypeService: GoodsTypeService) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.goodsTypeService.getGoodsType().then((list) => {
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
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
