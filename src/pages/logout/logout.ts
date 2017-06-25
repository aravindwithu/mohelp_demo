/*
  Created by Aravind for Mohelp demo,
  To support logout page functionalities.
*/

import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

//constructor - Checks for user session to validate login.
  constructor(public navCtrl: NavController) {
    if (localStorage.getItem("userSession") === null) {      
        this.navCtrl.setRoot(LoginPage);
    } 
  }

// performs logout function by removing user session from local storage and redirecting the nav to login page.
  logout(){
    if (localStorage.getItem("userSession") === null) {      
        this.navCtrl.setRoot(LoginPage);
    }
    else{
      window.localStorage.removeItem("userSession");
      console.log("logged out");
    } 
    window.location.reload(true);
    this.navCtrl.setRoot(LoginPage);    
  }
}
