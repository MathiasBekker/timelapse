import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanoramaPage } from './panorama';

@NgModule({
  declarations: [
    PanoramaPage,
  ],
  imports: [
    IonicPageModule.forChild(PanoramaPage),
  ],
})
export class PanoramaPageModule {}
