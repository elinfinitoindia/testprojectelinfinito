import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@Injectable()
export class SharedProvider {
  private loading: any;


  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public storage: Storage) {
    console.log('Hello SharedProvider Provider');

  }

  public SetToken(token) {
    this.storage.set('token', token);
  }

  public GetToken() {
    return this.storage.get('token').then((value) => {
      return value;
    });
  }

  public show() {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true
      });
    }
    this.loading.present();
  }
  public hide() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

}
