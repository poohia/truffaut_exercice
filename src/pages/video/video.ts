import { Component } from '@angular/core';
import { LoadingController, ModalController } from 'ionic-angular';


import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { HttpProvider } from '../../app/providers/httpProvider';



@Component({
  selector: 'page-home',
  templateUrl: 'video.html',
  providers : [HttpProvider]
})
export class VideoModal {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
     private navParams: NavParams,public modalCtrl: ModalController,
     public viewCtrl: ViewController,
     public platform: Platform,
      private httpProvider : HttpProvider) {

  }
  dismiss() {
  this.viewCtrl.dismiss();
  }

}
