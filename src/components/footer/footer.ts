import { Component, EventEmitter,Injectable } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Platform, LoadingController, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { SharedService } from '../../providers/services/sharedServices';
//import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { TeamDefaultPage } from '../../pages/team-default/team-default';
import { ToastService } from '../../providers/services/toast';
import * as lodash from 'lodash';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
//@Injectable()
export class FooterComponent {

  text: string;
  //leagueDetails: any = localStorage.getItem('leagues') ? JSON.parse(localStorage.getItem('leagues')) : "";
  leagueDetails: any;
  league: any="League";
  teamsList:any;
  teamlist: any;
  team: any = "Team";
  playersList:any;
  currentPage:any;
  openTeam:any = false;
  loading;
  leagues;
  teams;
  players;
  playersNewList;
  jerseyList;
  playerListCount: number = 0;
  activeTeam: any;
  tabname: any;
  activeTabnameNew: any;
  //leagueDetails = localStorage.getItem('leagueDetails');
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private service: ServicesProvider,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    public menuCtrl: MenuController,
    private dbProvider: DatabaseProvider,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
  ) {
    // console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
    this.activeTabnameNew = localStorage.getItem('activeTabName');

   // let view = this.navCtrl.getActive();
  }

  ngOnInit() {
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.tabname = localStorage.getItem('activeTabName');
      this.currentPage = this.navCtrl.getActive().name;
      if(JSON.parse(localStorage.getItem('leagues')) && typeof JSON.parse(localStorage.getItem('leagues')) == "object"){
        this.leagueDetails = JSON.parse(localStorage.getItem('leagues'));
        this.league = localStorage.getItem('activeLeague');
        if(this.league) {
          this.getTeamByLeagueId(this.league);
        }

        if( localStorage.getItem('activeTeam') ){
          this.team = localStorage.getItem('activeTeam');
          this.getTeamByLeagueId(this.league);
        }

        // if( localStorage.getItem('activeTeamId') ){
        //   this.team = localStorage.getItem('activeTeamId');
        //   this.getTeamByLeagueId(this.league);
        // }

      }
    }, 1000);

    this._SharedService.initialLoadData.subscribe(
      (data) => {
        this.leagueDetails = data.data;
        localStorage.setItem('leagues', JSON.stringify(this.leagueDetails));
        // this.dbProvider.selectLeagues().then((data)=>{
        //   console.log("selectLeagues data ---- > ", data);
        // })
      });

    this._SharedService.refreshTeams.subscribe(
      (data) => {
        // console.log("refreshTeams ::: ", data);
        this.teamsList = data;
      });

    this._SharedService.refreshLeagues.subscribe(
      () => {
        if(JSON.parse(localStorage.getItem('leagues')) && typeof JSON.parse(localStorage.getItem('leagues')) == "object"){
          this.leagueDetails = JSON.parse(localStorage.getItem('leagues'));

          this.league = localStorage.getItem('activeLeague');
          if(this.league) {
            this.getTeamByLeagueId(this.league);
            // alert("1");
            // this.loadNewTeams(this.league);
          }

          if( localStorage.getItem('activeTeam') ){
            this.team = localStorage.getItem('activeTeam');
            this.getTeamByLeagueId(this.league);
            // alert("2");
            // this.loadNewTeams(this.league);
          }
        }
      });

      this._SharedService.refreshDefaultTeams.subscribe(
        (teamId) => {
          this.league = 1;
          this.team = teamId;
          var leagueId = null;
          this.dbProvider.selectTeams(leagueId , teamId).then((response)=>{
            localStorage.setItem('activeTeamDetails', JSON.stringify(response));
            this.clickGo('e');
          });
        });

    this._SharedService.refreshFooterForLineup.subscribe(
      (data) => {
        // console.log("resfreshfooter",data);
        this.league = data.leagueId;
        this.team = data.teamId;
      });

    this._SharedService.setOpenTeam.subscribe(
      (data) => {
        // console.log('open team fired')
        if(data == 'false'){
          this.openTeam = false;
          // console.log('this.openTeam',this.openTeam)
        }
      })
  }

  presentPage() {
    // let modal = this.modalCtrl.create('TeamAddPage');
    // modal.present();

    if(!this.openTeam){
      this.openTeam = true;
    this._SharedService.showModal.emit("TeamAddPage");
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Make Your Team',
      message: 'You have to select a team from drop down to proceed.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log("Clicked OK Button.");
          }
        }
      ]
    });
    alert.present();
  }

  onChange(evt) {
    console.log(evt, "wwww");
  }

  leagueSelected() {
    localStorage.setItem('activeLeague', this.league);
    this.getTeamByLeagueId(this.league);
  }

  teamSelected(team){
    let prev_team = localStorage.getItem('activeTeam');
    if(prev_team)
      localStorage.setItem('prev_team', prev_team);

    this.team = team;
    localStorage.setItem('activeTeam', team);
    this.getTeamByTeamId(team);
  }

  getTeamByLeagueId(leagueId = null) {
    this.dbProvider.selectLeagues(leagueId).then((response)=>{
      localStorage.setItem('activeLeagueDetails', JSON.stringify(response));
    })

    this.dbProvider.selectTeams(leagueId).then((response)=>{
      this.teamsList = response;
      if(this.teamsList.length <= 0){
        this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
        this.loading.present();
        this.dbProvider.deleteTeams(leagueId).then(()=>{
          this.retrieveTeamsByLeagueId(leagueId)
        });
        this.team = ''
        localStorage.setItem('activeTeam', this.team);
      }
      else{
        if(leagueId == 1){
        }else{
          this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
          this.loading.present();
          this.dbProvider.deleteTeams(leagueId).then(()=>{
            this.loadNewTeams(leagueId);
          });
        }
      }
    })
  }

  loadNewTeams(id) {
    this.service.getTeamById(id).subscribe(
      response => {
        this.teamlist = [];
        this.teamlist = response;
        if(this.teamlist.length > 0){
          this.dbProvider.insertTeams(this.teamlist).
            then((teamid) => {
              this.dbProvider.selectTeams(this.teamlist[0]['league_id'], '').
              then((teamsList) => {
                this.teamsList = teamsList;
                console.log(this.teamsList);
                this.loading.dismissAll();
              })
              .catch((err) => {
                this.loading.dismissAll();
              })
            })
            .catch((err) => {
              this.loading.dismissAll();
            })
        }
        else {
          this.team = '';
          this.loading.dismissAll();
        }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }

  getTeamByTeamId(teamId) {
    var leagueId = null;
    this.dbProvider.selectTeams(leagueId , teamId).then((response)=>{
      localStorage.setItem('activeTeamDetails', JSON.stringify(response));
    });
  }

  clickGo(e) {
    let prev_team = localStorage.getItem('prev_team');
    let active_team = localStorage.getItem('activeTeam');

    if(active_team && prev_team && prev_team!=null && prev_team!='null' && prev_team!='' && prev_team!='undefined') {
      if(active_team != prev_team) {
        this._SharedService.clearCanvas.emit();
      }
    }

    this.playerListCount = 0;
    if (this.league && this.team && this.league != "League" && this.team != "Team") {
      if (this.team != '') {
        localStorage.removeItem('activeJersey');
        localStorage.removeItem('activeKeeper');
        localStorage.setItem('activeTabName', 'Team');

        if(localStorage.getItem('activeTeamDetails')) {
          var activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        }

        // console.log("activeTeamDetails11 =>", activeTeamDetails);
        if(activeTeamDetails && activeTeamDetails.length >0) {
          // if(activeTeamDetails[0].teamId && activeTeamDetails[0].name && activeTeamDetails[0].manager) {
          if(activeTeamDetails[0].teamId) {
            this.getTeamByTeamId(this.team);
            localStorage.setItem('activeTeamId', activeTeamDetails[0].teamId);
            this.addLineUp(activeTeamDetails[0].teamId);
            this.getPlayerbyTeamId(activeTeamDetails[0].teamId);
          } else {
            localStorage.setItem('activeTeamId', this.team);
            this.addLineUp(this.team);
            this.getPlayerbyTeamId(this.team);
          }
        } else {
          localStorage.setItem('activeTeamId', this.team);
          this.addLineUp(this.team);
          this.getPlayerbyTeamId(this.team);
        }

        this._SharedService.setEditSaveMode.emit('Save')
        //this.navCtrl.push(TeamDefaultPage, {    });
      }
      else {
        this.toastCtrl.callToast('Please select a team to move forward.');
      }
    } else {
      this.toastCtrl.callToast('Please select a league and team to move forward.');

    }
  }

  getPlayerbyTeamId(teamId){
    this.playerListCount = this.playerListCount + 1;

    this.dbProvider.selectPlayers(teamId).then((response)=>{
      this.playersList = response;
      // console.log("Players List => ", this.playersList);

      //check if team created here or from server..teamId=0 for custom team
      var activeTeamId = localStorage.getItem('activeTeamId');
      if(this.playersList.length <= 0 &&  activeTeamId != '0'){
        if(this.playerListCount > 2){
          this.playerListCount = 0;
          this.loading.dismissAll();
          this.playersList = [];
          localStorage.setItem('activePlayerDetails', JSON.stringify(this.playersList));
          this._SharedService.shareGroundImages.emit();
          this._SharedService.retrieveData.emit(this.playersList);
          this._SharedService.refreshJersey.emit();
          this.reRootPage();
        } else {
          this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
          this.loading.present();
          this.retrievePlayerbyTeamId(teamId);
        }
      } else {
        localStorage.setItem('activePlayerDetails', JSON.stringify(this.playersList));
        this._SharedService.shareGroundImages.emit();
        this._SharedService.retrieveData.emit(this.playersList);
        this._SharedService.refreshJersey.emit();
        this.reRootPage();
      }
    })
  }

  reRootPage(){
    if(this.navCtrl.getActive().name == "HomePage"){
      this.navCtrl.push(TeamDefaultPage, { });
    } else {
      this._SharedService.tabNavigation.emit("Team");
      // localStorage.setItem('activeTabName', 'Team');
      this._SharedService.retrieveData.emit("activePlayerDetails");
      this._SharedService.afterEditLineUp.emit('Team');
      // this._SharedService.clearCanvas.emit();
      localStorage.setItem('prev_team', null);
    }
  }

  openMenu() {
    this.menuCtrl.open();
  }

  retrieveTeamsByLeagueId(id){
    this.service.getTeamById(id).subscribe(
      response => {
        this.teamlist = [];
        this.teamsList = [];
        this.teamlist = response;
        console.log(this.teamlist);
        if(this.teamlist.length > 0){

          if( localStorage.getItem('activeTeam') ){
            this.team = localStorage.getItem('activeTeam');
          }

          this.dbProvider.insertTeams(this.teamlist).
            then((teamid) => {
              this.dbProvider.selectTeams(this.teamlist[0]['league_id'], '').
              then((teamsList) => {
                this.teamsList = teamsList;
                this.loading.dismissAll();
              })
              .catch((err) => {
                this.loading.dismissAll();
              })
            })
            .catch((err) => {
              this.loading.dismissAll();
            })
        } else {
          this.team = '';
          this.loading.dismissAll();
        }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }

  retrievePlayerbyTeamId(id) {
    let emitData: any;
    this.service.getPlayerbyTeamId(id).subscribe(
      response => {
        this.playersNewList = response;
        if(this.playersNewList.length){
            this.dbProvider.insertPlayers(this.playersNewList).
            then((player) => {
              // this.getPlayerbyTeamId(id);
              this.getJerseysByTeamId(id);
                // this.loading.dismissAll();
                // this.reRootPage();
            })
            .catch((err) => {
              this.loading.dismissAll();
            })
          // });

        }else {
          localStorage.setItem('activePlayerDetails', JSON.stringify(this.playersNewList));
          this._SharedService.retrieveData.emit(this.playersNewList);
          this._SharedService.refreshPlayers.emit(this.playersNewList);
          // this.loading.dismissAll();
          this.getJerseysByTeamId(id);
        }
      }),
      (error) => {
        this.loading.dismissAll();
        throw error;
      };
  }

  getJerseysByTeamId(teamId) {
    this.service.getJerseysByTeamId(teamId).subscribe(
      response => {
        this.jerseyList = response;
        if(this.jerseyList.length > 0){
          this.dbProvider.insertJersey(this.jerseyList).
          then((player) => {
            this.getPlayerbyTeamId(teamId);
            this.loading.dismissAll();
            // this.addLineUp(teamId);
          })
          .catch((err) => {
            this.loading.dismissAll();
          })

        }else {
          this.getPlayerbyTeamId(teamId);
          this.loading.dismissAll();
          // this.addLineUp(teamId);
        }
      }),
      (error) => {
        this.loading.dismissAll();
        throw error;
      };
  }

  addLineUp(teamId) {
    let lineUpArray: any = [];
    let LineUpName = 'Team';
    this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));

    lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': this.activeTeam[0].id, 'team': this.activeTeam[0].name, 'logo': this.activeTeam[0].teamLogo, 'teamName':  LineUpName});

    this.dbProvider.insertLineUp(lineUpArray)
      .then((lineupId) => {
        // this.loading.dismissAll();
        this._SharedService.updateMenu.emit('update menu');
        // this.getPlayerbyTeamId(teamId);
    });
  }
}
