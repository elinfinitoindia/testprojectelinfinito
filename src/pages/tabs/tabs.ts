import { DealsPage } from './../deals/deals';
import { StoresPage } from './../stores/stores';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MarketplacePage } from './../marketplace/marketplace';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StoresPage;
  tab3Root = DealsPage;
  tab4Root = MarketplacePage;
  tab5Root = ProfilePage;
  public myIndex;

  constructor(public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
