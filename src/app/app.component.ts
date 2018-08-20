import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { String } from './string';
import { AdMobFree ,AdMobFreeBannerConfig} from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private admobFree: AdMobFree) {
    platform.ready().then(() => {
     
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        
        id: String.banner,
        
       };
       this.admobFree.banner.config(bannerConfig);
       
       


         


      

    });
  }
}

