import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public title: string;
  public id;
  public name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.id = this.navParams.get('id');
    this.name = this.navParams.get('title');
    this.title = "Contact"
  }

  ionViewDidLoad() {



  }

  slidechange($event) {
    alert("changed");
  }

}
