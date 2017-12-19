import { Component } from '@angular/core';
import { VideoPage } from '../video/video';
import { TimelapsePage } from '../timelapse/timelapse';
import { PanoramaPage } from '../panorama/panorama';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelapsePage;
  tab2Root = VideoPage;
  tab3Root = PanoramaPage;

  constructor() {

  }
}
