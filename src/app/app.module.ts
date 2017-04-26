import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RecommendPage } from '../pages/recommend/recommend';//推荐页
import { BillboardsPage } from '../pages/discreteness/billboards/billboards';//宣传栏
import { TypePage } from '../pages/discreteness/type/type';//分类信息
import { TypeOnePage } from '../pages/discreteness/type-one/type-one';//分类信息
import {GoodsDetailPage} from '../pages/goods-detail/goods-detail';
import {GoodsPage} from '../pages/goods/goods';
import {GoodsDeatailsPage} from '../pages/goods-deatails/goods-deatails';
import {GoodsEvaluatePage} from '../pages/goods-evaluate/goods-evaluate';
import { GoodsListPage } from '../pages/goods-list/goods-list';
import { PopoverPage  } from '../pages/PopoverPage/PopoverPage';

import { CartPage } from '../pages/cart/cart';
import { PersonPage } from '../pages/person/person';
import { SettingsPage } from '../pages/settings/settings';
<<<<<<< HEAD
import { OrderPage } from '../pages/order/order';
import {GoodsTypeService} from "../providers/goods-type-service";
=======
import { AccountPage } from '../pages/account/account';
>>>>>>> a8f574baf04a610f4d6403b0d1c4c79fcbd93876
import {HttpService} from "../providers/http-service";
import {StorageService} from "../providers/storage-service";
import {GoodsService} from "../providers/goods-service"

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    RecommendPage,
    BillboardsPage,
    TypePage,
    TypeOnePage,
    GoodsDetailPage,
    GoodsPage,
    GoodsDeatailsPage,
    GoodsEvaluatePage,
    GoodsListPage,
    PopoverPage,

    CartPage,
    PersonPage,
    SettingsPage,
    OrderPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    RecommendPage,
    BillboardsPage,
    TypePage,
    TypeOnePage,
    GoodsDetailPage,
    GoodsPage,
    GoodsDeatailsPage,
    GoodsEvaluatePage,
    PopoverPage,

    CartPage,
    PersonPage,
    OrderPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpService,StorageService,GoodsService]
})
export class AppModule {}
