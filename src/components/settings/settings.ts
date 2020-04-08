import { Component } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';
import { SharedService } from '../../providers/services/sharedServices';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})


export class SettingsComponent {
  noPlayers;
  //formation;
  opponent;
  showManager:boolean =true
  showSubstitute:boolean = true
  numberPlayersList:any;
  numberPlayersListNew:any;
  opponentList:any;
  formationList:any;
  activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
  activeTeamName = "";
  playerCount:any = 0;
  formation:any = "0";
  showSubstituteVal: any;
  showManagerVal: any;
  opponentName
  lineupName
  constructor(
    private dbProvider: DatabaseProvider,
    public _SharedService: SharedService,
    private ga: GoogleAnalytics
   ) {
      this.ga.trackView('Settings Page');
  }
  ngOnInit() {
    this.playerCount = localStorage.getItem('playerCount') ? localStorage.getItem('playerCount') : 0;
    this.formation = localStorage.getItem('formation') ? localStorage.getItem('formation') : "0";

    this.showSubstituteVal = localStorage.getItem('showSubstitute');
    if(this.showSubstituteVal == "true" || this.showSubstituteVal == true)
      this.showSubstitute = true;
    else
      this.showSubstitute = false;
      
    this.showManagerVal = localStorage.getItem('showManager');
    if(this.showManagerVal == "true" || this.showManagerVal == true)
      this.showManager = true;
    else
      this.showManager = false;
    
    if(this.activeTeamDetails){
      this.activeTeamName = this.activeTeamDetails[0].name;
    }
    
    this.getData();
  }
  
  getData(){
    //get the formation table
    this.dbProvider.selectFormation().
    then((formationArr)=>{
     this.formationList = formationArr;
     })
     //get the number of players table
     this.dbProvider.selectSettingsPlayer().
     then((settingsArr)=>{
      this.numberPlayersList = settingsArr;
      })
      this.dbProvider.selectOpponentTeams(localStorage.getItem('activeTeam')).
      then((opponentArr)=>{
       this.opponentList = opponentArr;
       }) 

    this.numberPlayersListNew =  [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]  

  }
  numberPlayerSelected(e){
    this.playerCount = e;
   e ? localStorage.setItem('playerCount', e) : localStorage.setItem('playerCount', '11' );
   this._SharedService.changePlayerCount.emit('changed')
  }
  formationSelected(e){
    this.formation = e;
    localStorage.setItem('formation', e);
    this._SharedService.changeFormation.emit('changed')
  }
  opponentSelected(e){
    localStorage.setItem('opponent', e);
  }
   
  onShowMananger(){
    this.showManager = !this.showManager
    localStorage.setItem('showManager', JSON.stringify(this.showManager));
    this._SharedService.setManager.emit(this.showManager);
   
  }
  onShowSubstitute(){
    this.showSubstitute = !this.showSubstitute
    localStorage.setItem('showSubstitute', JSON.stringify(this.showSubstitute)); 
    this._SharedService.setSubstitute.emit(this.showSubstitute);
  }

  settingsTyping(){
    this.lineupName ? localStorage.setItem('LineUpName', this.lineupName ) : localStorage.setItem('LineUpName', 'LineUpName' );
    this.opponentName ? localStorage.setItem('opponentName', this.opponentName ) : localStorage.setItem('opponentName', 'Opponent Name' ) ;
  }
}
