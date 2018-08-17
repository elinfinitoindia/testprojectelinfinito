import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDealsProvider } from '../../providers/services-deals/services-deals';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public title: string;
  public categories;
  public items1: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dealservice: ServicesDealsProvider) {
    this.title = ""
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
    this.title = this.navParams.get("title");
    var dat = this.title;
    this.dealservice.getMarketApplication().subscribe(data => {
      this.items1 = data.dat
    })

  }

  segmentChanged(evnt) {
    alert('hi');
  }

  detail(evnt) {
    var title1 = evnt.currentTarget.id;
    this.navCtrl.push(ListPage,
      {
        title: title1
      });
  }
}
