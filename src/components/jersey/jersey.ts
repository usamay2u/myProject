import { Component } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';
import { SharedService } from '../../providers/services/sharedServices';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../providers/services/toast';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the JerseyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jersey',
  templateUrl: 'jersey.html'
})
export class JerseyComponent {

  jerseys;
  selectedJersey = localStorage.getItem('activeJersey') ? localStorage.getItem('activeJersey') : '';
  goalKeeperImg  = localStorage.getItem('goalKeeperImg') ? localStorage.getItem('goalKeeperImg') : '';
  activePlayerDetails: any;
  playersList: any;
  constructor(private service: ServicesProvider,
    private dbProvider: DatabaseProvider,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    private ga: GoogleAnalytics
  ) {
    this.ga.trackView('Jersey Page');

    this._SharedService.loadJerseyPage.emit();
    this.getJerseys();

    if (JSON.parse(localStorage.getItem('activePlayerDetails')) && JSON.parse(localStorage.getItem('activePlayerDetails')).length > 0 && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
      // console.log("GroundComponent activePlayerDetails ---", JSON.parse(localStorage.getItem('activePlayerDetails')));
      this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
      //assign the current player jersey
      if (localStorage.getItem('activeJersey') == null) {
        if(this.activePlayerDetails) {
          for (let i = 0; i <= this.activePlayerDetails.length; i++) {
            if (this.activePlayerDetails[i].isGoalkeeper == 1) {
              //this.goalKeeperImg = this.activePlayerDetails[i].goalKeeperImg
              // console.log('goalKeeperImg', this.goalKeeperImg)
            }
            else if (this.activePlayerDetails[i].isGoalkeeper != 1) {
              //this.selectedJersey = this.activePlayerDetails[i].playerImg
              // console.log('selectedJersey', this.selectedJersey)
              break
            }
          }
          this.setJersey();
        }
      }
    } else {
      this.setJersey();
    }
  }

  ngOnInit(){
    this._SharedService.refreshJersey.subscribe(
      (data) => {
        console.log("EMIT JERSEY ");
        this.getJerseys();
      });  
  }
  getJerseys() {
    this.dbProvider.selectJersey().
      then((jerseyArr) => {
        this.jerseys = jerseyArr;
      })
      .catch((err) => {console.log(err);
      });
  }
  presentPage() {
    // let modal = this.modalCtrl.create('TeamAddPage');
    // modal.present();
    this._SharedService.showModal.emit("JerseyAddPage");
  }
  changeJersey(e) {
    // console.log("Here", e);
    this.selectedJersey = e.image
    this.goalKeeperImg = e.goalKeeper
    // console.log("setItem - activeJersey2 - ");
    localStorage.setItem('activeJersey', this.selectedJersey);
    localStorage.setItem('activeKeeper', this.goalKeeperImg);
    this._SharedService.selectJersey.emit(localStorage.getItem('activeJersey'));

  }
  setJersey(){
    if(this.activePlayerDetails) {
      if(this.activePlayerDetails.length > 0){
        var activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        var curJersry = activeTeamDetails[0].jerseyId;
        let jerseyArr:any;
        this.dbProvider.selectJersey().
          then((res) => {
            // console.log("SET DEFAULT JERSEY ::: ", res);
            jerseyArr = res;
            for (let i = 0; i < jerseyArr.length; i++) {
              var curJersry = activeTeamDetails[0].jerseyId;
              if(curJersry == jerseyArr[i].id){
                this.selectedJersey = jerseyArr[i].image;
                this.goalKeeperImg = jerseyArr[i].goalKeeper;
                // console.log("SET PLYR JERSEY ::: ", this.selectedJersey);
                // console.log("SET GK JERSEY ::: ", this.goalKeeperImg);
              }
            }  

            localStorage.setItem('activeJersey', this.selectedJersey);
            localStorage.setItem('activeKeeper', this.goalKeeperImg);

            this.selectedJersey = localStorage.getItem('activeJersey')
            this.goalKeeperImg = localStorage.getItem('activeKeeper')
            this._SharedService.selectJersey.emit(localStorage.getItem('activeJersey'));

            this.playersList = localStorage.getItem('activePlayerDetails')
            this._SharedService.retrieveData.emit(this.playersList);
        })
      }
    }
  }
}
