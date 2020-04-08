import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, Select } from 'ionic-angular';
import { ToolsPage } from '../tools/tools';
import { DomSanitizer } from '@angular/platform-browser';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { JerseyDefaultPage } from '../jersey-default/jersey-default';
import { SettingsPage } from '../settings/settings';
import { GroundPage } from '../ground/ground';
import { TeamDefaultPage } from '../team-default/team-default';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ServicesProvider } from '../../providers/services/services';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../providers/services/toast';
import * as $ from 'jquery';

//import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("selectLeague") selectLeagueElement: ElementRef;
  private players: any=[];
  leagues:any;
  teams:any;
  content: any;
  loader: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private service:ServicesProvider,
   private dbProvider: DatabaseProvider, public loadingController: LoadingController, private sanitizer: DomSanitizer,
   private ga: GoogleAnalytics, public toastCtrl: ToastService,
  ) {
    let activeTabname = localStorage.getItem('activeTabName');


    if (activeTabname != null && activeTabname !='' && typeof(activeTabname) != 'undefined')
      this.ga.trackView('About Page');

      // this.loader = this.loadingController.create({ content: "Loading data, please wait..." });
      // this.loader.present();
      this.service.getContent().subscribe(
        response => {
          this.content = response[0]['content'];
          this.content = sanitizer.bypassSecurityTrustHtml(this.content);
          // this.loader.dismissAll();
      }),
      (error) => {
        // this.loader.dismissAll();
      };
  }

  ngAfterViewInit(){
    let openSelectLeague = this.navParams.get('openSelectLeague');
    if(openSelectLeague){
      this.toastCtrl.callToast('Successfully Updated/Deleted');
    }
  }

  ngOnInit(){
  }

  pushPage(e){
    // Team')" >Team</button>
    // <button ion-button (click)="pushPage('Jersey')" >Jersey</button>
    // <button ion-button (click)="pushPage('Ground')" >Ground</button>
    // <button ion-button (click)="pushPage('Tools')" >Tools</button>
    // <button ion-button (click)="pushPage('Settings')" >Settings</button>
    // <button ion-button (click)="pushPage('Save')" >Save</button>
    if(e == "Team"){
      this.navCtrl.push(TeamDefaultPage, {    });
    } else if(e == "Jersey"){
      this.navCtrl.push(JerseyDefaultPage, {    });
    } else if(e == "Ground"){
      this.navCtrl.push(GroundPage, {    });
    } else if(e == "Tools"){
      this.navCtrl.push(ToolsPage, {    });
    } else if(e == "Settings"){
      this.navCtrl.push(SettingsPage, {    });
    } else {
      this.navCtrl.push(ToolsPage, {    });
    }

    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.

  }
  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    console.log('this.leagues')

  }
}

