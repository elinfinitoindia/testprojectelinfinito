import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {
  public title: string;

  public categories: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.title = "Market Place"
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?', "id": "1" },
      { 'title': 'Prateek', 'description': 'Hello how are you?', "id": "2" },
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

  getAppLink(itm) {
    alert(itm);
  }

}
