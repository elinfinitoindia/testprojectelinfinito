import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { CategoriesPage } from '../categories/categories';


@Component({
  selector: 'stores',
  templateUrl: 'stores.html'
})

export class StoresPage {
  public categories;
  public title: string;

  public popular: boolean = true;
  public stores: any = '0';
  @ViewChild('pageSlider') pageSlider: Slides;



  constructor(public navCtrl: NavController) {
    this.title = "Store";
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?' },
      { 'title': 'Prateek', 'description': 'Hello how are you?' },
      { 'title': 'Mohit1', 'description': 'Hello how are you?' },
      { 'title': 'Mohit2', 'description': 'Hello how are you?' },
      { 'title': 'Mohit3', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
    ];
  }


  // segmentChanged(evnt) {
  //   if (this.popular == false) {
  //     this.popular = true;
  //   }
  //   else
  //     this.popular = false;

  // }

  details(evnt) {

    this.navCtrl.push(ContactPage, {
      title: 'Contact',
      id: '1'
    });
  }

  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.stores = $event._snapIndex.toString();
  }

}
