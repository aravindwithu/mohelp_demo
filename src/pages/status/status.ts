/*
  Created by Aravind for Mohelp demo,
  To support status page functionalities.
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  log:any;

// constructor - Gets the respective selected log object from logs page. Checks for user session to validate login.
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.getItem("userSession") === null) {
      console.log("not logged in");
      this.navCtrl.setRoot(LoginPage);
    }
    this.log = navParams.get('log');
    console.log(this.log);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

//deletes the current log from logs local storage.
  deleteLog(){
    var logs:any[];
    logs=[]; 
    logs = JSON.parse(localStorage.getItem("logs"));

    var index:number = -1;
    for(var i = 0; i < logs.length; i++) {
        if (logs[i].id === this.log.id) {
            index = i;
            break;
        }
    }   
    
    console.log("index is "+ index); 
    if((logs.length-1) == 0){
      localStorage.removeItem("logs");
      console.log("logs removed"); 
    }   
    else if (index > -1) {
      logs.splice(index, 1);
      console.log("logs index spliced");
      localStorage.setItem("logs", JSON.stringify(logs));
    }
    this.log = {};       
    this.navCtrl.pop();   
    window.location.reload(true);
  } 

}
