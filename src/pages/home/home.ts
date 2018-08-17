import { Device } from '@ionic-native/device';
import { ListPage } from './../list/list';
import { DetailPage } from './../detail/detail';
import { SharePage } from './../share/share';
import { Deals } from './../../models/deals';
import { DealsdetailPage } from './../dealsdetail/dealsdetail';
import { DealsPage } from './../deals/deals';
import { ServicesDealsProvider } from './../../providers/services-deals/services-deals';
import { SharedProvider } from './../../providers/shared/shared';
import { StoresPage } from './../stores/stores';
import { MarketplacePage } from './../marketplace/marketplace';
import { ContactPage } from './../contact/contact';
import { Slides, Content } from 'ionic-angular';

import { Component, NgZone, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  @ViewChild('myNav') nav: NavController
  @ViewChild('content') content: Content;
  @ViewChild('pageSlider') pageSlider: Slides;
  @ViewChild('listelem') listelem: ElementRef;
  @ViewChild('segmentcol') segmentcol: ElementRef;

  public ishidTrue: boolean;
  public isShowTrue: boolean;

  // @HostListener('ionScroll ', ['$event']) ionScroll(event) {
  //   console.log(event);
  //   if (event.scrollTop >= 743) {
  //     this.ishidTrue = true;
  //   }

  //   else {
  //     this.ishidTrue = false;
  //   }
  // }

  public pushPage: any;
  public categories1: any = [];
  public categories: any = []
  public offers: any = [];
  public data: any = [];
  public deals: any = [];
  public catsoffers: any;
  public search: string;
  public showlinks: boolean;
  public scrollAmount = 0;

  tabs: any = '0';



  ngAfterViewInit() {
    this.content.ionScroll.subscribe((event) => {
      console.log(event);

      // if (event.scrollTop >= 743) {
      //   this.ishidTrue = true;
      //   this.isShowTrue = false;
      // }
      // else if (event.scrollTop <= 85) {
      //   this.ishidTrue = false;
      //   this.isShowTrue = true;
      // }

    });
  }

  // onPageScroll(content:Content) {
  //     console.log("scroll", content.getContentDimensions());
  //     console.log(content._scroll);
  //     var scrollview:ScrollView = content._scroll._el;
  //     console.log("scrollview", scrollview);
  //     console.log(scrollview.getTop());
  // }


  constructor(public navCtrl: NavController, public sharedservice: SharedProvider, public dealservice: ServicesDealsProvider, private device: Device, public zone: NgZone) {
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?' },
      { 'title': 'Prateek', 'description': 'Hello how are you?' },
      { 'title': 'Mohit1', 'description': 'Hello how are you?' },
      { 'title': 'Mohit2', 'description': 'Hello how are you?' },
      { 'title': 'Mohit3', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
    ];
    this.categories1 = [
      { 'title': 'Mohit54455454', 'description': 'Hello how are you?' },
      { 'title': 'Prateek', 'description': 'Hello how are you?' },
      { 'title': 'Mohit1', 'description': 'Hello how are you?' },
      { 'title': 'Mohit2', 'description': 'Hello how are you?' },
      { 'title': 'Mohit3', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
    ];
    this.pushPage = ContactPage;
    console.log(this.listelem);
  }

  ionViewDidLoad() {

    this.dealservice.getMarketApplication().subscribe(data => {
      this.offers = data.Deals;
    }, error => { "Unable to fetch booking details" });
  }

  viewAllOffers() {
    this.navCtrl.push(MarketplacePage);
  }

  getdetailoffers(index) {
    this.navCtrl.push(DealsdetailPage, {
      id: index
    })
  }

  showAllOffers(evnt) {
    var title1 = evnt.currentTarget.id;
    this.navCtrl.push(DetailPage, {
      title: title1
    });
  }

  getList(evnt) {
    var title1 = evnt.currentTarget.id;
    this.navCtrl.push(ListPage, {
      title: title1
    });
  }

  tap($event) {
    alert($event._snapIndex.toString());

  }

  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }
  scrolling() {
    alert('gi');
  }

}
