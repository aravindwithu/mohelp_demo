/*
  Created by Aravind for Mohelp demo,
  To support login page functionalities.
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ResetpwdPage} from '../resetpwd/resetpwd';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;

// constructor - here default user data is created for login authentication demo. Checks for user session to validate login.
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
     var userData:any = {
        name: 'admin',
        email: 'avenkit2@binghamton.edu',
        password: '12345'
      };

      localStorage.setItem("userData", JSON.stringify(userData));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

//main login functionality which checks for valid authentication and creates user session.
  login(){
    var userData = JSON.parse( localStorage.getItem( 'userData' ));
    if(userData.name == this.username && userData.password == this.password){
      console.log("in if");
      var userSession = {
        name: userData.name,
        password: userData.password,
      };
      localStorage.setItem('userSession', JSON.stringify(userSession));
      console.log('login sucess');
      this.navCtrl.setRoot(HomePage);
    }
    else{
      let prompt = this.alertCtrl.create({
      title: "Incorrect User Name and Password!.",
      buttons: [
         {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    prompt.present();
    }
  }

//pushnav to reset the password.
  resetPwd(){
    this.navCtrl.push(ResetpwdPage);
  }

}
