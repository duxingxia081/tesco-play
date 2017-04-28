import {Component, ViewChild, Input} from '@angular/core';
import {Slides} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
//注入轮播

@Component({
    selector: 'page-billboards',
    templateUrl: 'billboards.html'
})
export class BillboardsPage {
    @Input('goods') goods: any;
    listGoodsImgs:any;
    constructor(private goodsService: GoodsService) {
    }

    @ViewChild('mySlider') slider: Slides;
    mySlideOptions = {
        autoplay: 2000,
        speed: 300
    };

    ngOnInit() {
        this.goodsService.getGoodsData("/goods/goodsImgs&goodsId="+this.goods.goodsId).then((list) => {
            console.log(list);
            this.listGoodsImgs = list;
        });
        //页面加载完成后自己调用
        setInterval(() => {
            this.slider.slideNext(300, true);
        }, 4000);
    }
}
