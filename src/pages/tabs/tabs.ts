/*
  Created by Aravind for Mohelp demo,
  To support tabs page functionalities.
*/

import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { LogsPage } from '../logs/logs';
import { LogoutPage } from '../logout/logout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
// modified to accomudate logspage and logout page.
  tab1Root = HomePage;  
  tab2Root = LogsPage;
  tab3Root = LogoutPage;

  constructor() {

  } 

}
