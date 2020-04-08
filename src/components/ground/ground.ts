import { Component, enableProdMode, ElementRef, Renderer, ViewChild } from '@angular/core';
import { animate } from '@angular/animations';
import { NavController, NavParams, DomController, AlertController } from 'ionic-angular';
import { SharedService } from '../../providers/services/sharedServices';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../providers/services/toast';
import { Select } from 'ionic-angular';
/**
 * Generated class for the GroundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var jquery: any
declare var $: any

@Component({
  selector: 'ground',
  templateUrl: 'ground.html'
})
export class GroundComponent {
  @ViewChild('swapOrSubstitute') select1: Select;
  @ViewChild('swapOrSubstituteGoalKeeper') select2: Select;
  tempPlayerDetails: any = [];
  activePlayerWithFace: any = [];
  activePlayerDetails: any = [];
  substitutePlayerDetails: any = [];
  substituteWithActivePlayer: any = [];
  substituteWithFace: any = [];
  goalKeeperArray: any = [];
  goalKeeperWithFace: any = [];
  formationArray: any = [];
  activeTeam;
  managerLogo;
  managerName;
  teamLogo;
  teamName;
  activeTab ='';
  showSubstitute = true;
  showManager = true;
  swapEnabled = false;
  swapSubComponent = false;
  removePlayer = false;
  substituteClicked = false;
  jerseyTabSelected = false;
  editLineUp = false;
  substituteExist = false;
  lineupId = '';
  playerAddedToGround: any = []
  playerAddedToSubstitute = null
  substituteAddedToGround: any = []
  playerCount:any = 10
  groundPlayerCount:any =  10;
  showSubstituteVal: any;
  showManagerVal: any;
  device_width: any;
  device_length: any;
  goali_width: any;
  goali_heigth: any;
  ball_width: any;
  ball_height: any;
  activeTabName;
  showBall: boolean = false;
  substitute_goalkeeper: any;
  playerToBeSwapped: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dbProvider: DatabaseProvider,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    private alertCtrl: AlertController,
    public element: ElementRef, public renderer: Renderer, public domCtrl: DomController
  ) {
      localStorage.setItem("showBall", 'false');

      this.device_width = localStorage.getItem('device_width');
      this.device_length = localStorage.getItem('device_length');

      this.goali_width = (160 * this.device_width) / 360 ;
      this.goali_heigth = (355 * this.device_length) / 616 ;

      this.ball_width = (175 * this.device_width) / 360 ;
      this.ball_height = (235 * this.device_length) / 616 ;
    }

  enableProdMode() { }
  ngOnInit() {
    this._SharedService.toolsManagement.subscribe(
      (data) => {
        let football =  localStorage.getItem("showBall");
        if(football && football != null && football != '') {
          if(football == 'true')
            this.showBall = true;
          else
            this.showBall = false;
        } else {
          this.showBall = true;
        }
      }
    );

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

    this.activeTabName = localStorage.getItem('activeTabName');

    setInterval(()=>{
      var tempCount = parseInt(localStorage.getItem('playerCount'));
      //console.log('groundPlayerCount ', this.groundPlayerCount, this.activePlayerDetails, tempCount);
      this.groundPlayerCount =  tempCount ? (tempCount - 1) : 10;
      //console.log('groundPlayerCountAfter ', this.groundPlayerCount );
    },1000)

    // console.log('Hello GroundComponent Component');
    //set default formation as 4-4-2
    localStorage.setItem('formation', '1');
    //get active players
    if (JSON.parse(localStorage.getItem('activePlayerDetails')) && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
      // console.log("GroundComponent activePlayerDetails ---", JSON.parse(localStorage.getItem('activePlayerDetails')));
      this.setPlayerSubstiteArray()
      // console.log("tempPlayerDetails", this.tempPlayerDetails, "substitutePlayerDetails", this.substitutePlayerDetails);
      this.setActiveTeamData()
    }
    // console.log("12. retrieveData");
    //set manager
    this._SharedService.setManager.subscribe(
      (responceType) => {
        // console.log('setManager', responceType)
        this.showManager = responceType
      });
    //set substitute
    this._SharedService.setSubstitute.subscribe(
      (responceType) => {
        // console.log('showSubstitute', responceType)
        this.showSubstitute = responceType
      });
    //get players on changing the drop down and when new player added
    this._SharedService.retrieveData.subscribe(
      (responceType) => {
        // console.log("EMMIT PLAYER Ground", responceType);
        // this.substitute_goalkeeper = '';
        this.editLineUp = false
        this.lineupId = ''
        this.setPlayerSubstiteArray()
        this.setActiveTeamData()
        this._SharedService.shareGroundImages.emit();
      });
    //change top left based on formation
    this._SharedService.changeFormation.subscribe(
      (responceType) => {
        this.getCurrentFormation()
        // console.log(" formationArray", this.formationArray);
      });

    //display players after selecting jersey
    this._SharedService.selectJersey.subscribe(
      (jerseyData) => {
        this.jerseyTabSelected = true
        // console.log('before this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
        this.activePlayerDetails.forEach((playerItem) => {
          if (playerItem.isGoalkeeper != 'true' && playerItem.isGoalkeeper != 1)
              playerItem.image = localStorage.getItem('activeJersey')
          else
              playerItem.image = localStorage.getItem('activeKeeper')
          // console.log(" activeJersey", playerItem);
        });
        this.goalKeeperArray.forEach((playerItem) => {
          playerItem.image = localStorage.getItem('activeKeeper')
          // console.log(" goalkeeper", playerItem);
        });
        this.substitutePlayerDetails.forEach((playerItem) => {
           playerItem.image = localStorage.getItem('activeJersey')
          // console.log(" substitute", playerItem);
        });
        // console.log('after this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
      });

      //display jersey image instead if loaded page is jersey page
      this._SharedService.loadJerseyPage.subscribe(
        () => {
          this.activePlayerDetails.forEach((playerItem) => {
            if (playerItem.isGoalkeeper != 'true' && playerItem.isGoalkeeper != 1) {
              if(localStorage.getItem('activeJersey'))
                playerItem.image = localStorage.getItem('activeJersey');
            } else {
              if(localStorage.getItem('activeKeeper'))
                playerItem.image = localStorage.getItem('activeKeeper');
            }
          });
          this.goalKeeperArray.forEach((playerItem) => {
            if(localStorage.getItem('activeKeeper'))
              playerItem.image = localStorage.getItem('activeKeeper');
          });
          this.substitutePlayerDetails.forEach((playerItem) => {
            if(localStorage.getItem('activeJersey'))
              playerItem.image = localStorage.getItem('activeJersey');
          });
      });

    //display players withh player icon
    this._SharedService.selectPlayerIcon.subscribe(
      (jerseyData) => {
        this.jerseyTabSelected = false
        let i = 0, s = 0, g = 0;
        this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'))
        this.substituteWithFace = JSON.parse(localStorage.getItem('substituteWithFace'))
        this.goalKeeperWithFace = JSON.parse(localStorage.getItem('goalKeeperWithFace'))
        // console.log('SON parse this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
        // console.log('this.activePlayerWithFace', this.activePlayerWithFace)
        this.activePlayerDetails.forEach((playerItem) => {
          if(this.activePlayerWithFace[i] != undefined){
            playerItem.image = this.activePlayerWithFace[i].image
          }
          // console.log(" activephoto", playerItem);
          i++
        });

        this.goalKeeperArray.forEach((playerItem) => {
          playerItem.image = this.goalKeeperWithFace[g].image
          // console.log(" goalKeeperPhoto", playerItem);
        });
        this.substitutePlayerDetails.forEach((playerItem) => {
          playerItem.image = this.substituteWithFace[s].image
          // console.log("substitute", playerItem);
          s++
        });
      });

    //select players for swapping
    this._SharedService.selectPlayerForSwap.subscribe(
      (selectedPlayerData) => {
        let indexExist: any = false;
        this.substituteExist = false;
        this.activePlayerDetails.forEach((playerItem) => {
          if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
            indexExist = true
            return;
          }
          playerItem.substitutedPlayers.forEach((substitutePlayer)=>{
            if ((substitutePlayer.id == selectedPlayerData.id) || (substitutePlayer.name == selectedPlayerData.name)) {
              indexExist = true
              return;
            }
          });
        })

        if (indexExist == true) {
          this.toastCtrl.callToast('This player is already in the ground.');
         // this._SharedService.substituteMode.emit('none')
          this.swapEnabled = false
        }
        else {
          this.toastCtrl.callToast('Select a player on ground to complete the swap or add as substitute.');
          this.substitutePlayerDetails.forEach((playerItem) => {
            if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
              this.substituteExist = true
              return;
            }
          })

          this.swapEnabled = true //(this.swapEnabled == true) ? false : true;
          // console.log("this.swapEnabled", this.swapEnabled);
          this.removePlayer = false;
          this.playerAddedToGround = selectedPlayerData
          if (!this.substituteExist) {
            this.swapSubComponent = true
            //this.swapEnabled = false
          }
          // console.log("this.substituteExist", this.substituteExist);
          this.playerAddedToSubstitute = selectedPlayerData
        }
      })

      this._SharedService.selectPlayerForSwapFromSubstitute.subscribe(
        (selectedPlayerData) => {
          let indexExist: any = false;
          this.substituteExist = false;

           // this.toastCtrl.callToast('This player can be swapped with player in ground.');
            this.substitutePlayerDetails.forEach((playerItem) => {
              if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
                this.substituteExist = true
                return;
              }
              playerItem.substitutedPlayers.forEach((substitutePlayer)=>{
                if ((substitutePlayer.id == selectedPlayerData.id) || (substitutePlayer.name == selectedPlayerData.name)) {
                  indexExist = true
                  return;
                }
              });
            })


            this.swapEnabled = true //(this.swapEnabled == true) ? false : true;
            // console.log("this.swapEnabled", this.swapEnabled);
            this.removePlayer = false;
            this.playerAddedToGround = selectedPlayerData
            if (!this.substituteExist) {
              this.swapSubComponent = true
              //this.swapEnabled = false

            }
            // console.log("this.substituteExist", this.substituteExist);
            this.playerAddedToSubstitute = selectedPlayerData
    })

    //select goal keeper for swapping
    this._SharedService.selectGoaliForSwap.subscribe(
      (selectedPlayerData) => {
        let indexExist: any = false;
        this.substituteExist = false;
        this.goalKeeperArray.forEach((playerItem) => {
          if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
            indexExist = true
            return;
          }
        })

        if (indexExist == true) {
          this.toastCtrl.callToast('This goal keeper is already in the ground.');
         // this._SharedService.substituteMode.emit('none')
          this.swapEnabled = false
        }
        else {
          this.toastCtrl.callToast('This goal keeper can be swapped or add as substitute with another goal keeper.');
          this.swapEnabled = true //(this.swapEnabled == true) ? false : true;
          // console.log("this.swapEnabled", this.swapEnabled);
          this.removePlayer = false;
          this.playerAddedToGround = selectedPlayerData
          // console.log("this.substituteExist", this.substituteExist);
          if (!this.substituteExist) {
            this.swapSubComponent = true
            //this.swapEnabled = false
          }
          this.playerAddedToSubstitute = selectedPlayerData
        }
      })

    //save the lineup details to database in 2 tables(lineup+team table and lineup+playerdetails table)
    this._SharedService.saveLineUp.subscribe(
      (responceType) => {
        //edit a lineup
        // console.log(this.lineupId, 'this.lineupId');

        if (this.lineupId != '') {
          this.editCurrentLineup()
        }
        //add line up
        else {
          this.addNewLineup()
        }

      });

    //edit lineup
    this._SharedService.ediLineUp.subscribe(
      (lineupId) => {
        // console.log(" lineupId", lineupId);
        this.lineupId = lineupId
        this._SharedService.setEditSaveMode.emit('Update')
        this.selectLineUpDetails(lineupId)
      });

    //delete lineup
    this._SharedService.delLineUp.subscribe(
      (lineupId) => {
        // console.log(" lineupId", lineupId);
        this.deleteLineupDetails(lineupId)
      });

    //delete all lineups of this team
    this._SharedService.delTeam.subscribe(
      (lineArray) => {
        // console.log(" teamId", lineArray.teamId, lineArray.subArray);
        this.deleteAllLineUp(lineArray.teamId, lineArray.subArray, lineArray.team_id)
      });

    //clear team/league data
    this._SharedService.clearTeamData.subscribe(
      (lineArray) => {
        this.onDeleteAllLineUpExceptCustoms(lineArray.teamId, lineArray.subArray, lineArray.team_id)
      });

    //change player count
    this._SharedService.changePlayerCount.subscribe(
      (selectedCount) =>   {
        this.playerCount =  localStorage.getItem('playerCount')
      })
  }

  addNewLineup() {
    let i = 0, left, top
    let lineUpArray: any = [], lineUpDetailsArray: any = []

    let LineUpName = localStorage.getItem('LineUpName') ? localStorage.getItem('LineUpName') : "LineUpName";

    // console.log("activeTeam => ", this.activeTeam[0]);

    lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': this.activeTeam[0].id, 'team': this.activeTeam[0].name, 'logo': this.activeTeam[0].teamLogo, 'teamName':  LineUpName});
    // console.log("****** ---------------- *******");
    // console.log("lineUpArray => ", lineUpArray);

     this.dbProvider.insertLineUp(lineUpArray)
      .then((lineupId) => {
        this.tempPlayerDetails.forEach((playerItem) => {
          if (playerItem.isDeletedGround == "false") {
            let activePlayer = (this.element.nativeElement.querySelector('#active' + playerItem.id.toString())) ? true : false
            if (activePlayer) {
              left = this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetLeft;
              top = this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetTop;
            }
            else {
              left = top = 0;
            }
            // console.log('left', left, 'top', top)
            lineUpDetailsArray.push({ 'lineupId': lineupId, 'playerId': playerItem.id, 'name': playerItem.name, 'image': playerItem.faceImage, 'jerseyNo': playerItem.jerseyNo, 'jerseyId': playerItem.jerseyId, 'topval': top, 'leftval': left, 'mode': playerItem.mode, 'isGoalkeeper': playerItem.isGoalkeeper })
            i++
          }
        });
        // console.log('lineUpArray', lineUpDetailsArray)
        this.dbProvider.insertLineUpDetails(lineUpDetailsArray).then((res) => {
          this._SharedService.updateMenu.emit('update menu');
         })
      })
  }
  editCurrentLineup() {
    let i = 0, left, top
    let lineUpDetailsArray: any = []
    // console.log('tempArray', this.tempPlayerDetails)
    this.tempPlayerDetails.forEach((playerItem) => {

      let activePlayer = (this.element.nativeElement.querySelector('#active' + playerItem.id.toString())) ? true : false
      if (activePlayer) {
        left = this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetLeft;
        top = this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetTop;
      }
      else {
        left = top = 0;
      }
      // console.log('left', left, 'top', top)
      lineUpDetailsArray.push({ 'lineupId': this.lineupId, 'playerId': playerItem.id, 'name': playerItem.name, 'image': playerItem.faceImage, 'jerseyNo': playerItem.jerseyNo, 'jerseyId': playerItem.jerseyId, 'topval': top, 'leftval': left, 'mode': playerItem.mode, 'isGoalkeeper': playerItem.isGoalkeeper })
      i++

    })
    localStorage.setItem('lineUpDetailsArray', JSON.stringify(lineUpDetailsArray))
    this.dbProvider.deleteLineupDetails(this.lineupId)
      .then((res) => {
        this.dbProvider.insertLineUpDetails(JSON.parse(localStorage.getItem('lineUpDetailsArray'))).then((res) => {
          this._SharedService.updateMenu.emit('update menu');
        })
      })

  }

  deleteLineupDetails(lineupId) {
    this.presentConfirmLineUpDel('Do you want to delete this Line Up?', lineupId)
  }

  deleteAllLineUp(teamId, subArray, team_id) {
    this.presentConfirmLineUpAllDel('Do you want to delete all the Line Ups and data related to this team?', teamId, subArray, team_id)
  }

  clearTeamData() {
    console.log('button clicked');
    this.presentConfirmClearTeamData('This will remove your downloaded teams and will provide you latest list of Teams/Leagues. There will not be any change to the custom created teams.')
  }

  selectLineUpDetails(lineupId) {
    this.dbProvider.selectLineUpDetails(lineupId).then((res) => {
      let playerList = res;
      // localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
      this.editLineUp = true

      this.dbProvider.selectTeamsFromLineUp(lineupId).then((response) => {
        localStorage.setItem('activeTeamDetails', JSON.stringify(response));
        //Reflect this change in footer for team selction and league selection
        let currentLineUp = JSON.parse(localStorage.getItem('activeTeamDetails'));
        if (currentLineUp.length > 0) {
          var currentLeagueTeamArray = { 'leagueId': currentLineUp[0].leagueId, 'teamId': currentLineUp[0].id }
          this.managerLogo = currentLineUp[0].managerImage;
          this.managerName = currentLineUp[0].manager;
          this.teamLogo = currentLineUp[0].teamLogo;
          this.teamName = currentLineUp[0].name;
          this._SharedService.refreshFooterForLineup.emit(currentLeagueTeamArray);
          this._SharedService.afterEditLineUp.emit('Team')
          this.setPlayerSubstiteArrayOnEdit()
        }
      })
    })
  }

  setActiveTeamData() {
    this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
    // console.log('activeTeam in ground', this.activeTeam);
    if (this.activeTeam.length > 0) {
      this.managerLogo = this.activeTeam[0].managerImage;
      this.managerName = this.activeTeam[0].manager;
      this.teamLogo = this.activeTeam[0].teamLogo;
      this.teamName = this.activeTeam[0].name;
    }
  }

  setPlayerSubstiteArray() {
    this.tempPlayerDetails = [];
    this.activePlayerDetails = [];
    this.activePlayerWithFace = [];
    this.substitutePlayerDetails = [];
    this.goalKeeperArray = [];
    this.substitute_goalkeeper = [];
    this.tempPlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));

    //splitting players into 2 arrays(player and substitute)
    for (let i = 0; i < this.tempPlayerDetails.length; i++) {
      // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
      // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
      if (this.tempPlayerDetails[i].isDeletedGround == 'false'){
        // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
      if (this.tempPlayerDetails[i].isGoalkeeper != 'true' && this.tempPlayerDetails[i].isGoalkeeper != 1) {
        // console.log(this.activePlayerDetails.length, 'length')
        // console.log("-------- Active Player Details --------", this.activePlayerDetails);
        if (this.activePlayerDetails.length < 10) {
          this.tempPlayerDetails[i].mode = "active"
          this.activePlayerDetails.push(this.tempPlayerDetails[i])
        }
        else {
          // console.log("substitutes => ", this.tempPlayerDetails[i]);
          // if (this.substitutePlayerDetails.length < 5) {
          //   this.tempPlayerDetails[i].mode = "substitute"
          //   this.substitutePlayerDetails.push(this.tempPlayerDetails[i])
          // }
          // console.log("substitutePlayerDetails Length1 => ", this.substitutePlayerDetails.length);
          if (this.substitutePlayerDetails.length < 4) {
            // console.log("here");
            // console.log("tempPlayerDetails => ", this.tempPlayerDetails[i]);
            if(!this.tempPlayerDetails[i].type_of_sub){
              this.tempPlayerDetails[i].mode = "substitute";
              this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
            }
          }
          if (this.substitutePlayerDetails.length == 4) {
            const found = this.substitutePlayerDetails.some(el => el.type_of_sub === "goalkeeper");
            if(found == true) {
              this.tempPlayerDetails[i].mode = "substitute";
              this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
            }
          }
        }
        // console.log("substitute Player Details => ", this.substitutePlayerDetails);
      }
      // else {
      //   // console.log("Goal Keepers => ", this.tempPlayerDetails[i]);
      //   if (this.goalKeeperArray.length < 1)
      //     this.goalKeeperArray.push(this.tempPlayerDetails[i]);

      //   // Set last player in the substitute a goal keeper
      //   if (this.goalKeeperArray.length == 1 && (this.goalKeeperArray[0].id != this.tempPlayerDetails[i].id)) {
      //     // if (this.substitutePlayerDetails.length == 4 && this.tempPlayerDetails[i]) {
      //     if (this.substitutePlayerDetails.length < 5 && this.tempPlayerDetails[i]) {
      //       const found = this.substitutePlayerDetails.some(el => el.type_of_sub === "goalkeeper");
      //       if(found == false) {
      //         this.tempPlayerDetails[i].type_of_sub = "goalkeeper";
      //         this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
      //         this.substitute_goalkeeper = this.tempPlayerDetails[i];
      //       }
      //     }
      //   }
      // }
    }
  }

  for (let i = 0; i < this.tempPlayerDetails.length; i++) {
    // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
    // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
    if (this.tempPlayerDetails[i].isDeletedGround == 'false'){
      // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
      if (this.tempPlayerDetails[i].isGoalkeeper == 'true' || this.tempPlayerDetails[i].isGoalkeeper == 1) {
        // console.log("Goal Keepers => ", this.tempPlayerDetails[i]);
        if (this.goalKeeperArray.length < 1)
          this.goalKeeperArray.push(this.tempPlayerDetails[i]);

        // Set last player in the substitute a goal keeper
        if (this.goalKeeperArray.length == 1 && (this.goalKeeperArray[0].id != this.tempPlayerDetails[i].id)) {
          // if (this.substitutePlayerDetails.length == 4 && this.tempPlayerDetails[i]) {
          if (this.substitutePlayerDetails.length < 5 && this.tempPlayerDetails[i]) {
            const found = this.substitutePlayerDetails.some(el => el.type_of_sub === "goalkeeper");
            if(found == false) {
              this.tempPlayerDetails[i].type_of_sub = "goalkeeper";
              this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
              this.substitute_goalkeeper = this.tempPlayerDetails[i];
            }
          }
        }
      }
    }
  }

  // console.log("activePlayerDetails => ", this.activePlayerDetails);
  // console.log("substitutePlayerDetails => ", this.substitutePlayerDetails);
  // console.log("goalKeeperArray => ", this.goalKeeperArray);

    localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails))
    localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails))
    localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray))

    // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
    this.getCurrentFormation()
  }

  setPlayerSubstiteArrayOnEdit() {
    this.jerseyTabSelected = false;
    this.tempPlayerDetails = [];
    this.activePlayerDetails = [];
    this.activePlayerWithFace = [];
    this.substitutePlayerDetails = [];
    this.goalKeeperArray = [];
    var activePlayerCount = 0, substituteCount = 0
    this.tempPlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
    for (let i = 0; i < this.tempPlayerDetails.length; i++) {
      if (this.tempPlayerDetails[i].mode == 'active')
        activePlayerCount++
      else if (this.tempPlayerDetails[i].mode == 'substitute')
        substituteCount++
    }

    //splitting players into 2 arrays(player and substitute)
    for (let i = 0; i < this.tempPlayerDetails.length; i++) {
      // console.log("Temp Player Details => ", this.tempPlayerDetails[i]);
      // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
      if (this.tempPlayerDetails[i].isGoalkeeper != 'true' && this.tempPlayerDetails[i].isGoalkeeper != 1) {
        // console.log('activePlayerCount', activePlayerCount)
        if (this.activePlayerDetails.length < activePlayerCount) {
          if (this.tempPlayerDetails[i].mode == 'active')
            this.activePlayerDetails.push(this.tempPlayerDetails[i])
        }
        else {
          if (this.substitutePlayerDetails.length < substituteCount) {
            if (this.tempPlayerDetails[i].mode == 'substitute')
              this.substitutePlayerDetails.push(this.tempPlayerDetails[i])
          }
        }
      }
      else {
        if (this.goalKeeperArray.length < 1) {
        this.goalKeeperArray.push(this.tempPlayerDetails[i])
        //  console.log('this.goalKeeperArray', this.goalKeeperArray)
        }
      }
    }

    localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails))
    localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails))
    localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray))
    //this._SharedService.refreshPlayers.emit(JSON.parse(localStorage.getItem('activeTempPlayerDetails')));
    // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
  }

  getCurrentFormation() {
    this.dbProvider.selectFormationAdvanced(localStorage.getItem('formation')).
      then((response) => {
        console.log(response);
        this.formationArray = response

        // Width: 360 & Height: 616 -> based on this resolution, all other points are marked

        let i = 0;
        this.activePlayerDetails.forEach((playerItem) => {
          if(this.element.nativeElement.querySelector('#active' + playerItem.id.toString()) != null){
            this.formationArray[i].leftVal = (parseInt(this.formationArray[i].leftVal) * this.device_width) / 360 ;
            this.formationArray[i].topVal = (parseInt(this.formationArray[i].topVal) * this.device_length) / 616 ;
            this.renderer.setElementStyle(this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'left', this.formationArray[i].leftVal + 'px');
            this.renderer.setElementStyle(this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'top', this.formationArray[i].topVal + 'px');
          }
          i++
        });
      });
  }

  swapComponentSubstitute(playerToBeSwapped) {
    // console.log('Sub-Component', playerToBeSwapped)
    if (this.swapSubComponent == true) {
      ///animate it
      let player, animateSubstitue = false
      player = this.substituteAddedToGround
      animateSubstitue = true
      this.substituteClicked = false
      localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped))
      localStorage.setItem('player', JSON.stringify(player))

      if (this.substitutePlayerDetails.length <= 0) {
        // console.log('here');
        this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'))
      }

      let tempPlayerswapped = JSON.parse(localStorage.getItem('playerToBeSwapped'))
      this.substitutePlayerDetails.forEach((playerItem) => {
        // console.log("##############################");
        // console.log(playerItem.id, player.id);

        if (playerItem.id == player.id) {
          // console.log("here11");
          playerItem.image = tempPlayerswapped.image
          playerItem.jerseyNo = tempPlayerswapped.jerseyNo
          playerItem.name = tempPlayerswapped.name
          // console.log('animateSubstitue', animateSubstitue)
          if (animateSubstitue == true) {
            var elem = document.querySelector('#sub' + playerItem.id.toString());
            elem.className = 'slide-In-Both-Ways_Bottom'
            //set the class back to original after animation
            setTimeout(function () {
              elem.className = 'pulse card'
            }, 1000);
          }
          // console.log(" swapped substitute photo", playerItem);
        }
      });
      let tempPlayer = JSON.parse(localStorage.getItem('player'))
      // console.log('plYER', tempPlayerswapped, tempPlayer)
      this.tempPlayerDetails.forEach((playerItem) => {
        // console.log('playerItem.id', playerItem.id)
        if (playerItem.id == tempPlayerswapped.id) {
          playerItem.image = tempPlayer.image
          playerItem.faceImage = tempPlayer.image
          playerItem.jerseyNo = tempPlayer.jerseyNo
          playerItem.name = tempPlayer.name
        }

        if (playerItem.id == tempPlayer.id) {
          playerItem.image = tempPlayerswapped.image
          playerItem.faceImage = tempPlayerswapped.image
          playerItem.jerseyNo = tempPlayerswapped.jerseyNo
          playerItem.name = tempPlayerswapped.name
          // console.log(" swapped photo2", playerItem);
        }
      });

      var finalPlayerSwappedImage = tempPlayerswapped.image.substr(tempPlayerswapped.image.lastIndexOf('/') + 1);
      var finalPlayerAddedGroundImage = tempPlayer.image.substr(tempPlayer.image.lastIndexOf('/') + 1);

      this.dbProvider.updatePlayer({ 'id': tempPlayer.id, 'jerseyNo': tempPlayerswapped.jerseyNo, 'name': tempPlayerswapped.name, 'image': finalPlayerSwappedImage })
        .then((res) => {
          // console.log('tempPlayer.id', tempPlayer.id)
          this.dbProvider.updatePlayer({ 'id': tempPlayerswapped.id, 'jerseyNo': tempPlayer.jerseyNo, 'name': tempPlayer.name, 'image': finalPlayerAddedGroundImage })
            .then((res) => {
              // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
              localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails))
              this._SharedService.refreshPlayers.emit(this.tempPlayerDetails);
              this.swapSubComponent = false
              this.swapEnabled = false
              this.substituteExist = false
              this.playerAddedToGround = []
              this.playerAddedToSubstitute = null
              this.substituteAddedToGround = []
              this._SharedService.substituteMode.emit('none')
            })
        })
    }
  }

  //event fired on clicking the swap button
  swapThisImage(playerToBeSwapped) {
    // console.log("playerToBeSwapped => ", playerToBeSwapped);
    if (this.swapEnabled == true) {
      this.playerToBeSwapped = playerToBeSwapped;
      this.select1.open();
    }
  }

  swapOrSubstituteSelected(event){
    console.log(event);
    if(event == 'swap'){
      this.swapThePlayer(this.playerToBeSwapped);
    }else{
      this.substituteThePlayer(this.playerToBeSwapped);
    }
  }

  substituteThePlayer(playerToBeSwapped){

    let updateItem = this.tempPlayerDetails.find(this.findIndexToUpdate, playerToBeSwapped.id);
    let index = this.tempPlayerDetails.indexOf(updateItem);

    var param = {name: this.playerAddedToSubstitute.name}

    this.tempPlayerDetails[index].substitutedPlayers.push(param);

    this.dbProvider.updatePlayer({ 'id': playerToBeSwapped.id, 'substitutedPlayers': this.tempPlayerDetails[index].substitutedPlayers })
    .then((res) => {
      localStorage.setItem('activePlayerDetails', JSON.stringify(this.tempPlayerDetails))
      this._SharedService.refreshPlayers.emit(this.tempPlayerDetails);
      this.swapEnabled = false
      this.swapSubComponent = false
      this.substituteExist = false
      this.activeTab = '';
      this.playerAddedToGround = []
      this.playerAddedToSubstitute = null
      this.substituteAddedToGround = []
      this._SharedService.substituteMode.emit('none')
    });
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  swapThePlayer(playerToBeSwapped){
    ///animate it
    let player, animateSubstitue = false
    if (this.substituteClicked == true) {
      player = this.substituteAddedToGround
      animateSubstitue = true
      this.substituteClicked = false
    }
    else {
      animateSubstitue = false
      player = this.playerAddedToGround
    }

    if (player && player.isGoalkeeper != 'true' && player.isGoalkeeper != 1) {
      localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped))
      localStorage.setItem('player', JSON.stringify(player))
      if (this.activePlayerWithFace.length <= 0) {
        this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'))
      }

      if (this.substitutePlayerDetails.length <= 0) {
        // console.log('here');
        this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'))
      }

      let tempPlayerswapped = JSON.parse(localStorage.getItem('playerToBeSwapped'))
      this.substitutePlayerDetails.forEach((playerItem) => {
        if (playerItem.id == player.id) {
          playerItem.image = tempPlayerswapped.image
          playerItem.jerseyNo = tempPlayerswapped.jerseyNo
          playerItem.name = tempPlayerswapped.name
          // console.log('animateSubstitue', animateSubstitue)
          if (animateSubstitue == true) {
            var elem = document.querySelector('#sub' + playerItem.id.toString());
            elem.className = 'slide-In-Both-Ways_Bottom'
            //set the class back to original after animation
            setTimeout(function () {
              elem.className = 'pulse card'
            }, 1000);
          }
          // console.log(" swapped substitute photo", playerItem);
        }
      });

      let tempPlayer = JSON.parse(localStorage.getItem('player'));
      // console.log('plYER', tempPlayerswapped, tempPlayer)
      this.activePlayerWithFace.forEach((playerItem) => {
        // console.log('playerItem.id', playerItem.id, player)
        if (playerItem.id == tempPlayerswapped.id) {
          playerItem.image = tempPlayer.image
          playerItem.jerseyNo = tempPlayer.jerseyNo
          playerItem.name = tempPlayer.name
          // console.log(" swapped photo", playerItem);
        }
      });

      this.tempPlayerDetails.forEach((playerItem) => {
        // console.log('playerItem.id', playerItem.id)
        if (playerItem.id == tempPlayerswapped.id) {
          playerItem.image = tempPlayer.image
          playerItem.faceImage = tempPlayer.image
          playerItem.jerseyNo = tempPlayer.jerseyNo
          playerItem.name = tempPlayer.name
          var elem = document.querySelector('#active' + playerItem.id.toString());
          elem.className = 'slide-in-both-ways'
          //set the class back to original after animation
          setTimeout(function () {
            elem.className = 'pulse'
          }, 1000);

          // console.log(" swapped photo1", playerItem);
        }

        if (playerItem.id == tempPlayer.id) {
          playerItem.image = tempPlayerswapped.image
          playerItem.faceImage = tempPlayerswapped.image
          playerItem.jerseyNo = tempPlayerswapped.jerseyNo
          playerItem.name = tempPlayerswapped.name
          // console.log(" swapped photo2", playerItem);
        }
      });

      var finalPlayerSwappedImage = tempPlayerswapped.image.substr(tempPlayerswapped.image.lastIndexOf('/') + 1);
      var finalPlayerAddedGroundImage = tempPlayer.image.substr(tempPlayer.image.lastIndexOf('/') + 1);
      // console.log("finalPlayerSwappedImage => ", finalPlayerSwappedImage, finalPlayerAddedGroundImage);

      this.dbProvider.updatePlayer({ 'id': tempPlayer.id, 'jerseyNo': tempPlayerswapped.jerseyNo, 'name': tempPlayerswapped.name, 'image': finalPlayerSwappedImage })
        .then((res) => {
          // console.log('tempPlayer.id', tempPlayer.id)
          this.dbProvider.updatePlayer({ 'id': tempPlayerswapped.id, 'jerseyNo': tempPlayer.jerseyNo, 'name': tempPlayer.name, 'image': finalPlayerAddedGroundImage })
            .then((res) => {
              // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
              localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerWithFace))
              localStorage.setItem('activePlayerDetails', JSON.stringify(this.tempPlayerDetails))
              localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails))
              this._SharedService.refreshPlayers.emit(this.tempPlayerDetails);
              this.swapEnabled = false
              this.swapSubComponent = false
              this.substituteExist = false
              this.activeTab = '';
              this.playerAddedToGround = []
              this.playerAddedToSubstitute = null
              this.substituteAddedToGround = []
              this._SharedService.substituteMode.emit('none')
            })
        })
    }
    else{
      this.toastCtrl.callToast('Swap the goal keeper with another keeper.');
    }
  }

  swapOrSubstituteGoalKeeper(event){
    if(event == 'swap'){
      this.swapGoalKeeper(this.playerToBeSwapped);
    }else{
      this.substituteTheGoalKeeper(this.playerToBeSwapped);
    }
  }

  substituteTheGoalKeeper(playerToBeSwapped){
    console.log(playerToBeSwapped)
    let updateItem = this.tempPlayerDetails.find(this.findIndexToUpdate, playerToBeSwapped.id);
    let index = this.tempPlayerDetails.indexOf(updateItem);

    var param = {name: this.playerAddedToGround.name}

    this.tempPlayerDetails[index].substitutedPlayers.push(param);

    this.dbProvider.updatePlayer({ 'id': playerToBeSwapped.id, 'substitutedPlayers': this.tempPlayerDetails[index].substitutedPlayers })
    .then((res) => {
      localStorage.setItem('activePlayerDetails', JSON.stringify(this.tempPlayerDetails))
      this._SharedService.refreshPlayers.emit(this.tempPlayerDetails);
      this.swapEnabled = false
      this.swapSubComponent = false
      this.substituteExist = false
      this.activeTab = '';
      this.playerAddedToGround = []
      this.playerAddedToSubstitute = null
      this.substituteAddedToGround = []
      this._SharedService.substituteMode.emit('none')
    });
  }

  swapTheGoalKeeper(playerToBeSwapped){
    if (this.swapEnabled == true) {
      this.select2.open();
      this.playerToBeSwapped = playerToBeSwapped;
    }
  }

  swapGoalKeeper(playerToBeSwapped){
    let player, animateSubstitue = false
      /*if (this.substituteClicked == true) {
        player = this.substituteAddedToGround
        animateSubstitue = true
        this.substituteClicked = false
      }
      else {*/
        animateSubstitue = false
        player = this.playerAddedToGround;
      //}

      if(playerToBeSwapped && playerToBeSwapped.isGoalkeeper != 'true' && playerToBeSwapped.isGoalkeeper != 1) {
        this.toastCtrl.callToast('Swap the player with another player.');
      }
      else {
        if(player && player.isGoalkeeper != 'true' && player.isGoalkeeper != 1) {
          this.toastCtrl.callToast('Swap the player with another player.');
        } else {
          localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped))
          localStorage.setItem('player', JSON.stringify(player))
          if (this.goalKeeperWithFace.length <= 0) {
            this.goalKeeperWithFace = JSON.parse(localStorage.getItem('goalKeeperWithFace'))
          }

          //
          if (this.substitutePlayerDetails.length <= 0) {
            this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'))
          }
          //

          let tempPlayerswapped = JSON.parse(localStorage.getItem('playerToBeSwapped'));

          //
          this.substitutePlayerDetails.forEach((playerItem) => {
            if (playerItem.id == player.id) {
              playerItem.image = tempPlayerswapped.image
              playerItem.jerseyNo = tempPlayerswapped.jerseyNo
              playerItem.name = tempPlayerswapped.name
              if (animateSubstitue == true) {
                var elem = document.querySelector('#sub' + playerItem.id.toString());
                elem.className = 'slide-In-Both-Ways_Bottom'
                //set the class back to original after animation
                setTimeout(function () {
                  elem.className = 'pulse card'
                }, 1000);
              }
            }
          });
          //

          let tempPlayer = JSON.parse(localStorage.getItem('player'))
          // console.log('plYER', tempPlayerswapped, tempPlayer)
          this.goalKeeperWithFace.forEach((playerItem) => {
            // console.log('playerItem.id', playerItem.id, player)
            if (playerItem.id == tempPlayerswapped.id) {
              playerItem.image = tempPlayer.image
              playerItem.jerseyNo = tempPlayer.jerseyNo
              playerItem.name = tempPlayer.name
              // console.log(" swapped photo", playerItem);
            }
          });
          this.tempPlayerDetails.forEach((playerItem) => {
            // console.log('playerItem.id', playerItem.id)
            if (playerItem.id == tempPlayerswapped.id) {
              playerItem.image = tempPlayer.image
              playerItem.faceImage = tempPlayer.image
              playerItem.jerseyNo = tempPlayer.jerseyNo
              playerItem.name = tempPlayer.name
              var elem = document.querySelector('#activeGoali' + playerItem.id.toString());
              elem.className = 'slide-in-both-ways'
              //set the class back to original after animation
              setTimeout(function () {
                elem.className = 'pulse'
              }, 1000);

              // console.log(" swapped photo1", playerItem);
            }

            if (playerItem.id == tempPlayer.id) {
              playerItem.image = tempPlayerswapped.image
              playerItem.faceImage = tempPlayerswapped.image
              playerItem.jerseyNo = tempPlayerswapped.jerseyNo
              playerItem.name = tempPlayerswapped.name
              // console.log(" swapped photo2", playerItem);
            }
          });

          var finalPlayerSwappedImage = tempPlayerswapped.image.substr(tempPlayerswapped.image.lastIndexOf('/') + 1);
          var finalPlayerAddedGroundImage = tempPlayer.image.substr(tempPlayer.image.lastIndexOf('/') + 1);

          this.dbProvider.updatePlayer({ 'id': tempPlayer.id, 'jerseyNo': tempPlayerswapped.jerseyNo, 'name': tempPlayerswapped.name, 'image': finalPlayerSwappedImage })
            .then((res) => {
              // console.log('tempPlayer.id', tempPlayer.id)
              this.dbProvider.updatePlayer({ 'id': tempPlayerswapped.id, 'jerseyNo': tempPlayer.jerseyNo, 'name': tempPlayer.name, 'image': finalPlayerAddedGroundImage })
                .then((res) => {
                  // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
                  localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperWithFace))
                // localStorage.setItem('activePlayerDetails', JSON.stringify(this.tempPlayerDetails))

                //
                localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails));
                //
                  this._SharedService.refreshPlayers.emit(this.tempPlayerDetails);
                  this.swapEnabled = false
                  this.swapSubComponent = false
                  this.substituteExist = false
                  this.activeTab = '';
                  this.playerAddedToGround = []
                  this.playerAddedToSubstitute = null
                  this.substituteAddedToGround = []
                  this._SharedService.substituteMode.emit('none')
                })
            })
        }
      }
  }

  //show delete button when clicking player
  onPlayerClick() {
    this.removePlayer = (this.removePlayer == true) ? false : true;
    this.swapEnabled = false
    ///animate it
    var elem = document.querySelector('.slide-in-both-ways');
    if (elem)
      elem.className = 'pulse'

  }
  /// event fired to remove item from ground
  onRemoveFromGround(player) {
    this.presentConfirm('Do you want to remove this player from the ground ?', player)
  }
  //Action handler when substitute player is clicked
  changePlayer(e) {
    if (!this.jerseyTabSelected) {
      if (this.swapEnabled == true) {
        if(this.playerAddedToSubstitute && this.playerAddedToSubstitute.isGoalkeeper != 'true' && this.playerAddedToSubstitute.isGoalkeeper != 1) {
          if(e && e.isGoalkeeper != 'true' && e.isGoalkeeper != 1) {
            this.substituteClicked = true;
            this.substituteAddedToGround = e;
            let subArray = false;
            // console.log('this.playerAddedToSubstitute', this.playerAddedToSubstitute);

            if (this.playerAddedToSubstitute)
              subArray = true
            else
              subArray = false
            if (subArray) {
              if (this.substituteExist == true) {
                this.toastCtrl.callToast('This player is already in the substitute list.');
                this._SharedService.substituteMode.emit('none')
                this.swapSubComponent = false;
                this.substituteExist = false
                this.activeTab = ''
                this.playerAddedToSubstitute = null
              }
              else if (this.substituteExist == false) {
                this.activeTab = ''
                this.swapComponentSubstitute(this.playerAddedToSubstitute)
              }
            }
            else {
              // console.log('swap with players')

            //remove any selections from team component
              this._SharedService.substituteMode.emit('none');
              this.activeTab = (this.activeTab == '') ? e.id : ''
              // console.log('this.activeTab',this.activeTab)
              //substitute and player swapping
              if(this.activeTab == e.id){
                this._SharedService.selectPlayerForSwapFromSubstitute.emit(e);
              }
              else
              {
                this.swapEnabled = false
              }
              this.substituteExist = false
              this.playerAddedToSubstitute = null
            }
          } else {
            this.toastCtrl.callToast('Swap the player with another player.');
          }
        }
        else{
          if(e && e.isGoalkeeper != 'true' && e.isGoalkeeper != 1) {
            this.toastCtrl.callToast('Swap the goal keeper with another goal keeper.');
          } else {
            this.substituteClicked = true;
            this.substituteAddedToGround = e;
            let subArray = false;

            if (this.playerAddedToSubstitute)
              subArray = true
            else
              subArray = false

            if (subArray) {
              if (this.substituteExist == true) {
                this.toastCtrl.callToast('This player is already in the substitute list.');
                this._SharedService.substituteMode.emit('none')
                this.swapSubComponent = false;
                this.substituteExist = false
                this.activeTab = ''
                this.playerAddedToSubstitute = null
              }
              else if (this.substituteExist == false) {
                this.activeTab = ''
                this.swapComponentSubstitute(this.playerAddedToSubstitute)
              }
            }
            else {
              //remove any selections from team component
              this._SharedService.substituteMode.emit('none');
              this.activeTab = (this.activeTab == '') ? e.id : '';

              //substitute and player swapping
              if(this.activeTab == e.id){
                this._SharedService.selectPlayerForSwapFromSubstitute.emit(e);
              }
              else
              {
                this.swapEnabled = false
              }
              this.substituteExist = false
              this.playerAddedToSubstitute = null
            }
          }
        }
      }
    }
  }
  // Present a conform dialog before deletion

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
  // Present a conform dialog ebefore deletion

  presentConfirmLineUpDel(msg, lineupId) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.onDeleteLineUp(lineupId)
          }
        }
      ]
    });
    alert.present();
  }

  presentConfirmLineUpAllDel(msg, teamID, subArray, team_id) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.onDeleteAllLineUp(teamID, subArray, team_id)
          }
        }
      ]
    });
    alert.present();
  }

  presentConfirmClearTeamData(msg) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            // this.onDeleteAllLineUp(teamID, subArray, team_id)
          }
        }
      ]
    });
    alert.present();
  }

  onDeleteAllLineUp(teamId, subArray, team_id) {
    this.dbProvider.deleteAllLineup(teamId, subArray, team_id)
      .then((res) => {
        this.editLineUp = false
        this.lineupId = ''
        this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then((response) => {
          // console.log("selectplayers data ---- > ", response);
          let playerList = response;
          localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));

          // this.dbProvider.selectTeams(1, null).then((data)=>{
          this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then((data)=>{
            this._SharedService.refreshPlayers.emit(response);
            this._SharedService.refreshTeams.emit(data);
            this.toastCtrl.callToast('Team data removed successfully.');
            this.setPlayerSubstiteArray();
            this.setActiveTeamData();

            this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
            // if (this.activeTeam.length > 0) {
            if (localStorage.getItem('activeTeam') == teamId) {
              this.activeTeam[0].teamLogo = '';
              this.activeTeam[0].name = '';
              this.activeTeam[0].managerImage = '';
              this.activeTeam[0].manager = '';

              this.teamLogo = '';
              this.teamName = '';
              this.managerLogo = '';
              this.managerName = '';

              this._SharedService.refreshTeamLogo.emit();
            }
            localStorage.setItem('activeTeamDetails', JSON.stringify(this.activeTeam));
            this._SharedService.updateMenu.emit('update menu');
          })

        });
      })
  }

  onDeleteAllLineUpExceptCustoms(teamId, subArray, team_id) {
    this.dbProvider.deleteAllLineupExceptCustom(teamId, subArray, team_id)
      .then((res) => {
        this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
        // if (this.activeTeam.length > 0) {
        if (localStorage.getItem('activeTeam') == teamId) {
          this.activeTeam[0].teamLogo = '';
          this.activeTeam[0].name = '';
          this.activeTeam[0].managerImage = '';
          this.activeTeam[0].manager = '';

          this.teamLogo = '';
          this.teamName = '';
          this.managerLogo = '';
          this.managerName = '';

          this._SharedService.refreshTeamLogo.emit();
        }
        localStorage.setItem('activeTeamDetails', JSON.stringify(this.activeTeam));
        this._SharedService.updateMenu.emit('update menu');
      });
  }

  onDeleteLineUp(lineupId) {
    this.dbProvider.deleteLineup(lineupId)
      .then((res) => {
        this.editLineUp = false;
        this.lineupId = '';
        this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then((response) => {
          // console.log("selectplayers data ---- > ", response);
          let playerList = response;
          localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
          this._SharedService.refreshPlayers.emit(response);
          this.toastCtrl.callToast('Lineup removed successfully.');
          this.setPlayerSubstiteArray();
          this.setActiveTeamData();
          this._SharedService.updateMenu.emit('update menu');
        });
      });
  }

  cancelDeletePlayer() {
    this.removePlayer = false;
  }

  onDeletePlayer(player) {
    // console.log('Delete clicked');
    this.removePlayer = false;
    // console.log("Player to be removed", player)
    if (this.activePlayerWithFace.length <= 0) {
      this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'))
    }
    let i = 0, j = 0, k = 0;
    this.activePlayerDetails.forEach((playerItem) => {
      if (playerItem.id == player.id) {
        this.activePlayerDetails.splice(i, 1);
        return
      }
      i++
    })
    // console.log('face array before splice',this.activePlayerWithFace)
    this.activePlayerWithFace.forEach((playerItem) => {
      if (playerItem.id == player.id) {
        this.activePlayerWithFace.splice(k, 1);
        return
      }
      k++
    })
    this.tempPlayerDetails.forEach((playerItem) => {
      if (playerItem.id == player.id) {
        playerItem.isDeletedGround = "true"
        return
      }
      j++
    })
    // console.log('face array after splice',this.activePlayerWithFace)
    this.dbProvider.deletePlayerFromGround(player.id, this.editLineUp, player.lineupDetailsId)
      .then((res) => {
        if (!this.editLineUp) {
          this.dbProvider.selectPlayersAfterDelete(localStorage.getItem('activeTeam')).then((response) => {
            // console.log("selectplayers data ---- > ", response);
            let playerList = response
            localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
            localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerWithFace))
           // this._SharedService.refreshPlayers.emit(response);
            this.toastCtrl.callToast('Player removed successfully.');
          });
        }
        else {
          this.selectLineUpDetails(this.lineupId)
        }
      })


  }
}
