import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
//import * as $ from 'jquery';

// declare var $: any;
// declare var jQuery: any;

/**
 * Generated class for the JerseyDefaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jersey-default',
  templateUrl: 'jersey-default.html',
})
export class JerseyDefaultPage {
  jerseys:any;
  demoJersey = false;
  constructor(
    public navCtrl: NavController ,
     public modalCtrl: ModalController,
     public navParams: NavParams,
     private dbProvider: DatabaseProvider) {
  }
   ngOnInit(){
    this.getAllJesreys()
 }
 getAllJesreys() {
   this.dbProvider.selectGrounds().
   then((jerseysArr)=>{
    this.jerseys = jerseysArr;
    console.log('jerseysArr',this.jerseys)
    })
 }

//  //old slider
//   getJerseys() {
//     this.service.getJerseys().subscribe(
//       response => {
//           this.jerseys = response;
//           console.log("jerseys --- ",this.jerseys);
//           setTimeout(()=>{    //<<<---    using ()=> syntax
//             this.demoJersey = true;
//           }, 3000);
          
//           //$(".jersey-demo").hide();
//       });
      
//   }




  presentPage() {
    let modal = this.modalCtrl.create('JerseyAddPage');
    modal.present();
  }

}
