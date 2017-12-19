import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelapsePage } from './timelapse';
import { NgxCircularSliderModule } from 'ngx-circular-slider';

@NgModule({
  declarations: [
    TimelapsePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelapsePage),
    NgxCircularSliderModule,
  ],
})
export class TimelapsePageModule {}
