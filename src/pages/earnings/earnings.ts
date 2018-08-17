import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the EarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-earnings',
  templateUrl: 'earnings.html',
})
export class EarningsPage {

  public categories;
  @ViewChild('fixedContentContainer') fixedContentContainer: ElementRef;
  @ViewChild(Content) content: Content;



    @HostListener('onscroll') onscroll() {
  
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?' },
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
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
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
    console.log('ionViewDidLoad EarningsPage');
  }

  ionViewDidEnter() {
    let fixedContainer = this.fixedContentContainer.nativeElement;

    // Get the height of the fixed item
    let itemHeight = fixedContainer.offsetHeight;
    let scroll = this.content.getScrollElement();

    console.log(itemHeight);
    console.log(scroll);

    //add preexisting scroll margin to fixed container size
    // itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
    // scroll.style.marginTop = itemHeight + 'px';
  }

}
