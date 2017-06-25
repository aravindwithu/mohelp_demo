/*
  Created by Aravind for Mohelp demo,
  To support reset password page functionalities.
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {
  newpwd:string;
  repwd:string;

  // constructor - inializes the newpwd and repwd string empty for future validation.
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
    this.newpwd = "";
    this.repwd = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

//Updates the password with default admin username in user data.
  updatePwd(){
    if(this.newpwd != "" && this.repwd != "" && this.newpwd == this.repwd){
      console.log(this.newpwd);
      var userData:any = {
        name: 'admin',
        email: 'avenkit2@binghamton.edu',
        password: this.newpwd
      };
        
      if(localStorage.removeItem("userData") === null){
        //donothing
      }
      else{
        localStorage.removeItem("userData");
      }      
      localStorage.setItem("userData",JSON.stringify(userData));
      let prompt = this.alertCtrl.create({
      title: "Password reseted succesfully.",
      buttons: [
          {
            text: 'Ok',
            handler: data => {
              this.navCtrl.pop();
            }
          }
        ]
      });
      prompt.present();
    }
    else{
      let prompt = this.alertCtrl.create({
      title: "New password and retyped Password doesnot match!.",
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

}
