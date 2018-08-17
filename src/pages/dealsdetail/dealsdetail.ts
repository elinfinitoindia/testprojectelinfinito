import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DealsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dealsdetail',
  templateUrl: 'dealsdetail.html',
})
export class DealsdetailPage {
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Deal Detail";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsdetailPage');
  }

}
