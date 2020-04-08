import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
})
export class FooterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    alert("here");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooterPage');
  }
  onLeagueClick(){
   /* this.service.getLeague().subscribe(response=>{
      console.log(response.json());
    })
  }
  onTeamClick(){
   /* this.service.getTeam().subscribe(response=>{
      console.log(response.json());
    })*/
    
  }
  
  onGoClick(){
    console.log('Go clicked');
  }
}
