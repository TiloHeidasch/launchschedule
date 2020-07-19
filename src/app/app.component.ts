import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Launch',
      url: '/launch',
      icon: 'rocket'
    },
    {
      title: 'Agency',
      url: '/agency',
      icon: 'school'
    },
    {
      title: 'Mission',
      url: '/mission',
      icon: 'newspaper'
    },
    {
      title: 'Pad',
      url: '/pad',
      icon: 'locate'
    },
    {
      title: 'Payload',
      url: '/payload',
      icon: 'planet'
    },
    {
      title: 'Rocket',
      url: '/rocket',
      icon: 'rocket'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
