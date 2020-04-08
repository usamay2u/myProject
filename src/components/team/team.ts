import { Component , Input } from '@angular/core';
import { SharedService } from '../../providers/services/sharedServices';
import { AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../providers/services/toast';
/**
 * Generated class for the TeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'team',
  templateUrl: 'team.html'
})
export class TeamComponent {
  activephoto : any
  goalKeeperPhoto:any
  activeTeamDetails: any;
  activePlayerDetails: any;
  teamLogo: string;
  managerImage: string;
  teamName: string;
  openPlayer:any = false;
  removePlayer = false;
  activeTab ='';
  selectedPlayer:any
  constructor(
    public _SharedService: SharedService,
    private alertCtrl: AlertController,
    public toastCtrl: ToastService,
    private dbProvider: DatabaseProvider  ) {
      this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
      this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
      this.teamLogo      = this.activeTeamDetails[0].teamLogo;
      this.managerImage  = this.activeTeamDetails[0].managerImage;
      this.teamName = this.activeTeamDetails[0].name;
      localStorage.setItem('activeTempPlayerDetails',this.activePlayerDetails)
      this._SharedService.selectPlayerIcon.emit('oldData');
      this._SharedService.substituteMode.subscribe(
        (resetVal) => {
          this.activeTab = resetVal;
        });

      this._SharedService.refreshTeamLogo.subscribe( ()=> {
        this.teamLogo = '';
        this.teamName = '';
      });
    }
  ngOnInit(){

    this._SharedService.setOpenPage.subscribe(
      (data) => {
        // console.log('open page fired')
        if(data == 'false'){
          this.openPlayer = false
          // console.log('this.openPlayer',this.openPlayer)
        }
      })
  }
  presentPage() {
    // let modal = this.modalCtrl.create('TeamAddPage');
    // modal.present();
    if(!this.openPlayer){
      this.openPlayer = true
    this._SharedService.showModal.emit("PlayerAddPage");
    }
  }
  changePlayer(e) {
    if(!this.removePlayer){
    this.activeTab = e.id;
    this.selectedPlayer = e
    if(!this.selectedPlayer.isGoalkeeper || this.selectedPlayer.isGoalkeeper == "false"){
        this._SharedService.selectPlayerForSwap.emit(this.selectedPlayer);
    }
    else{
      this._SharedService.selectGoaliForSwap.emit(this.selectedPlayer);
    }
  }
  }
  //show delete button when clicking player
  onPlayerClick() {
    this.removePlayer = (this.removePlayer == true) ? false : true;
  }
  /// event fired to remove item from ground
  onRemoveFromGround(player) {
    let goalKeeperArray:any=[];
    let deleteGoali= false
    if (player && player.isGoalkeeper == 'true' && player.isGoalkeeper == 1) {
      goalKeeperArray =  JSON.parse(localStorage.getItem('goalKeeperWithFace'))
    if (goalKeeperArray.length <= 1) {
      deleteGoali = true
      }
    }
      if(!deleteGoali){
    this.presentConfirm('Do you want to delete this player permanently ?', player)
      }
  }
  presentConfirm(msg, player) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.cancelDeletePlayer()
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.onDeletePlayer(player)
          }
        }
      ]
    });
    alert.present();
  }

  cancelDeletePlayer() {
    this.removePlayer = false;
  }
  onDeletePlayer(player) {
    // console.log('Delete clicked');

    this.removePlayer = false;

   this.dbProvider.deletePlayer(player.id)
      .then((res) => {
           this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then((response) => {
            // console.log("selectplayers data ---- > ", response);
            let playerList = response
            localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
            this._SharedService.refreshPlayers.emit(JSON.parse(localStorage.getItem('activePlayerDetails')));
            this._SharedService.retrieveData.emit("activePlayerDetails");
            this.toastCtrl.callToast('Player deleted successfully.');
          });

      })
    }
}
