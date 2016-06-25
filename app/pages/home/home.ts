import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {CordovaOauth, Facebook} from 'ng2-cordova-oauth/core';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  cordovaOauth;
  platform;

  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;
    this.cordovaOauth = new CordovaOauth(new Facebook({ clientId: "293408157664230", appScope: ["email"] }));
  }

  // constructor(private navController: NavController) {
  // }

  login() {
    this.platform.ready().then(() => {
      this.cordovaOauth.login().then((success) => {
        alert(success.access_token);
      }, (error) => {
        alert(error);
      });
    });
  }

}
