import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../app/providers/httpProvider';
import { PlantesPage } from '../plantes/plantes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [HttpProvider]
})
export class HomePage {
  public statusBorne : String = null;
  private loading = this.loadingCtrl.create({
    spinner: 'bubbles',
   content: 'Recherche de bornes...'
  });

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private alertCtrl: AlertController,private toastCtrl: ToastController, private httpProvider : HttpProvider) {
    this.loading.present();
    this.httpProvider.hello().subscribe((data) => {
      this.statusBorne = "Connecté !";
      this.loading.dismiss();
    }) ;
  }

  searchSession()
  {
    let prompt = this.alertCtrl.create({
      title: 'Session',
      message: "Entrer l'identifiant affiché sur la borne A",
      inputs: [
        {
          name: 'token',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
        },
        {
          text: 'Ok',
          handler: data => {
            this.httpProvider.isExist(data.token).subscribe((data) => {
              let dataJson = data.json();
              if(dataJson.Err)
              {
                let toast = this.toastCtrl.create({
                 message: 'Aucun résultat .',
                 position : 'top',
                 duration: 3000
               });
               toast.present();
             }
             else if(dataJson.Valid)
             {
               this.navCtrl.push(PlantesPage, {
                token: dataJson.Valid
              });
             }
            }) ;
          }
        }
      ]
    });
    prompt.present();

  }

}
