import { CategoriesPage } from './../pages/categories/categories';
import { BrandsPage } from './../pages/brands/brands';
import { LoginPage } from './../pages/login/login';
import { DealsPage } from './../pages/deals/deals';
import { StoresPage } from './../pages/stores/stores';
import { TabsPage } from './../pages/tabs/tabs';
import { ProfilePage } from './../pages/profile/profile';
import { HomePage } from './../pages/home/home';
import { ContactPage } from './../pages/contact/contact';

import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MarketplacePage } from '../pages/marketplace/marketplace';
import { SharePage } from '../pages/share/share';

export interface PageInterface {
  title: string;
  name: string;
  tabComponent?: any;
  component: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  pages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Stores', name: 'TabsPage', component: TabsPage, tabComponent: StoresPage, index: 1, icon: 'md-basket' },
    { title: 'Deals', name: 'TabsPage', component: TabsPage, tabComponent: DealsPage, index: 2, icon: 'md-cash' },
    { title: 'Brands', name: 'BrandPage', component: BrandsPage, icon: 'contacts' },
    { title: 'Categories', name: 'CategoriesPage', component: CategoriesPage, icon: 'contacts' },
    { title: 'MarketPlace', name: 'TabsPage', component: TabsPage, tabComponent: MarketplacePage, index: 3, icon: 'md-appstore' },
    { title: 'Invite & Earn', name: 'SharePage', component: SharePage, icon: 'contacts' },
    { title: 'Profile', name: 'ProfilePage', component: ProfilePage, icon: 'contacts' },
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'contacts' },

  ];

  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}