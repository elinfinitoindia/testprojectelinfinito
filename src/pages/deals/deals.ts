import { ServicesDealsProvider } from './../../providers/services-deals/services-deals';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {
  public id: any;
  public item1 = true;
  public items: any = [];
  public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicedeal: ServicesDealsProvider) {

    this.title = "Deals"
    this.items = [
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');

  }


  delete(item) {


  }

}
