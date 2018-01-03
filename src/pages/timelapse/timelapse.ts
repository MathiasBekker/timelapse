import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble'

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-timelapse',
  templateUrl: 'timelapse.html',
 
})
export class TimelapsePage {
  SettingsPage = SettingsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ble: BLE,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelapsePage');
  }

  handleSliderChange(ev){
    console.log("ev",ev);
  }

}
