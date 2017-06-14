import { Component } from '@angular/core';
import { LoadingController, ModalController } from 'ionic-angular';


import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../app/providers/httpProvider';
import { VideoModal } from './../video/video';

export class Plante
{
   public token : string = null;
   public src   : string = null;
   public price : string = null;
   public name  : string = null;
   public allee : string = null;

   constructor(token : string, src : string, price : string, name : string, allee : string)
   {
      this.token = token;
      this.src = src;
      this.price = price;
      this.name = name;
      this.allee = allee;
   }
}


@Component({
  selector: 'page-home',
  templateUrl: 'plantes.html',
  providers : [HttpProvider]
})
export class PlantesPage {
  public statusBorne : String = null;
  public plantes : Array<Plante> = new Array() ;
  private token : String = null;
  private loading = this.loadingCtrl.create({
    spinner: 'bubbles',
   content: 'Attendez...'
  });

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private navParams: NavParams,public modalCtrl: ModalController, private httpProvider : HttpProvider) {
    this.loading.present();
    this.token = navParams.get('token') ;
    this.httpProvider.getPlantes(this.token).subscribe((data) => {
      let plantes = data.json();
      for(let plante of plantes)
      {
        let curr_plante = new Plante(plante.token, plante.src, plante.price, plante.name, plante.allee);
        this.plantes.push(curr_plante);
      }
      console.log(this.plantes);
      this.loading.dismiss();
    });
  }
  showModal()
  {
    let modal = this.modalCtrl.create(VideoModal);
        modal.present();
  }
}
