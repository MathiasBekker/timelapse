import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timelapse',
  templateUrl: 'timelapse.html',
 
})
export class TimelapsePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelapsePage');
  }

  handleSliderChange(ev){
    console.log("ev",ev);
  }

}
