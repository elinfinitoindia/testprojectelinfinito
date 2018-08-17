import { ListPage } from './../list/list';
import { ServicesDealsProvider } from './../../providers/services-deals/services-deals';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {


  public categories;
  public items1: any = [];
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dealservice: ServicesDealsProvider) {
    this.title = "Share";
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?' },
      { 'title': 'Prateek', 'description': 'Hello how are you?' },
      { 'title': 'Mohit1', 'description': 'Hello how are you?' },
      { 'title': 'Mohit2', 'description': 'Hello how are you?' },
      { 'title': 'Mohit3', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
    ];
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SharePage');
    // this.title = this.navParams.get("title");

    // this.dealservice.getMarketApplication().subscribe(data => {
    //   this.items1 = data.dat
    // })

  }

  segmentChanged(evnt) {
    alert('hi');
  }

  detail() {
    this.navCtrl.push(ListPage);
  }
}
