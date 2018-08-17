
import { RedeemComponent } from './../components/redeem/redeem';
import { HistoryComponent } from './../components/history/history';
import { EarningsPage } from './../pages/earnings/earnings';
import { CategoriesPage } from './../pages/categories/categories';
import { BrandsPage } from './../pages/brands/brands';
import { LoginPage } from './../pages/login/login';
import { DetailPage } from './../pages/detail/detail';
import { ListPage } from './../pages/list/list';
import { DealsdetailPage } from './../pages/dealsdetail/dealsdetail';
import { Storage, IonicStorageModule } from '@ionic/Storage';
import { HttpClient } from '@angular/common/http';
import { DealsPage } from './../pages/deals/deals';
import { ProfilePage } from './../pages/profile/profile';
import { MarketplacePage } from './../pages/marketplace/marketplace';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { StoresPage } from '../pages/stores/stores';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesDealsProvider } from '../providers/services-deals/services-deals';
import { SharedProvider } from '../providers/shared/shared';
import { AuthenticatinProvider } from '../providers/authenticatin/authenticatin';
import { SharePage } from './../pages/share/share';
import { RegisterPage } from '../pages/register/register';
import { Device } from '@ionic-native/device';



@NgModule({
  declarations: [
    MyApp,
    StoresPage,
    ContactPage,
    HomePage,
    TabsPage,
    MarketplacePage,
    ProfilePage,
    DealsPage,
    DealsdetailPage,
    SharePage,
    ListPage,
    DetailPage,
    LoginPage,
    RegisterPage,
    BrandsPage,
    CategoriesPage,
    EarningsPage,
    HistoryComponent,
    RedeemComponent,




  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      // scrollAssist: false,
      swipeBackEnabled: true,
      // autoFocusAssist: false
    }, {
        links: [
          { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
          { component: ProfilePage, name: 'ProfilePage', segment: 'profile' },
          { component: MarketplacePage, name: 'MarketplacePage', segment: 'marketplace' },
          { component: StoresPage, name: 'StoresPage', segment: 'stores' },
          { component: HomePage, name: 'HomePage', segment: 'home' },
          { component: DealsPage, name: 'DealsPage', segment: 'deals' },
          { component: DealsdetailPage, name: 'DealsdetailPage', segment: 'dealdetial/:dealid' },
          { component: SharePage, name: 'SharePage', segment: 'sharepage' },
          { component: ListPage, name: 'ListPage', segment: 'listpage' },
          { component: DetailPage, name: 'DetailPage', segment: 'detailpage/:title', },
          { component: LoginPage, name: 'LoginPage', segment: 'login' },
          { component: RegisterPage, name: "Register", segment: 'register' },
          { component: BrandsPage, name: 'BrandPage', segment: 'brands' },
          { component: CategoriesPage, name: 'CategoriesPage', segment: 'categories' },
          { component: EarningsPage, name: 'Earnings', segment: 'earning' },

        ]
      },
    ),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoresPage,
    ContactPage,
    HomePage,
    TabsPage,
    MarketplacePage,
    ProfilePage,
    DealsPage,
    DealsdetailPage,
    SharePage,
    ListPage,
    DetailPage,
    LoginPage,
    RegisterPage,
    BrandsPage,
    CategoriesPage,
    EarningsPage,
    HistoryComponent,
    RedeemComponent


  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesDealsProvider,
    SharedProvider,
    AuthenticatinProvider,
    HttpModule,
    Device
  ],

},
)
export class AppModule { }
