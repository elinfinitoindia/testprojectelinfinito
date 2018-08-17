
import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  public title: string;
  @ViewChild('pageSlider') pageSlider: Slides;
  categories: any = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.title = "Categories";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.categories = $event._snapIndex.toString();
  }
}
