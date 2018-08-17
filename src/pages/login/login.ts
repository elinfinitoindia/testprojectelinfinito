import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

public title:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title ="Login";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
