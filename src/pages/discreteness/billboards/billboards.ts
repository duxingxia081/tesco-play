import {Component, ViewChild,OnInit, Input} from '@angular/core';
import {Slides} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
//注入轮播

@Component({
    selector: 'page-billboards',
    templateUrl: 'billboards.html'
})
export class BillboardsPage implements OnInit {
    @Input('listGoodsImgs') listGoodsImgs: any;
    constructor() {
    }

    @ViewChild('mySlider') slider: Slides;

    ngAfterContentInit():void
    {

    }
    ngOnInit():void {
        //页面加载完成后自己调用
        setInterval(() => {
            this.slider.slideNext(300, true);
        }, 4000);
    }
}
