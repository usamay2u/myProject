import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the GroundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ground',
  templateUrl: 'ground.html',
})
export class GroundPage {
  private grounds:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private service:ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundPage');
  }
  ionViewWillEnter() {
    // console.log('this.leagues')
    this.getGrounds();
  }

  getGrounds() {
    this.service.getGround().subscribe(
      response => {
          this.grounds = response;
          // console.log("Ground Images => ", this.grounds)
          // this.createLeagueTable(response);
      });
    
  }

}
