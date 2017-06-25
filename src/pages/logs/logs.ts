/*
  Created by Aravind for Mohelp demo,
  To support logs page functionalities.
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import { StatusPage } from '../status/status';

@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html'
})

export class LogsPage {
  logs:any[];

//constructor - Fetches the logs list from local storage. Checks for user session to validate login.
  constructor(public navCtrl: NavController) {
     if (localStorage.getItem("userSession") === null) {
      console.log("not logged in");
      this.navCtrl.setRoot(LoginPage);
    }
    
    this.logs=[];
    if(localStorage.getItem("logs") === null){
        //donoting;
    }
    else{
      this.logs = JSON.parse(localStorage.getItem("logs")).reverse();
    }
  }

//Pushes selected log object to status page.
  logSelected(log){
    this.navCtrl.push(StatusPage ,{
      log
    });
  }

//clears the logs local storage.
  clearLog(){ 
    if(localStorage.removeItem("logs") ===null){
      //dothing
    }
    else{
      localStorage.removeItem("logs");  
    }     
    this.navCtrl.setRoot(HomePage);    
  }

}

