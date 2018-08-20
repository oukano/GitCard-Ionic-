import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { String } from '../../app/string';

import { RequestProvider } from '../../providers/request/request';
import { AdMobFree , AdMobFreeBannerConfig} from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  img:string;
  choice:string='cat2';
  cat1:any;  
  cat2:any;
  cat3:any;
  img1:any;  
  img2:any;
  img3:any;
  splash = true;
  
  constructor(
              public navCtrl: NavController,
              private socialSharing: SocialSharing ,
              public request: RequestProvider,
              private admobFree: AdMobFree

            ) {

             
              }

              ionViewDidLoad() {
              }

              ionViewWillEnter(){
                setTimeout(() => this.splash = false, 4000);                

                this.request.get().subscribe(data => {
              
                  this.cat1=data[0].name;
                  this.cat2=data[1].name;
                  this.cat3=data[2].name;
                  
                  
                  this.img1=data[0].images;
                  this.img2=data[1].images;
                  this.img3=data[2].images;
              
                });
                   
              }

whatsapp(link){

  this.socialSharing.shareViaWhatsApp("sent from : app Link",link);
  //this.interstitial();
  
}

messenger(link){
  this.socialSharing.shareVia("com.facebook.orca"," sent from : app Link","sent from : app Link",link);      
  //this.interstitial();
  
}

facebook(link){

  this.socialSharing.shareViaFacebook("sent from : app Link",link);  
  //this.interstitial();
  
}

instagram(link){

  this.socialSharing.shareViaInstagram("sent from : app Link",link);
  //this.interstitial();
  

}

interstitial(){
  const interstitialConfig: AdMobFreeBannerConfig = {
                // add your config here
                // for the sake of this example we will just use the test config
                id : 'ca-app-pub-4198279198189550/2675267407',
                
               };
               this.admobFree.interstitial.config(interstitialConfig);
  this.admobFree.interstitial.prepare().then(
    () => {

     this.admobFree.interstitial.show();
    }
  ).catch(e => console.log(e));
}




}
