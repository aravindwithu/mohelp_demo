/*
  Created by Aravind for Mohelp demo,
  To support home page functionalities.
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { LogsPage } from '../logs/logs';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories:any[];
  logs:any[];
  usersession:any;

//constructor - here categories list is created with hard codded values, just for demo porpose. Checks for user session to validate login.
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { 
    this.usersession=null;
    if (localStorage.getItem("userSession") === null) {
      console.log("not logged in");
       this.navCtrl.setRoot(LoginPage);
    }   
    else{
      this.usersession = JSON.parse(window.localStorage.getItem("userSession"));
      console.log("in else "+this.usersession.name);
    } 
    this.categories=[];
    this.categories.push(
    {text:'Plumbing'
    });
    this.categories.push(
    {text:'Electric'
    });
    this.categories.push(
    {text:'Roofing'
    });
    this.categories.push(
    {text:'Landscape'
    });
    this.categories.push(
    {text:'Interior'
    });

    window.localStorage.setItem('category', JSON.stringify(this.categories));
  }


//to store selected category in the local storage for further use.
  categorySelected(category) {  
    this.usersession = JSON.parse(window.localStorage.getItem("userSession"));  
    this.logs=[];
    let prompt = this.alertCtrl.create({
      title: "You have selected " + category.text,
      subTitle: "Local Contractors have been notified, get current status in logs.",
      buttons: [
         {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
            console.log(this.usersession.name);
            if(localStorage.getItem("logs")===null){
              this.logs.push(
              {
                id:1,
                text:category.text,
                createdby: this.usersession.name,
                createdon: Date(),                
                status:"Intialized"
              });
              localStorage.setItem("logs", JSON.stringify(this.logs));
            }
            else{
              this.logs = JSON.parse(localStorage.getItem("logs"));          
              
              this.logs.push(
              {
                id: this.logs[(this.logs.length)-1].id +1,
                text:category.text,
                createdon: Date(),
                createdby: this.usersession.name,
                status:"Intialized"
              });
              localStorage.setItem("logs", JSON.stringify(this.logs));
            }

            this.navCtrl.push(LogsPage);
           
          }
        }
      ]
    });
    prompt.present();

  }

}
