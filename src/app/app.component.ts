import { Component, OnInit } from '@angular/core';
import {
  InAppBrowser,
  InAppBrowserObject,
} from '@awesome-cordova-plugins/in-app-browser';
import { Browser } from '@capacitor/browser';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform, private navCtrl: NavController) {}

  async ngOnInit() { }

  async openLink() {
    try {
      const browser: InAppBrowserObject = InAppBrowser.create(
        'https://www.client8.engagesigns.com/menu/',
        '_blank',
        {
          location: 'no',
        }
      );

      browser.on('loadstart').subscribe((event) => {
        if (!event.url.includes('https://www.client8.engagesigns.com/menu/')) {
          browser.close();
        }
      });
    } catch {}
  }
}
