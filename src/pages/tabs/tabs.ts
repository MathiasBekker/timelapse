import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
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
