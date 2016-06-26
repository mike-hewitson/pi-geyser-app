import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {CordovaOauth, Facebook} from 'ng2-cordova-oauth/core';
import {GeyserStateService} from '../../providers/geyser-state-service/geyser-state-service';

@Component({
  providers: [GeyserStateService],
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  cordovaOauth;
  platform;
  relays;
  geyserStateService;
  nav;

  // static get parameters() {
  //   return [[Platform]];
  // }

  constructor(geyserStateService: GeyserStateService, nav: NavController) {
    // this.platform = platform;
    // this.cordovaOauth = new CordovaOauth(new Facebook({ clientId: "293408157664230", appScope: ["email"] }));
    this.geyserStateService = geyserStateService;
    // this.relays = [{ name: 'bob', state: true }, {name: 'bruce', state: false}];
    this.relays = geyserStateService.load();
    this.relays = geyserStateService.getRelays();
    this.nav = nav;
  }

  // login() {
  //   this.platform.ready().then(() => {
  //     this.cordovaOauth.login().then((success) => {
  //       alert(success.access_token);
  //     }, (error) => {
  //       alert(error);
  //     });
  //   });
  // }

}
