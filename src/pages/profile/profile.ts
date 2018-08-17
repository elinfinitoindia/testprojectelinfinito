import { RedeemComponent } from './../../components/redeem/redeem';
import { HistoryComponent } from './../../components/history/history';

import { DealsdetailPage } from './../dealsdetail/dealsdetail';
import { HomePage } from './../home/home';
import { EarningsPage } from './../earnings/earnings';
import { CategoriesPage } from './../categories/categories';
import { SharePage } from './../share/share';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ViewController, Slides, Keyboard } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';

  public profile: any = 'profiledetail';
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public viewCtrl: ViewController, public keyboard: Keyboard) {
    this.title = "Profile";
  }

  changepassword() {
    const modal = this.modal.create(CategoriesPage);
    modal.present();
  }

  viewEarnings() {
    this.navCtrl.push(EarningsPage);
  }


  selectTab(index) {
    if (this.keyboard.isOpen()) {
      this.keyboard.close();
    }
    this.pageSlider.slideTo(index);
  }


  changeWillSlide($event) {
    if (this.keyboard.isOpen()) {
      this.keyboard.close();
    }
    this.tabs = $event._snapIndex.toString();
  }



}
