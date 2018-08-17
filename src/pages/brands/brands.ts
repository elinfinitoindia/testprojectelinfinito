import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {
  public title: string;
  brands: any = '0';
  public categories;

  @ViewChild('pageSlider') pageSlider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Brands";
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
    console.log('ionViewDidLoad BrandsPage');
  }


  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.brands = $event._snapIndex.toString();
  }

}
