import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoPage } from '../pages/video/video';
import { TimelapsePage } from '../pages/timelapse/timelapse';
import { PanoramaPage } from '../pages/panorama/panorama';
import { SettingsPage } from '../pages/settings/settings';

import { NgxCircularSliderModule } from 'ngx-circular-slider';
import { BLE } from '@ionic-native/ble';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    VideoPage,
    PanoramaPage,
    TimelapsePage,
    SettingsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxCircularSliderModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    VideoPage,
    TimelapsePage,
    PanoramaPage,
    SettingsPage,
  ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
