import { Component, EventEmitter, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Platform, LoadingController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AdMobPro } from '@ionic-native/admob-pro';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AppRate } from '@ionic-native/app-rate';
import { Market } from '@ionic-native/market';

import { ServicesProvider } from '../providers/services/services';
import { SharedService } from '../providers/services/sharedServices';
import { DatabaseProvider } from '../providers/database/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../pages/home/home';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { TeamDefaultPage } from '../pages/team-default/team-default';
import {App} from 'ionic-angular';
/*import { FileProvider } from '../providers/file/file'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';*/
import {enableProdMode} from '@angular/core';
enableProdMode();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  private players: any = [];
  leagues: any;
  teams: any;
  loading;
  pages: any;
  showLevel1 = null;
  showLevel2 = null;
  editLineUpVar = false;
  reloadingCount = 0;
  public device_width: any;
  public device_length: any;
  tempPlayerDetails: any = [];
  activePlayerWithFace: any = [];
  activePlayerDetails: any = [];
  substitutePlayerDetails: any = [];
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
  substituteExist = false;
  lineupId = '';
  playerAddedToGround: any = []
  playerAddedToSubstitute = null
  substituteAddedToGround: any = []
  playerCount:any = 10
  groundPlayerCount:any =  10;
  showSubstituteVal: any;
  showManagerVal: any;
  goali_width: any;
  goali_heigth: any;
  ball_width: any;
  ball_height: any;
  activeTabName;
  showBall: boolean = false;
  substitute_goalkeeper: any;

  constructor(private platform: Platform,
    statusBar: StatusBar,
    public renderer: Renderer,
    splashScreen: SplashScreen,
    private service: ServicesProvider,
    private dbProvider: DatabaseProvider,
    public _SharedService: SharedService,
    private screenOrientation: ScreenOrientation,
    public loadingController: LoadingController,
    public dataService: DataServiceProvider,
    private alertCtrl: AlertController,
    public app: App,
    public element: ElementRef,
    // public uniqueDeviceID: UniqueDeviceID,
    private admob: AdMobPro,
    private ga: GoogleAnalytics,
    private appRate: AppRate,
    private market: Market,
    // private fileObj: FileProvider,
  ) {
    // this.platform = platform;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();

      // get current
      // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'


      // set to portrait
      if(this.platform.is('cordova')){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }


      // console.log('Width: ' + platform.width());
      // console.log('Height: ' + platform.height());
      this.device_width = platform.width();
      this.device_length = platform.height();

      if(this.device_width)
        localStorage.setItem('device_width', this.device_width);
      if(this.device_length)
        localStorage.setItem('device_length', this.device_length);

      // this.uniqueDeviceID.get()
      // .then((uuid: any) => {
      //   if(uuid)
      //     localStorage.setItem("uuid", uuid);
      // })
      // .catch((error: any) => console.log(error));

      // this.platform.backButton.subscribe(() => {
      //   alert("here");
      //   this.launchInterstitial();
      // });

      // Google Analytics
      // console.log("ga =>", this.ga);
      this.ga.startTrackerWithId('UA-137694077-2')
      .then(() => {
        // alert('Google analytics is ready now');
        this.ga.trackView('Home Page');
        // Tracker is ready
        // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));

      this.appRate.preferences.storeAppURL = {
        // ios: '<app_id>',
        android: 'market://details?id=smac.app.soccer',
      }
      this.appRate.preferences.callbacks = {
        onRateDialogShow: function(callback){
          // console.log('rate dialog shown!');
        },
        onButtonClicked: function(buttonIndex, buttonName){
          // console.log(buttonName);
          // console.log('Selected index: -> ' + buttonIndex);
          if(buttonName == 'Not really' || buttonName == 'Remind Me Later' || buttonName == 'No, Thanks')
            platform.exitApp();
        }
      }
    });

    let checkLocalStorage = JSON.parse(localStorage.getItem('leagues'));
    if (!checkLocalStorage) { //Installed for first time
      this.dbProvider.createDatabaseTables();
      this.getLeagues();
      this.rootPage = HomePage;
    }
    else { // Alreday installed
      let activeTabname = localStorage.getItem('activeTabName');
      if (activeTabname != null && activeTabname !='' && typeof(activeTabname) != 'undefined') {
        this.getLeagues1();
        this.rootPage = TeamDefaultPage;
        this.loadMenus();
      } else {
        this.getLeagues();
        this.rootPage = HomePage;
      }
    }

    this._SharedService.updateMenu.subscribe((res)=>{
      this.loadMenus()
    });
  }

  // show Interstitial Ads
  // launchInterstitial() {
  //   let adId;
  //   if(this.platform.is('android')) {
  //     adId = 'ca-app-pub-3177597429175100/5082349560';
  //   } else if (this.platform.is('ios')) {
  //     adId = 'YOUR_ADID_IOS';
  //   }
  //   this.admob.prepareInterstitial({adId: adId, license: "justinwilson28@gmail.com/fd1e7592ac1ca9d1ee450534aaf7df4f", isTesting: true})
  //     .then(() => { this.admob.showInterstitial(); });

  //   this.admob.onAdDismiss()
  //   .subscribe(() => {
  //     var that = this;
  //     setTimeout(function() {
  //       that.exitFromApp();
  //     }, 50);
  //    });
  // }

  // Exit from app
  exitFromApp() {
    this.appRate.promptForRating(true);
    // this.platform.exitApp();
    // return navigator['app'].exitApp();
  }

  // Rate app
  rateApp() {
    this.market.open('smac.app.soccer');
  }

  loadMenus(){
    this.dataService.getMenus()
    .then((response)=> {
      this.pages=[]
        this.pages = (response);
        // console.log('menu List',this.pages);
    });
  }

  getLeagues1() {
    this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
    this.loading.present();

    var that = this;
    setTimeout(function () {
      that.service.getLeagues().subscribe(
        response => {
          let arrayLeague: any = [];
          arrayLeague = response;
          arrayLeague = arrayLeague.sort(function(a, b){
              if(a.name < b.name && b.name!='Other Teams') { return -1; }
              if(a.name > b.name && b.name!='Other Teams') { return 1; }
              return 0;
          })
          if (arrayLeague.length > 0) {
            localStorage.setItem('leagues', JSON.stringify(arrayLeague));
            that.dbProvider.insertLeagues1(arrayLeague)
              .then((leagueid) => {
                that._SharedService.refreshLeagues.emit();
                // that.getTeamById1(leagueid);
                that.loading.dismissAll();

                // if(localStorage.getItem('uuid')) {
                  // let uuid = localStorage.getItem('uuid');
                  // that.service.insertDeviceID(uuid).subscribe(
                  //   respo => {
                  //     that.dbProvider.selectGroundsCount()
                  //       .then((count) => {
                  //       that.service.getGroundStatus(count, uuid).subscribe(
                  //         result => {
                  //           if(result['status'] == "true") {
                  //             that.service.getGround().subscribe(
                  //               response => {
                  //                 that.dbProvider.insertGround1(response).
                  //                   then((groundLength) => {
                  //                     that._SharedService.shareGroundImages.emit();
                  //                     that.loading.dismissAll();
                  //                   })
                  //                   .catch((err) => {
                  //                     that.loading.dismissAll();
                  //                 })
                  //               })
                  //           } else {
                  //             that.loading.dismissAll();
                  //           }
                  //         });
                  //     });
                  //   });
                // } else {
                //   that.loading.dismissAll();
                // }
              })
              .catch((err) => {
                that.loading.dismissAll();
              })
          } else {
            that.loading.dismissAll();
          }
        }),
        (error) => {
          that.loading.dismissAll();
        };
      // }, 15000);
    }, 1000);
  }

  getUpdatedLeagues(){
    this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
    this.loading.present();

    var that = this;
    setTimeout(function () {
      that.service.getLeagues().subscribe(
        response => {
          let arrayLeague: any = [];
          arrayLeague = response;
          arrayLeague = arrayLeague.sort(function(a, b){
              if(a.name < b.name && b.name!='Other Teams') { return -1; }
              if(a.name > b.name && b.name!='Other Teams') { return 1; }
              return 0;
          })
          if (arrayLeague.length > 0) {
            localStorage.setItem('leagues', JSON.stringify(arrayLeague));
            that.dbProvider.insertLeagues1(arrayLeague)
              .then((leagueid) => {
                that._SharedService.refreshLeagues.emit();
                that.loading.dismissAll();
                let activeLeagueArray = []
                activeLeagueArray = JSON.parse(localStorage.getItem('activeLeagueArray'));
                console.log(activeLeagueArray);
                for (var activeLeague of activeLeagueArray){
                  console.log(activeLeague);
                  if (activeLeague != 1){
                    that.getTeamById2(activeLeague);
                  }
                }
                localStorage.removeItem('activeLeagueArray');
              })
              .catch((err) => {
                that.loading.dismissAll();
              })
          } else {
            that.loading.dismissAll();
          }
        }),
        (error) => {
          that.loading.dismissAll();
        };
    }, 1000);
  }

  getTeamById1(id) {
    this.service.getTeamById(id).subscribe(
      response => {
        let arrayTeam: any = [];
        arrayTeam = response;
        if (arrayTeam.length > 0) {
          this.dbProvider.insertTeams1(arrayTeam).
            then((teamid) => {
              this.loading.dismissAll();
              // this.service.getGround().subscribe(
              //   response => {
              //     this.dbProvider.insertGround1(response).
              //       then((groundLength) => {
              //         this._SharedService.shareGroundImages.emit();
              //         this.loading.dismissAll();
              //       })
              //       .catch((err) => {
              //         this.loading.dismissAll();
              //       })
              //     })
              })
            .catch((err) => {
              this.loading.dismissAll();
            })
        } else {
          this.loading.dismissAll();
        }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }

  getTeamById2(id) {
    this.service.getTeamById(id).subscribe(
      response => {
        let arrayTeam: any = [];
        arrayTeam = response;
        if (arrayTeam.length > 0) {
          this.dbProvider.insertTeamsNew(arrayTeam).
            then((teamid) => {
              this.loading.dismissAll();
              // this.service.getGround().subscribe(
              //   response => {
              //     this.dbProvider.insertGround1(response).
              //       then((groundLength) => {
              //         this._SharedService.shareGroundImages.emit();
              //         this.loading.dismissAll();
              //       })
              //       .catch((err) => {
              //         this.loading.dismissAll();
              //       })
              //     })
              })
            .catch((err) => {
              this.loading.dismissAll();
            })
        } else {
          this.loading.dismissAll();
        }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }


  getLeagues() {
    // alert("here");
    this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
    this.loading.present();

    var that = this;
    setTimeout(function () {
      // console.log(that.service);
      that.service.getLeagues().subscribe(
        response => {
          let arrayLeague: any = [];
          arrayLeague = response;
          arrayLeague = arrayLeague.sort(function(a, b){
              if(a.name < b.name && b.name!='Other Teams') { return -1; }
              if(a.name > b.name && b.name!='Other Teams') { return 1; }
              return 0;
          })
          // console.log("arrayLeague => ", arrayLeague);
          // alert(arrayLeague.length);
          that.dbProvider.insertLeagues1(response)
            .then((leagueid) => {
              // alert("league insertion completed");
              that.getTeamById(leagueid);
            })
            .catch((err) => {
              that.loading.dismissAll();
            })
        }),
        (error) => {
          that.loading.dismissAll();
        };
      // }, 20000);
    }, 1000);
  }

  getTeamById(id) {
    // alert("inside team");
    this.service.getTeamById(id).subscribe(
      response => {
        let arrayTeam: any = [];
        arrayTeam = response;
        // alert(arrayTeam.length);
        if (arrayTeam.length > 0) {
          this.dbProvider.insertTeams1(response).
            then((teamid) => {
              // alert("team insertion completed");
              // this.getPlayerbyTeamId(teamid);
              this.updateBasicSettings();
            })
            .catch((err) => {
              this.loading.dismissAll();
            })
        } else {
          this.loading.dismissAll();
        }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }

  saveData(response) {
    // this.databaseClass.saveTeam(response);
  }

  updateBasicSettings() {
    // alert("inside basic settings");
    this.dbProvider.insertFormation().
    then((formationLength) => {
      // alert("formation insertion completed");
      this.dbProvider.insertSettingsPlayer().
        then((settingsPlayerLength) => {
          // alert("settings insertion completed");
          this.dbProvider.insertFormationAdvanced().
          then((formationLength) => {
            this.service.getGround().subscribe(
              response => {
                this.dbProvider.insertGround1(response).
                  then((groundLength) => {
                    // alert("ground insertion completed");
                    // this._SharedService.shareGroundImages.emit();
                    this.loading.dismissAll();
                    this.loadMenus();

                    /* ---------- */
                    this.dbProvider.selectLeagues().
                      then((leagues) => {
                        this.leagues = leagues;

                        var emitData = {
                          "key": "league",
                          "data": this.leagues
                        };
                        this._SharedService.initialLoadData.emit(emitData);
                      })
                      .catch((err) => {
                        this.loading.dismissAll();
                      })

                    this.dbProvider.selectTeams().
                      then((teams) => {
                        this.teams = teams;

                        // emitData['teams'] =  this.teams;

                        // var emitData = {
                        //   "key":"teams",
                        //   "data":this.teams
                        //   };
                        // this._SharedService.initialLoadData.emit(emitData);

                        //console.log('MyApp teams',this.teams);
                      })
                      .catch((err) => {
                        this.loading.dismissAll();
                      })
                      /* ---------- */
                  })
                  .catch((err) => {
                    this.loading.dismissAll();
                  })
                })
          })
          .catch((err) => {
            this.loading.dismissAll();
          })
        })
        .catch((err) => {
          this.loading.dismissAll();
        })
    })
    .catch((err) => {
      this.loading.dismissAll();
    })
  }

  getPlayerbyTeamId(id) {
    let emitData: any;
    this.service.getPlayerbyTeamId(id).subscribe(
      response => {
        let arrayPlayers: any = [];
        arrayPlayers = response;
        // alert("aa");
        // alert(arrayPlayers.length);
        if(arrayPlayers.length > 0) {
          this.dbProvider.insertPlayers(response).
            then((player) => {
              // alert("bb");
              this.service.getGround().subscribe(
                response => {
                  // alert("cc");
                  this.dbProvider.insertGround(response).
                    then((groundLength) => {
                      this._SharedService.shareGroundImages.emit();
                      // alert("dd");
                      this.service.getJerseys().subscribe(
                        response => {
                          // alert("ee");
                          this.dbProvider.insertJersey(response).
                            then((jerseyLength) => {
                              // alert("ff");
                              this.dbProvider.insertFormation().
                                then((formationLength) => {
                                  // alert("gg");
                                  this.dbProvider.insertSettingsPlayer().
                                    then((settingsPlayerLength) => {
                                      // alert("hh");
                                      this.dbProvider.insertFormationAdvanced().
                                      then((formationLength) => {
                                        // alert("ii");
                                        this.loading.dismissAll();
                                        //loading the lineups
                                        this.loadMenus()
                                      })
                                      .catch((err) => {
                                        this.loading.dismissAll();
                                      })
                                    })
                                    .catch((err) => {
                                      this.loading.dismissAll();
                                    })
                                })
                                .catch((err) => {
                                  this.loading.dismissAll();
                                })
                            })
                            .catch((err) => {
                              this.loading.dismissAll();
                            })
                        }),
                        (error) => {
                        this.loading.dismissAll();
                        };
                    })
                    .catch((err) => {
                      this.loading.dismissAll();
                    })
                }),
                (error) => {
                  this.loading.dismissAll();
                };

              this.dbProvider.selectLeagues().
                then((leagues) => {
                  this.leagues = leagues;

                  var emitData = {
                    "key": "league",
                    "data": this.leagues
                  };
                  this._SharedService.initialLoadData.emit(emitData);
                })
                .catch((err) => {
                  this.loading.dismissAll();
                })

              this.dbProvider.selectTeams().
                then((teams) => {
                  this.teams = teams;

                  // emitData['teams'] =  this.teams;

                  // var emitData = {
                  //   "key":"teams",
                  //   "data":this.teams
                  //   };
                  // this._SharedService.initialLoadData.emit(emitData);

                  //console.log('MyApp teams',this.teams);
                })
                .catch((err) => {
                  this.loading.dismissAll();
                })

              this.dbProvider.selectPlayers().
                then((players) => {
                  this.players = players;

                  // emitData['players'] =  this.players;

                  // var emitData = {
                  //   "key":"teams",
                  //   "data":this.teams
                  //   };
                  // this._SharedService.initialLoadData.emit(emitData);

                  //console.log('MyApp players',this.players);
                })
                .catch((err) => {
                  this.loading.dismissAll();
                })

            })
            .catch((err) => {
              this.loading.dismissAll();
            })
          } else {
            this.loading.dismissAll();
          }
      }),
      (error) => {
        this.loading.dismissAll();
      };
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };

  editLineUp(lineUpId){
    // console.log('lineUpId',lineUpId)
    this._SharedService.ediLineUp.emit(lineUpId);
  }

  deleteLineUp(lineUpId, team_id){
    // console.log('lineUpId',lineUpId)
    this._SharedService.delLineUp.emit(lineUpId);
  }

  deleteTeam(teamId, team_id, subArray){
    // alert('teamId'); alert(teamId);
    // alert('team_id'); alert(team_id);
    var lineupArray = {'teamId':teamId,'subArray':subArray, 'team_id':team_id}
    this._SharedService.delTeam.emit(lineupArray);
  }

  clearTeamData() {
    this.presentConfirmClearTeamData('This will remove your downloaded teams and will provide you latest list of Teams/Leagues. There will not be any change to the custom created teams.')
  }

  loadHomePage() {
    this.nav.push(HomePage);
  }

  presentConfirmClearTeamData(msg) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete/Update',
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
          text: 'Confirm',
          handler: () => {
            console.log(this.pages);
            this.clearTeam().then((res)=>{
              this.getLeagues1();
              this.app.getActiveNav().setRoot(HomePage, {openSelectLeague: true});
            });
          }
        }
      ]
    });
    alert.present();
  }

  clearTeam(){
    return new Promise((resolve, reject) => {
      for (var page of this.pages){
        if (page.team_id != 0){
          // var lineupArray = {'teamId': page.teamID,'subArray': page.subs, 'team_id': page.teamID}
          this.onDeleteAllLineUp(page.teamID, page.subs, page.team_id)
        }
      }
      setTimeout(() => {
        window.localStorage.removeItem('leagues');

        resolve();
      }, 2000);
    });
  }

  onDeleteAllLineUp(teamId, subArray, team_id) {
    this.dbProvider.deleteAllLineup(teamId, subArray, team_id)
      .then((res) => {
        this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then((response) => {
          let playerList = response;
          localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));

          // this.dbProvider.selectTeams(1, null).then((data)=>{
          this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then((data)=>{
            this._SharedService.refreshPlayers.emit(response);
            this._SharedService.refreshTeams.emit(data);
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
            localStorage.setItem('activeLeague', '');
            localStorage.setItem('activeTeam', '');
            localStorage.setItem('activeTabName', '');
            this._SharedService.updateMenu.emit('update menu');
          })

        });
      })
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
    localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails))
    localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails))
    localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray))

    // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
    this.getCurrentFormation()
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

  getCurrentFormation() {
    this.dbProvider.selectFormationAdvanced(localStorage.getItem('formation')).
      then((response) => {
        this.formationArray = response

        // Width: 360 & Height: 616 -> based on this resolution, all other points are marked

        let i = 0;
        this.activePlayerDetails.forEach((playerItem) => {

          this.formationArray[i].leftVal = (parseInt(this.formationArray[i].leftVal) * this.device_width) / 360 ;
          this.formationArray[i].topVal = (parseInt(this.formationArray[i].topVal) * this.device_length) / 616 ;

          this.renderer.setElementStyle(this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'left', this.formationArray[i].leftVal + 'px');
          this.renderer.setElementStyle(this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'top', this.formationArray[i].topVal + 'px');

          i++
        });
      });
  }

}

