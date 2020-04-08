import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FileProvider } from '../../providers/file/file'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  public db: SQLiteObject;
  // public filePath: any;
  // public filePathNew: any;
  // public fileObject: any;

  constructor(
    public http: HttpClient,
    private fileObj: FileProvider,
    private sqlite: SQLite,
  ) {
    // this.fileObject = this.fileObj;
    // this.filePath = this.fileObj.getStorageDirectory();
    // alert(this.filePath);
    // if(this.filePath != null && this.filePath != '' && this.filePath != undefined) {
    //   localStorage.setItem('filePath', this.filePath);
    // }
    // if(localStorage.getItem('filePath')) {
    //   this.filePathNew = localStorage.getItem('filePath');
    // }
    this.createDatabaseTables();
  }

  createDatabaseTables() {
    // alert('Hello DatabaseProvider Provider');
    this.sqlite.create({
      name: 'soccer11.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        // alert("db created");
        //assign created db to var db
        this.db = db;
        // alert(this.db);
        this.db.executeSql('CREATE TABLE IF NOT EXISTS league ( id INTEGER PRIMARY KEY, leagueId TEXT, name TEXT, logo TEXT, country TEXT )', {})
          .then(res => console.log('leage tableExecuted SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS team(id INTEGER PRIMARY KEY,teamId TEXT, leagueId TEXT,  name TEXT, manager TEXT, teamLogo TEXT, managerImage TEXT, jerseyId TEXT )', {})
          .then(res => console.log('team table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY,teamId TEXT, jerseyId TEXT,  name TEXT, image TEXT, jerseyNo TEXT, isGoalkeeper BOOLEAN,top TEXT,left TEXT,isDeleted TEXT,isDeletedGround TEXT, substitutedPlayers TEXT)', {})
          .then(res => console.log('player table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE ground ( id INTEGER PRIMARY KEY, groundId TEXT,  image TEXT )', {})
          .then(res => console.log('ground table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS jersey ( id INTEGER PRIMARY KEY, teamId TEXT, jerseyId TEXT,  playerImg TEXT, goalKeeperImg TEXT, patternId TEXT, primaryColour TEXT, secondaryColour TEXT, jerseyText TEXT, jerseyTextColour TEXT )', {})
          .then(res => console.log('jersey table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS formation ( id INTEGER PRIMARY KEY, formationText TEXT)', {})
          .then(res => console.log('formation table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS settingsPlayer ( id INTEGER PRIMARY KEY, playerNumber TEXT)', {})
          .then(res => console.log('settingsPlayer table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS savedTeams ( id INTEGER PRIMARY KEY, teamId TEXT, opponentId TEXT, formationId TEXT, settingsPlayerId TEXT, appName TEXT,showSubstitue BOOLEAN showManager BOOLEAN)', {})
          .then(res => console.log('savedTeams table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS formationAdvanced ( id INTEGER PRIMARY KEY, formationId TEXT, topValue TEXT, leftValue TEXT)', {})
          .then(res => console.log('formationAdvanced table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS lineUp ( id INTEGER PRIMARY KEY, leagueId TEXT,teamId TEXT,team TEXT,logo TEXT, teamName TEXT, time TIME, team_id TEXT)', {})
          .then(res => console.log('lineUp table Executed SQL'))
          .catch(e => console.log(e));

        this.db.executeSql('CREATE TABLE IF NOT EXISTS lineUpDetails ( id INTEGER PRIMARY KEY , lineUpId TEXT,playerId TEXT,jerseyId TEXT,topValue TEXT, leftValue TEXT, mode TEXT, name TEXT,jerseyNo TEXT,image TEXT,isGoalkeeper BOOLEAN)', {})
          .then(res => {
            console.log('lineUpDetails table Executed SQL');
          })
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
  }

  insertLeagues(response) {
    return new Promise((resolve, reject) => {
      let league;
      // console.log(this.db);

      for (var i = 0; i < response.length; i++) {
        //   this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?,?)', ['1', 'dfd', 'logo', 'country'])
        this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?)', [response[i].id, response[i].name, response[i].logo, response[i].country])
          .then((res) => {
            // console.log('Executed insert league SQL', res);
          })
          .catch((e) => { console.log(e); reject(e) });
      }
      league = this.selectFirstleague();
      resolve(league);
    })
  }

  insertLeagues1(response) {
    // alert("inside database");
    return new Promise((resolve, reject) => {
      let league;
      let activeLeague;
      // alert(this.db);
      if(this.db) {
        // alert(this.db);
        this.db.executeSql('delete from league', [])
        .then((res1) => {
          console.log("333");
          console.log("res1 =>", res1);
          for (var i = 0; i < response.length; i++) {
            //   this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?,?)', ['1', 'dfd', 'logo', 'country'])
            console.log("league name => ", response[i].name);
            this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?)', [response[i].id, response[i].name, response[i].logo, response[i].country])
              .then((res) => {
                // console.log('Executed insert league SQL', res);
              })
              .catch((e) => { console.log(e); reject(e) });
          }
          activeLeague = localStorage.getItem('activeLeague');
          if (activeLeague)
            league = activeLeague;
          else
            league = this.selectFirstleague();
          resolve(league);
        })
        .catch((e) => { console.log("error => ",e); reject(e) });
      } else {
        reject();
      }
    })
  }

  selectFirstleague() {
    return new Promise((resolve, reject) => {

      this.db.executeSql('Select * from league limit 1, 1', [])
        .then((res) => {
          // console.log('Executed select first league SQL', res)
          if (res.rows.length > 0) {
            let league = res.rows.item(0).leagueId;
            resolve(league);
          }
        })
        .catch((e) => { console.log(e); reject(e) });
    })
  }

  insertTeams(response) {
    return new Promise((resolve, reject) => {
      let teamImageArr: any = [], team;

      for (var i = 0; i < response.length; i++) {
        teamImageArr.push(response[i].team_image);
        teamImageArr.push(response[i].manager_image);
        this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
          .then((res) => {
            // console.log('Executed insert team SQL', res)
          })
          .catch((e) => { console.log(e); reject(e) });
      }

      /* Downloading all Team Images*/
      let observableBatch = [];
      teamImageArr.forEach((teamImage) => {
        observableBatch.push(this.fileObj.downloadImage(teamImage, 'team/'));
      });

      Observable.forkJoin(observableBatch).subscribe(
        data => {
          // console.log('after download', data)
          team = this.selectFirstTeam();
          resolve(team);
        },
        err => console.error(err)
      );

      // if(observableBatch.length) {
      //   let that = this;
      //   setTimeout(function () {
      //     Observable.forkJoin(observableBatch);
      //     team = that.selectFirstTeam();
      //     resolve(team);
      //   }, 1500);
      // }

    })
  }

  insertTeams1(response) {
    // console.log("inside insertTeams1");
    return new Promise((resolve, reject) => {
      let teamImageArr: any = [], team;
      let activeTeam;
      this.db.executeSql('delete from team', [])
        .then((res1) => {
          // alert("deleted teams");
          for (var i = 0; i < response.length; i++) {
            teamImageArr.push(response[i].team_image);
            teamImageArr.push(response[i].manager_image);
            // console.log("Image Inserted");
            this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
              .then((res) => {
                console.log('Insert Teams =>Executed insert team SQL', res);
              })
              .catch((e) => { console.log(e); reject(e) });
          }

          /* Downloading all Team Images*/
          let observableBatch = [];
          teamImageArr.forEach((teamImage) => {
            observableBatch.push(this.fileObj.downloadImage(teamImage, 'team/'));
            // Observable.forkJoin(
            //   this.fileObj.downloadImage(teamImage, 'team/')
            // )
            // .subscribe((res1) => {
            //   observableBatch.push(res1);
            //   console.log("Image downloaded");
            // });
          })

          Observable.forkJoin(observableBatch).subscribe(
            data => {
              activeTeam = localStorage.getItem('activeTeam');
              if(activeTeam) {
                team = activeTeam;
              } else {
                team = this.selectFirstTeam();
              }
              resolve(team);
            },
            err => {console.error("err => ", err)}
          );

        })
        .catch((e) => { console.log(e); reject(e) });
    })
  }

  insertTeamsNew(response) {
    return new Promise((resolve, reject) => {
      let teamImageArr: any = [], team;

      for (var i = 0; i < response.length; i++) {
        teamImageArr.push(response[i].team_image);
        teamImageArr.push(response[i].manager_image);
        this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
          .then((res) => {

          })
          .catch((e) => { console.log(e); reject(e) });
      }

    })
  }

  deleteTeams(leagueId){
    return new Promise((resolve, reject) => {
      var qry3 = 'DELETE FROM team WHERE leagueId = "'+leagueId+'"';
      this.db.executeSql(qry3,[])
      .then((res3) => {
        resolve();
        console.log("success");
      })
      .catch((e) => {
        reject(e)
      });
    });
  }

  selectFirstTeam() {
    // alert("inside selectFirstTeam");
    return new Promise((resolve, reject) => {
      this.db.executeSql('Select * from team limit 1', [])
        .then((res) => {
          // alert(res.rows.length);
          console.log('Executed select first team SQL', res.rows.item(0).teamId);
          if (res.rows.length > 0) {
            let team = res.rows.item(0).teamId;
            resolve(team);
          }
        })
        .catch((e) => { console.log(e); reject(e) });
    })
  }

  insertPlayers(response) {
    return new Promise((resolve, reject) => {
      let playerImageArr: any = [], player;

      for (var i = 0; i < response.length; i++) {
        playerImageArr.push(response[i].image)
        this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?,NULL)', [response[i].team_id, response[i].jersey_id, response[i].name, response[i].image, response[i].jersey_no, response[i].is_goalkeeper, response[i].top, response[i].left,"false","false"])
          .then((res) => {
            // console.log('Executed insert player SQL');
            player = res.rows.length;
          })
          .catch((e) => { console.log(e); reject(e) });
      }

      /* Downloading all Player Images*/
      // console.log('playerImageArr', playerImageArr);
      let observableBatch = [];
      playerImageArr.forEach((playerImage) => {
        // console.log(playerImage);
        observableBatch.push(this.fileObj.downloadImage(playerImage, 'player/'));
      });

      Observable.forkJoin(observableBatch).subscribe(
        data => {
          // console.log('after download', data)
          resolve(player);
        },
        err => console.error(err)
      );

      // if(observableBatch.length) {
      //   setTimeout(function () {
      //     Observable.forkJoin(observableBatch);
      //     resolve(player);
      //   }, 1500);
      // }

    })
  }

  selectLeagues(leagueId = null) {
    var qry = 'Select * from league WHERE 1=1 ';

    if (leagueId) {
      qry = qry + " AND leagueId = " + leagueId;
    }

    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              // console.log('Executed select all leagueSQL', res)
              let leagueArr: any = [];
              for (let i = 0; i < res.rows.length; i++) {
                leagueArr.push({ 'id': res.rows.item(i).leagueId, 'name': res.rows.item(i).name });
              }
              resolve(leagueArr);
            })
            .catch((e) => { console.log(e); reject(e); });
        })
    })

  }
  selectTeams(leagueId = null, teamId = null) {
    var qry = 'Select * from team WHERE 1=1 ';

    if (leagueId) {
      qry = qry + " AND leagueId = " + leagueId;
    }
    if (teamId) {
      qry = qry + " AND id = " + teamId;
    }
    //qry = qry + " LIMIT 1 ";

    let teamArr: any = [];
    return new Promise((resolve, reject) => {
      var qry1 = 'SELECT * FROM team';
        this.db.executeSql(qry1,[])
          .then((res) => {
            // console.log("user result => ", res);
            for (let i = 0; i < res.rows.length; i++) {
              console.log(res.rows.item(i));
            }
          })
          .catch((e) => { console.log(e); reject(e); });

      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {

              for (let i = 0; i < res.rows.length; i++) {
                teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage, 'jerseyId': res.rows.item(i).jerseyId });
              }

              /* Retrieving all Player Images*/
              let observableBatch = [];
              if(teamArr.length <= 0){
                resolve(teamArr);
              }
              else{
                teamArr.forEach((teamItem) => {
                  console.log("here");
                  observableBatch.push(this.fileObj.retrieveImage(teamItem.teamLogo));

                  if(teamItem.teamLogo == null){
                    teamItem.teamLogo = "./assets/imgs/no-logo.png";
                  } else {
                    teamItem.teamLogo = this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.teamLogo;
                  }

                  observableBatch.push(this.fileObj.retrieveImage(teamItem.managerImage));

                  if(teamItem.managerImage == null){
                    teamItem.managerImage = "./assets/imgs/no-face.png";
                  } else {
                    teamItem.managerImage = this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.managerImage;

                  }

                });

                Observable.forkJoin(observableBatch).subscribe(
                  data => {
                    resolve(teamArr);
                  },
                  err => console.error(err)
                );

                // if(observableBatch.length) {
                //   setTimeout(function () {
                //     Observable.forkJoin(observableBatch);
                //     resolve(teamArr);
                //   }, 1500);
                // }

              }
            })
            .catch((e) => { console.log(e); reject(e); });

        })
    })
  }

  /* Old function June 28 ---
  selectPlayers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('Select * from player ', [])
        .then((res) => {
          console.log('Executed select all player SQL', res)
          let playerArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            playerArr.push({ 'id': res.rows.item(i).id, 'name': res.rows.item(i).name, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'image': res.rows.item(i).image });
          }
          resolve(playerArr);
        })
        .catch((e) => { console.log(e); reject(e); });
    })

  } */

  selectPlayers(teamId = null) {
    // alert("here");

    let activeTeamID;
    activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
    if(activeTeamID == "0" || activeTeamID == 0)
      activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];

    teamId = activeTeamID;

    var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround,player.substitutedPlayers,jersey.playerImg,jersey.goalKeeperImg from player left join jersey on player.jerseyId = jersey.jerseyId WHERE player.isDeleted="false"';

    // var qry = 'Select * from player where 1=1';

    // var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround from player where 1=1';

    if (teamId) {
      qry = qry + " AND player.teamId = " + teamId;
    }

    qry = qry + " group by player.id";

    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              let playerArr: any = [];
              for (let i = 0; i < res.rows.length; i++) {
                playerArr.push({ 'id': res.rows.item(i).id, 'name': res.rows.item(i).name,'jerseyId':res.rows.item(i).jerseyId, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'image': res.rows.item(i).image,'faceImage': res.rows.item(i).image, 'top': res.rows.item(i).top, 'left': res.rows.item(i).left, 'isGoalkeeper': res.rows.item(i).isGoalkeeper, 'playerImg': res.rows.item(i).playerImg, 'goalKeeperImg': res.rows.item(i).goalKeeperImg ,'isDeleted' : res.rows.item(i).isDeleted,'isDeletedGround' : res.rows.item(i).isDeletedGround,'mode':'', 'substitutedPlayers': []});
              }

              /* Retrieving all Player Images*/
              let observableBatch = [];
              if (playerArr.length <= 0)
                resolve(playerArr);
              else {
                playerArr.forEach((playerItem) => {
                  // alert(playerItem.image);
                  observableBatch.push(this.fileObj.retrieveImage(playerItem.image));

                  // console.log("Player Image => ", playerItem.image);
                  if(playerItem.image == null || playerItem.image == 'no-face.png'){
                     playerItem.faceImage  =playerItem.image = "./assets/imgs/no-face.png";
                  } else {
                    playerItem.faceImage  =  playerItem.image = this.fileObj.getStorageDirectory() + 'assets/images/player/' + playerItem.image;
                  }
                  playerItem.playerImg = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.playerImg;
                  playerItem.goalKeeperImg = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.goalKeeperImg;
                });

                Observable.forkJoin(observableBatch).subscribe(
                  data => {
                    resolve(playerArr);
                  },
                  err => console.error(err)
                );

                // if(observableBatch.length) {
                //   setTimeout(function () {
                //     Observable.forkJoin(observableBatch);
                //     resolve(playerArr);
                //   }, 1500);
                // }

              }
            })
            .catch((e) => { console.log(e); reject(e); });
        })
    })

  }

  selectPlayersAfterDelete(teamId = null) {

    var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround,jersey.playerImg,jersey.goalKeeperImg from player left join jersey on player.jerseyId = jersey.jerseyId WHERE player.isDeletedGround="false" ';

    if (teamId) {
      qry = qry + " AND player.teamId = " + teamId;
    }
    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              let playerArr: any = [];
              for (let i = 0; i < res.rows.length; i++) {
                playerArr.push({ 'id': res.rows.item(i).id, 'name': res.rows.item(i).name,'jerseyId':res.rows.item(i).jerseyId, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'image': res.rows.item(i).image,'faceImage': res.rows.item(i).image, 'top': res.rows.item(i).top, 'left': res.rows.item(i).left, 'isGoalkeeper': res.rows.item(i).isGoalkeeper, 'playerImg': res.rows.item(i).playerImg, 'goalKeeperImg': res.rows.item(i).goalKeeperImg ,'isDeleted' : res.rows.item(i).isDeleted,'isDeletedGround' : res.rows.item(i).isDeletedGround,'mode':''});
              }

              /* Retrieving all Player Images*/
              let observableBatch = [];
              if (playerArr.length <= 0)
                resolve(playerArr);
              else {
                playerArr.forEach((playerItem) => {
                  observableBatch.push(this.fileObj.retrieveImage(playerItem.image));

                  if(playerItem.image == null){
                     playerItem.faceImage  =playerItem.image = "./assets/imgs/no-face.png";
                  } else {
                    playerItem.faceImage  =  playerItem.image = this.fileObj.getStorageDirectory() + 'assets/images/player/' + playerItem.image;
                  }
                  playerItem.playerImg = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.playerImg;
                  playerItem.goalKeeperImg = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.goalKeeperImg;
                });

                Observable.forkJoin(observableBatch).subscribe(
                  data => {
                    resolve(playerArr);
                  },
                  err => console.error(err)
                );

                // if(observableBatch.length) {
                //   setTimeout(function () {
                //     Observable.forkJoin(observableBatch);
                //     resolve(playerArr);
                //   }, 1500);
                // }

              }

            })
            .catch((e) => { console.log(e); reject(e); });
        })
    })

  }

  insertGround(response) {
    return new Promise((resolve, reject) => {
      let groundsImageArr: any = [], grounds: any
      for (var i = 0; i < response.length; i++) {
        groundsImageArr.push(response[i].image)
        this.db.executeSql('INSERT INTO ground VALUES(NULL,?,?)', [response[i].id, response[i].image])
          .then((res) => {
            grounds = res.rows.length;
          })
          .catch((e) => { console.log(e); reject(e) });
      }

      /* Downloading all Ground Images*/
      let observableBatch = [];
      groundsImageArr.forEach((groundImage) => {
        observableBatch.push(this.fileObj.downloadImage(groundImage, 'ground/'));
      });

      Observable.forkJoin(observableBatch).subscribe(
        data => {
          resolve(grounds);
        },
        err => console.error(err)
      );

      // if(observableBatch.length) {
      //   setTimeout(function () {
      //     Observable.forkJoin(observableBatch);
      //     resolve(grounds);
      //   }, 1500);
      // }

    })
  }

  insertGround1(response) {
    return new Promise((resolve, reject) => {
      this.db.executeSql('delete from ground', [])
        .then((res1) => {
          let groundsImageArr: any = [], grounds: any
          for (var i = 0; i < response.length; i++) {
            groundsImageArr.push(response[i].image)
            this.db.executeSql('INSERT INTO ground VALUES(NULL,?,?)', [response[i].id, response[i].image])
              .then((res) => {
                grounds = res.rows.length;
              })
              .catch((e) => { console.log(e); reject(e) });
          }

          /* Downloading all Ground Images*/
          let observableBatch = [];
          groundsImageArr.forEach((groundImage) => {
            observableBatch.push(this.fileObj.downloadImage(groundImage, 'ground/'));
          });

          Observable.forkJoin(observableBatch).subscribe(
            data => {
              resolve(grounds);
            },
            err => console.error(err)
          );

          // if(observableBatch.length) {
          //   setTimeout(function () {
          //     Observable.forkJoin(observableBatch);
          //     resolve(grounds);
          //   }, 1500);
          // }
      })
      .catch((e) => { console.log(e); reject(e) });
    })
  }

  selectGroundsCount() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('Select * from ground ', [])
        .then((res) => {
          resolve(res.rows.length);
        })
        .catch((e) => { console.log(e); reject(e); });
    })
  }

  selectGrounds() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('Select * from ground ', [])
        .then((res) => {
          let groundArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            groundArr.push({ 'id': res.rows.item(i).id, 'image': res.rows.item(i).image });
          }
          /* Retrieving all Ground Images*/
          let observableBatch = [];
          groundArr.forEach((groundItem) => {
            observableBatch.push(this.fileObj.retrieveImage(groundItem.image));
            groundItem.image = this.fileObj.getStorageDirectory() + 'assets/images/ground/' + groundItem.image;
          });

          Observable.forkJoin(observableBatch).subscribe(
            data => {
              resolve(groundArr);
            },
            err => console.error(err)
          );

          // if(observableBatch.length) {
          //   setTimeout(function () {
          //     Observable.forkJoin(observableBatch);
          //     resolve(groundArr);
          //   }, 1500);
          // }

        })
        .catch((e) => { console.log(e); reject(e); });
    })
  }

  insertJersey(response) {
    return new Promise((resolve, reject) => {
      let playerJerseyImageArr: any = [], jerseys;
        for (var i = 0; i < response.length; i++) {
          playerJerseyImageArr.push(response[i].player_jersey_image);
          playerJerseyImageArr.push(response[i].goalkeeper_jersey_image);
          let activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
          if(!response[i].team_id) {
            response[i].team_id = activeTeamID;
          }

          this.db.executeSql('INSERT INTO jersey VALUES(NULL,?,?,?,?," "," "," "," "," ")', [response[i].team_id, response[i].id, response[i].player_jersey_image, response[i].goalkeeper_jersey_image])
            .then((res) => {
              jerseys = res.rows.length;
            })
            .catch((e) => { console.log(e); reject(e) });
        }

        /* Downloading all Jersey Images*/
        let observableBatch = [];
        playerJerseyImageArr.forEach((jerseyImage) => {
          observableBatch.push(this.fileObj.downloadImage(jerseyImage, 'jersey/'));
        });

        Observable.forkJoin(observableBatch).subscribe(
          data => {
            resolve(jerseys)
          },
          err => console.error(err)
        );

        // if(observableBatch.length) {
        //   setTimeout(function () {
        //     Observable.forkJoin(observableBatch);
        //     resolve(jerseys);
        //   }, 1500);
        // }
    })
  }

  addCustomJersey(formObjData) {
    let activeTeamID;
    activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
    if(activeTeamID == 0 || activeTeamID == "0") {
      activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
    }

    // localStorage.getItem('activeTeamId')
    return new Promise((resolve, reject) => {
      this.db.executeSql('INSERT INTO jersey VALUES(NULL,?,?,?,?,?,?,?,?,?)', [activeTeamID, 0, formObjData.playerImg, formObjData.goalKeeperImg, formObjData.patternId, formObjData.primaryColour, formObjData.secondaryColour, formObjData.jerseyText, formObjData.jerseyTextColour])
        .then((res) => {
          resolve(res);
          console.log("add jersey =>", res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  addCustomTeam(formObjData, teamImage, managerImage) {
    // var qry = 'SELECT * FROM league WHERE name = ' + "'Custom Teams'";
    return new Promise((resolve, reject) => {
      // console.log(qry);
      // this.db.executeSql(qry, [])
      //   .then((res1) => {
      //     console.log(res1);
      //     for (let i = 0; i < res1.rows.length; i++) {
      //       console.log( res1.rows.item(i).id );
      //       alert( res1.rows.item(i).id );
      //     }
          // this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', ['0', localStorage.getItem('activeLeague'), formObjData.team_name, formObjData.manager_name, teamImage, managerImage, 1])
          this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', ['0', '1', formObjData.team_name, formObjData.manager_name, teamImage, managerImage, 1])
            .then((res) => {
              // console.log('Executed insert team SQL', res)
              resolve(res);
            })
            .catch((e) => {
              reject(e)
            });
          });
    // });
  }

  addCustomPlayer(formObjData, playerLogo) {
    // alert("player id"); alert(formObjData.teamId);
    let activeTeamID;
    activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
    if(activeTeamID == 0 || activeTeamID == "0") {
      activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
    }
    return new Promise((resolve, reject) => {
      // this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [formObjData.teamId, '', formObjData.name, playerLogo, formObjData.jerseyNo, formObjData.isGoalkeeper, '', '', 'false', 'false'])
      this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [activeTeamID, '', formObjData.name, playerLogo, formObjData.jerseyNo, formObjData.isGoalkeeper, '', '', 'false', 'false'])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e)
        });
    });
  }

  //this is for swapping
  updatePlayer(player){
    return new Promise((resolve, reject) => {
       this.db.executeSql('UPDATE player SET jerseyNo = ?, name = ?,image = ? WHERE id =' +player.id,[player.jerseyNo,player.name,player.image])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e)
        });
    });
  }

  // delete player
  deletePlayer(playerId){
    return new Promise((resolve, reject) => {
      //normal player deleteion
      this.db.executeSql('DELETE from player WHERE id =' +playerId,[])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e)
        });
    });
  }

  // delete player
  deletePlayerFromGround(playerId,editLineUp,lineUpId){
    return new Promise((resolve, reject) => {
      //normal player deleteion
    if(!editLineUp){
      this.db.executeSql('UPDATE player SET isDeletedGround = "true" WHERE id =' +playerId,[])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e)
        });
      }
      else{
        var qry = 'DELETE from lineUpDetails  WHERE  id = '+lineUpId
        this.db.executeSql(qry,[])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e)
        });
      }
    });
  }

  selectJersey() {
    return new Promise((resolve, reject) => {
      let jerseyArr: any = [];
      let activeTeamID;
      activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
      if(activeTeamID == "0" || activeTeamID == 0)
        activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];

      if(typeof(activeTeamID) != undefined && activeTeamID != '' && activeTeamID != null) {
        // this.db.executeSql('Select * from jersey where teamId = '+localStorage.getItem('activeTeam'), [])
        this.db.executeSql('Select * from jersey where teamId = '+activeTeamID, [])
        // this.db.executeSql('Select * from jersey ', [])
          .then((res) => {
            // console.log("Jersey Response =>", res);
            for (let i = 0; i < res.rows.length; i++) {
              // console.log("Jersey Array => ", res.rows.item(i));
              jerseyArr.push({ 'id': res.rows.item(i).jerseyId, 'team_id': res.rows.item(i).teamId, 'image': res.rows.item(i).playerImg, 'goalKeeper': res.rows.item(i).goalKeeperImg });
            }

            /* Retrieving all Jersey Images*/
            // console.log('jerseyArr', jerseyArr);
            let observableBatch = [];
            jerseyArr.forEach((jerseyItem) => {
              // console.log('jerseyItem', jerseyItem.image);
              observableBatch.push(this.fileObj.retrieveImage(jerseyItem.image));
              jerseyItem.image = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + jerseyItem.image;
              jerseyItem.goalKeeper = this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + jerseyItem.goalKeeper;

            });

            Observable.forkJoin(observableBatch).subscribe(
              data => {
                // console.log('after retrieval', data)
                // console.log('jerseyImageArr', jerseyArr);
                resolve(jerseyArr);
              },
              err => console.error(err)
            );

            // if(observableBatch.length) {
            //   setTimeout(function () {
            //     Observable.forkJoin(observableBatch);
            //     resolve(jerseyArr);
            //   }, 1500);
            // }

          })
          .catch((e) => { console.log(e); reject(e); });
        } else {
          jerseyArr = [];
          resolve(jerseyArr);
        }
      })
  }

  createInsertJerseyPattern() {
    return new Promise((resolve, reject) => {

      this.db.executeSql('CREATE TABLE jersey_pattern ( id INTEGER PRIMARY KEY, patternName TEXT,  image TEXT )', {})
        .then((res) => {
          let grounds: any
          console.log('pattern table Executed SQL');
          /*  for (var i = 0; i < response.length; i++) {
             this.db.executeSql('INSERT INTO ground VALUES(NULL,?,?)', [ response[i].id, response[i].image] )
            .then((res) =>{
                 console.log('Executed insert ground SQL')
                })
               .catch((e) => {console.log(e);reject(e)});
           }
           grounds = this.selectGrounds();*/
          resolve(grounds);
        })
        .catch(e => console.log(e));
    })

  }

  selectPatterns() {

    return new Promise((resolve, reject) => {

      this.db.executeSql('Select * from jersey_pattern ', [])
        .then((res) => {
          /*  console.log('Executed select all ground SQL',res)
            let groundArr:any=[];
            for(let i=0;i<res.rows.length;i++){
             groundArr.push({'id': res.rows.item(i).id,'image':res.rows.item(i).image});
            }
            resolve(groundArr);*/
        })
        .catch((e) => { console.log(e); reject(e); });
    })


  }
  insertFormation() {

    return new Promise((resolve, reject) => {

      let formationArr = ['4-4-2', '4-3-3', '3-4-3', '3-6-1', '3-1-4-2', '3-5-2', '4-1-3-2', '4-1-4-1', '4-2-3-1', '4-2-4', '4-4-1-1', '4-4-2 Diamond', '5-3-2', '5-4-1'];
      for (var i = 0; i < formationArr.length; i++) {
        this.db.executeSql('INSERT INTO formation VALUES(NULL,?)', [formationArr[i]])
          .then((res) => {
            // console.log('Executed insert formation SQL')
            resolve(res)
          })
          .catch((e) => { console.log(e); reject(e) });
      }
    })


  }
  insertSettingsPlayer() {

    return new Promise((resolve, reject) => {
      this.db.executeSql('delete from settingsPlayer', [])
        .then((res1) => {
          let settingsPlayerArr = ['5', '7', '9', '11'];
          for (var i = 0; i < settingsPlayerArr.length; i++) {
            this.db.executeSql('INSERT INTO settingsPlayer VALUES(NULL,?)', [settingsPlayerArr[i]])
              .then((res) => {
                // console.log('Executed insert settingsPlayer SQL')
                resolve(res)
              })
              .catch((e) => { console.log(e); reject(e) });
          }
        })
        .catch((e) => { console.log(e); reject(e) });
    })


  }
  insertFormationAdvanced() {

    return new Promise((resolve, reject) => {
      let formationArr = [
        { 'formationId': '1', 'topVal': '300', 'leftval': '30' },
        { 'formationId': '1', 'topVal': '300', 'leftval': '110' },
        { 'formationId': '1', 'topVal': '300', 'leftval': '200' },
        { 'formationId': '1', 'topVal': '300', 'leftval': '275' },
        { 'formationId': '1', 'topVal': '210', 'leftval': '30' },
        { 'formationId': '1', 'topVal': '210', 'leftval': '115' },
        { 'formationId': '1', 'topVal': '210', 'leftval': '205' },
        { 'formationId': '1', 'topVal': '210', 'leftval': '275' },
        { 'formationId': '1', 'topVal': '110', 'leftval': '110' },
        { 'formationId': '1', 'topVal': '110', 'leftval': '210' },
        { 'formationId': '1', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '2', 'topVal': '300', 'leftval': '40' },
        { 'formationId': '2', 'topVal': '300', 'leftval': '120' },
        { 'formationId': '2', 'topVal': '300', 'leftval': '200' },
        { 'formationId': '2', 'topVal': '300', 'leftval': '275' },
        { 'formationId': '2', 'topVal': '205', 'leftval': '45' },
        { 'formationId': '2', 'topVal': '205', 'leftval': '160' },
        { 'formationId': '2', 'topVal': '205', 'leftval': '265' },
        { 'formationId': '2', 'topVal': '110', 'leftval': '60' },
        { 'formationId': '2', 'topVal': '110', 'leftval': '155' },
        { 'formationId': '2', 'topVal': '110', 'leftval': '265' },
        { 'formationId': '2', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '3', 'topVal': '300', 'leftval': '60' },
        { 'formationId': '3', 'topVal': '300', 'leftval': '160' },
        { 'formationId': '3', 'topVal': '300', 'leftval': '250' },
        { 'formationId': '3', 'topVal': '210', 'leftval': '50' },
        { 'formationId': '3', 'topVal': '210', 'leftval': '110' },
        { 'formationId': '3', 'topVal': '210', 'leftval': '200' },
        { 'formationId': '3', 'topVal': '210', 'leftval': '265' },
        { 'formationId': '3', 'topVal': '110', 'leftval': '75' },
        { 'formationId': '3', 'topVal': '110', 'leftval': '160' },
        { 'formationId': '3', 'topVal': '110', 'leftval': '255' },
        { 'formationId': '3', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '4', 'topVal': '300', 'leftval': '70' },
        { 'formationId': '4', 'topVal': '300', 'leftval': '165' },
        { 'formationId': '4', 'topVal': '300', 'leftval': '230' },
        { 'formationId': '4', 'topVal': '140', 'leftval': '45' },
        { 'formationId': '4', 'topVal': '200', 'leftval': '65' },
        { 'formationId': '4', 'topVal': '250', 'leftval': '120' },
        { 'formationId': '4', 'topVal': '250', 'leftval': '200' },
        { 'formationId': '4', 'topVal': '200', 'leftval': '240' },
        { 'formationId': '4', 'topVal': '140', 'leftval': '270' },
        { 'formationId': '4', 'topVal': '115', 'leftval': '165' },
        { 'formationId': '4', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '5', 'topVal': '305', 'leftval': '60' },
        { 'formationId': '5', 'topVal': '305', 'leftval': '155' },
        { 'formationId': '5', 'topVal': '305', 'leftval': '250' },
        { 'formationId': '5', 'topVal': '255', 'leftval': '155' },
        { 'formationId': '5', 'topVal': '210', 'leftval': '50' },
        { 'formationId': '5', 'topVal': '210', 'leftval': '115' },
        { 'formationId': '5', 'topVal': '210', 'leftval': '210' },
        { 'formationId': '5', 'topVal': '210', 'leftval': '270' },
        { 'formationId': '5', 'topVal': '110', 'leftval': '120' },
        { 'formationId': '5', 'topVal': '110', 'leftval': '200' },
        { 'formationId': '5', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '6', 'topVal': '300', 'leftval': '60' },
        { 'formationId': '6', 'topVal': '300', 'leftval': '155' },
        { 'formationId': '6', 'topVal': '300', 'leftval': '250' },
        { 'formationId': '6', 'topVal': '235', 'leftval': '155' },
        { 'formationId': '6', 'topVal': '210', 'leftval': '85' },
        { 'formationId': '6', 'topVal': '210', 'leftval': '235' },
        { 'formationId': '6', 'topVal': '150', 'leftval': '55' },
        { 'formationId': '6', 'topVal': '150', 'leftval': '265' },
        { 'formationId': '6', 'topVal': '110', 'leftval': '125' },
        { 'formationId': '6', 'topVal': '110', 'leftval': '200' },
        { 'formationId': '6', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '7', 'topVal': '300', 'leftval': '30' },
        { 'formationId': '7', 'topVal': '300', 'leftval': '105' },
        { 'formationId': '7', 'topVal': '300', 'leftval': '205' },
        { 'formationId': '7', 'topVal': '300', 'leftval': '275' },
        { 'formationId': '7', 'topVal': '260', 'leftval': '145' },
        { 'formationId': '7', 'topVal': '205', 'leftval': '50' },
        { 'formationId': '7', 'topVal': '205', 'leftval': '160' },
        { 'formationId': '7', 'topVal': '205', 'leftval': '255' },
        { 'formationId': '7', 'topVal': '110', 'leftval': '125' },
        { 'formationId': '7', 'topVal': '110', 'leftval': '195' },
        { 'formationId': '7', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '8', 'topVal': '305', 'leftval': '30' },
        { 'formationId': '8', 'topVal': '305', 'leftval': '105' },
        { 'formationId': '8', 'topVal': '305', 'leftval': '205' },
        { 'formationId': '8', 'topVal': '305', 'leftval': '275' },
        { 'formationId': '8', 'topVal': '265', 'leftval': '145' },
        { 'formationId': '8', 'topVal': '205', 'leftval': '40' },
        { 'formationId': '8', 'topVal': '205', 'leftval': '115' },
        { 'formationId': '8', 'topVal': '205', 'leftval': '200' },
        { 'formationId': '8', 'topVal': '205', 'leftval': '265' },
        { 'formationId': '8', 'topVal': '110', 'leftval': '165' },
        { 'formationId': '8', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '9', 'topVal': '300', 'leftval': '40' },
        { 'formationId': '9', 'topVal': '300', 'leftval': '110' },
        { 'formationId': '9', 'topVal': '300', 'leftval': '200' },
        { 'formationId': '9', 'topVal': '300', 'leftval': '270' },
        { 'formationId': '9', 'topVal': '235', 'leftval': '105' },
        { 'formationId': '9', 'topVal': '235', 'leftval': '205' },
        { 'formationId': '9', 'topVal': '195', 'leftval': '65' },
        { 'formationId': '9', 'topVal': '195', 'leftval': '160' },
        { 'formationId': '9', 'topVal': '195', 'leftval': '250' },
        { 'formationId': '9', 'topVal': '110', 'leftval': '165' },
        { 'formationId': '9', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '10', 'topVal': '300', 'leftval': '30' },
        { 'formationId': '10', 'topVal': '300', 'leftval': '105' },
        { 'formationId': '10', 'topVal': '300', 'leftval': '205' },
        { 'formationId': '10', 'topVal': '300', 'leftval': '275' },
        { 'formationId': '10', 'topVal': '235', 'leftval': '105' },
        { 'formationId': '10', 'topVal': '235', 'leftval': '205' },
        { 'formationId': '10', 'topVal': '155', 'leftval': '60' },
        { 'formationId': '10', 'topVal': '155', 'leftval': '245' },
        { 'formationId': '10', 'topVal': '110', 'leftval': '120' },
        { 'formationId': '10', 'topVal': '110', 'leftval': '200' },
        { 'formationId': '10', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '11', 'topVal': '300', 'leftval': '40' },
        { 'formationId': '11', 'topVal': '300', 'leftval': '115' },
        { 'formationId': '11', 'topVal': '300', 'leftval': '200' },
        { 'formationId': '11', 'topVal': '300', 'leftval': '275' },
        { 'formationId': '11', 'topVal': '210', 'leftval': '40' },
        { 'formationId': '11', 'topVal': '210', 'leftval': '120' },
        { 'formationId': '11', 'topVal': '210', 'leftval': '205' },
        { 'formationId': '11', 'topVal': '210', 'leftval': '275' },
        { 'formationId': '11', 'topVal': '165', 'leftval': '150' },
        { 'formationId': '11', 'topVal': '110', 'leftval': '165' },
        { 'formationId': '11', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '12', 'topVal': '305', 'leftval': '50' },
        { 'formationId': '12', 'topVal': '305', 'leftval': '115' },
        { 'formationId': '12', 'topVal': '305', 'leftval': '200' },
        { 'formationId': '12', 'topVal': '305', 'leftval': '275' },
        { 'formationId': '12', 'topVal': '255', 'leftval': '145' },
        { 'formationId': '12', 'topVal': '205', 'leftval': '100' },
        { 'formationId': '12', 'topVal': '205', 'leftval': '225' },
        { 'formationId': '12', 'topVal': '165', 'leftval': '160' },
        { 'formationId': '12', 'topVal': '110', 'leftval': '105' },
        { 'formationId': '12', 'topVal': '110', 'leftval': '210' },
        { 'formationId': '12', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '13', 'topVal': '300', 'leftval': '30' },
        { 'formationId': '13', 'topVal': '300', 'leftval': '90' },
        { 'formationId': '13', 'topVal': '300', 'leftval': '160' },
        { 'formationId': '13', 'topVal': '300', 'leftval': '220' },
        { 'formationId': '13', 'topVal': '300', 'leftval': '285' },
        { 'formationId': '13', 'topVal': '205', 'leftval': '65' },
        { 'formationId': '13', 'topVal': '205', 'leftval': '160' },
        { 'formationId': '13', 'topVal': '205', 'leftval': '250' },
        { 'formationId': '13', 'topVal': '110', 'leftval': '120' },
        { 'formationId': '13', 'topVal': '110', 'leftval': '200' },
        { 'formationId': '13', 'topVal': '161', 'leftval': '303' },

        { 'formationId': '14', 'topVal': '300', 'leftval': '30' },
        { 'formationId': '14', 'topVal': '300', 'leftval': '90' },
        { 'formationId': '14', 'topVal': '300', 'leftval': '160' },
        { 'formationId': '14', 'topVal': '300', 'leftval': '220' },
        { 'formationId': '14', 'topVal': '300', 'leftval': '285' },
        { 'formationId': '14', 'topVal': '210', 'leftval': '50' },
        { 'formationId': '14', 'topVal': '210', 'leftval': '120' },
        { 'formationId': '14', 'topVal': '210', 'leftval': '200' },
        { 'formationId': '14', 'topVal': '210', 'leftval': '260' },
        { 'formationId': '14', 'topVal': '110', 'leftval': '165' },
        { 'formationId': '14', 'topVal': '161', 'leftval': '303' },
      ]

      for (var i = 0; i < formationArr.length; i++) {
        // console.log(formationArr[i])
        this.db.executeSql('INSERT INTO formationAdvanced VALUES(NULL,?,?,?)', [formationArr[i].formationId, formationArr[i].topVal, formationArr[i].leftval])
          .then((res) => {
            // console.log('Executed insert formationAdvanced SQL')
            resolve(res)
          })
          .catch((e) => { console.log(e); reject(e) });
      }
    })


  }
  selectSettingsPlayer() {

    return new Promise((resolve, reject) => {
      this.checkDbExist().
      then((db: SQLiteObject) => {
        //assign created db to var db
        this.db = db
      this.db.executeSql('Select * from settingsPlayer ', [])
        .then((res) => {
          console.log('Executed select all settingsPlayer SQL', res)
          let settingsArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            settingsArr.push({ 'id': res.rows.item(i).id, 'playerNumber': res.rows.item(i).playerNumber });
          }
          resolve(settingsArr);
        })
        .catch((e) => { console.log(e); reject(e); });
      })
    })

  }
  selectFormation() {

    return new Promise((resolve, reject) => {
      this.checkDbExist().
      then((db: SQLiteObject) => {
        //assign created db to var db
        this.db = db
      this.db.executeSql('Select * from formation ', [])
        .then((res) => {
          // console.log('Executed select all formation SQL', res)
          let formationArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            formationArr.push({ 'id': res.rows.item(i).id, 'formationText': res.rows.item(i).formationText });
          }
          resolve(formationArr);
        })
        .catch((e) => { console.log(e); reject(e); });
    })
  })
  }
  selectFormationAdvanced(formationId) {

    var qry = 'Select * from formationAdvanced WHERE 1=1 ';
    qry = qry + " AND formationId = " + formationId;
    return new Promise((resolve, reject) => {
      this.checkDbExist().
      then((db: SQLiteObject) => {
        //assign created db to var db
        this.db = db
      this.db.executeSql(qry, [])
        .then((res) => {
          console.log('Executed select all formation SQL', res)
          let formationArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            formationArr.push({ 'id': res.rows.item(i).id, 'formationId': res.rows.item(i).formationId, 'topVal': res.rows.item(i).topValue, 'leftVal': res.rows.item(i).leftValue });
          }
          resolve(formationArr);
        })
        .catch((e) => { console.log(e); reject(e); });
      })
    })

  }
  selectOpponentTeams(teamId = null) {

    var qry = 'Select * from team WHERE 1=1 ';
    qry = qry + " AND id != " + teamId;

    //qry = qry + " LIMIT 1 ";
    console.log("qry **************************>>>>>>>>", qry);
    return new Promise((resolve, reject) => {
      this.checkDbExist().
      then((db: SQLiteObject) => {
        //assign created db to var db
        this.db = db
      this.db.executeSql(qry, [])
        .then((res) => {
          console.log('Executed select all teams SQL', res)
          let teamArr: any = [];
          for (let i = 0; i < res.rows.length; i++) {
            teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage });
          }
          resolve(teamArr)
        })
        .catch((e) => { console.log(e); reject(e); });
    })


  })

  }

  checkDbExist() {
    return this.sqlite.create({
      name: 'soccer11.db',
      location: 'default'
    })

  }

  insertLineUp(playerDetails){
    // alert(localStorage.getItem('activeTeamId'));
    return new Promise((resolve, reject) => {
      let league
      var d = new Date()
        // console.log("playerDetails => ", playerDetails);
         this.db.executeSql('INSERT INTO lineUp VALUES(NULL,?,?,?,?,?,?,?)', [playerDetails[0].leagueId, playerDetails[0].teamId,playerDetails[0].team,playerDetails[0].logo,playerDetails[0].teamName,d.getTime(),localStorage.getItem('activeTeamId')])
          .then((res) => {
            // console.log('Executed insert lineup SQL', playerDetails)
            // console.log('Executed last_insert_rowid SQL', res.insertId)
            resolve(res.insertId);
         })
          .catch((e) => { console.log(e); reject(e) });
    })
  }

  insertLineUpDetails(playerDetails){
    return new Promise((resolve, reject) => {
      let league
      var d = new Date()
      for (var i = 0; i < playerDetails.length; i++) {
          this.db.executeSql('INSERT INTO lineUpDetails VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [playerDetails[i].lineupId, playerDetails[i].playerId,playerDetails[i].jerseyId, playerDetails[i].topval, playerDetails[i].leftval,playerDetails[i].mode,playerDetails[i].name,playerDetails[i].jerseyNo,playerDetails[i].image,playerDetails[i].isGoalkeeper])
          .then((res) => {

          })
          .catch((e) => { console.log(e); reject(e) });
      }
     if(i == playerDetails.length)
     {
      console.log(playerDetails.length,'length')
     resolve(playerDetails.length)
     }

    })

  }
  selectLineUpCategory(){
    var qry = 'Select lineUp.id,lineUp.teamId,lineUp.team,lineUp.teamName,lineUp.team_id from lineUp left join team on lineUp.teamId = team.id WHERE 1=1 ';
    // console.log("selectLineUps QRYYYYYYY -----", qry);
    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              let lineupArr: any = [];
              // if(res.rows.length > 0) {
                for (let i = 0; i < res.rows.length; i++) {
                  lineupArr.push({ 'id': res.rows.item(i).id,'teamId':res.rows.item(i).teamId, 'name': res.rows.item(i).team, 'teamName': res.rows.item(i).teamName, 'team_id': res.rows.item(i).team_id});
                }
              // }

              /* Retrieving all Player Images*/
              console.log('lineupCategoryArr', lineupArr);
               resolve(lineupArr);
              })
            .catch((e) => { console.log(e); reject(e); });
        })
    })
  }

  selectLineUps(teamId){
    var qry = 'Select lineUp.id,lineUp.teamId,lineUp.time,lineUp.team,lineUp.logo,lineUp.teamName,lineUp.team_id from lineUp left join team on lineUp.teamId = team.id WHERE lineUp.teamId= '+teamId;
    // console.log("selectLineUps QRYYYYYYY -----", qry);
    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              // console.log('Executed select lineup SQL', res.rows)
              let lineupArr: any = [];
              for (let i = 0; i < res.rows.length; i++) {
                lineupArr.push({ 'id': res.rows.item(i).id,'teamId':res.rows.item(i).teamId, 'name': res.rows.item(i).team, 'logo': res.rows.item(i).logo, 'teamName': res.rows.item(i).teamName, 'time': res.rows.item(i).time, 'team_id': res.rows.item(i).team_id });
              }
              if(lineupArr.length == res.rows.length){
              /* Retrieving all Player Images*/
              // console.log('lineupArr', lineupArr);
               resolve(lineupArr);
              }
              })
            .catch((e) => { console.log(e); reject(e); });
        })
    })
  }

  selectLineUpDetails(lineupId){
    var qry = 'select lineupDetails.*,jersey.playerImg,jersey.goalKeeperImg from lineUpDetails  left join  jersey   on lineupDetails.jerseyId = jersey.jerseyId  where lineupDetails.lineUpId = '+lineupId;
    // console.log("selectLineUps QRYYYYYYY -----", qry);
    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              // console.log('Executed select lineup SQL')
              let lineupArr: any = [];
              for (let i = 0; i < res.rows.length; i++) {
                // console.log(res.rows.item(i),'res.rows.item(i)');

                lineupArr.push({'lineupDetailsId': res.rows.item(i).id,  'id': res.rows.item(i).playerId, 'name': res.rows.item(i).name, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'faceImage':res.rows.item(i).image, 'image': res.rows.item(i).image, 'top': res.rows.item(i).topValue, 'left': res.rows.item(i).leftValue, 'isGoalkeeper': res.rows.item(i).isGoalkeeper,'isDeleted':res.rows.item(i).isDeleted, 'playerImg': this.fileObj.getStorageDirectory() + 'assets/images/jersey/'+res.rows.item(i).playerImg, 'goalKeeperImg': this.fileObj.getStorageDirectory() + 'assets/images/jersey/'+res.rows.item(i).goalKeeperImg,'mode': res.rows.item(i).mode });
              }
              if(lineupArr.length == res.rows.length){
              /* Retrieving all Player Images*/
              // console.log('lineupArr', lineupArr);
               resolve(lineupArr);
              }
              })
            .catch((e) => { console.log(e); reject(e); });
        })
    })
  }
  selectTeamsFromLineUp(lineupId){
    var qry = 'Select team.* from team as team left join lineUp as lineUp on lineUp.teamId = team.id WHERE 1=1 ';
      qry = qry + " AND lineUp.id = " + lineupId;

    //qry = qry + " LIMIT 1 ";
    // console.log("qry **************************>>>>>>>>", qry);
    let teamArr: any = [];
    return new Promise((resolve, reject) => {
      this.checkDbExist().
        then((db: SQLiteObject) => {
          //assign created db to var db
          this.db = db
          this.db.executeSql(qry, [])
            .then((res) => {
              // console.log('Executed select all teams SQL', res)

              for (let i = 0; i < res.rows.length; i++) {
                teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage });
              }

              /* Retrieving all Player Images*/
              // console.log('teamArr', teamArr);
              let observableBatch = [];
               if(teamArr.length <= 0){
                resolve(teamArr);
               }
               else{
              teamArr.forEach((teamItem) => {
                // console.log('teamItem', teamItem.teamLogo);
                observableBatch.push(this.fileObj.retrieveImage(teamItem.teamLogo));

                if(teamItem.teamLogo == null){
                  teamItem.teamLogo = "./assets/imgs/no-logo.png";
                } else {
                  teamItem.teamLogo = this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.teamLogo;
                }

                observableBatch.push(this.fileObj.retrieveImage(teamItem.managerImage));

                if(teamItem.managerImage == null){
                  teamItem.managerImage = "./assets/imgs/no-face.png";
                } else {
                  teamItem.managerImage = this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.managerImage;
                }
              });

              Observable.forkJoin(observableBatch).subscribe(
                data => {
                  // console.log('after retrieval', data)
                  // console.log('teamNmanageIMAGEArr', teamArr);
                  resolve(teamArr);
                },
                err => console.error(err)
              );

              // if(observableBatch.length) {
              //   setTimeout(function () {
              //     Observable.forkJoin(observableBatch);
              //     resolve(teamArr);
              //   }, 1500);
              // }

            }
            })
            .catch((e) => { console.log(e); reject(e); });

        })
    })
  }

  deleteAllLineup(teamId,subArray,team_id){
    return new Promise((resolve, reject) => {

      // var qry = 'SELECT * FROM team WHERE teamId = "'+teamId+'"';
      //   this.db.executeSql(qry,[])
      //   .then((result) => {
      //     alert(result.rows.length);
      //   });

      var qry4 = 'DELETE FROM team WHERE id = "'+teamId+'" AND teamId = 0';
      this.db.executeSql(qry4,[]);

        var qry = 'DELETE FROM lineUp WHERE teamId = "'+teamId+'"';
        this.db.executeSql(qry,[])
        .then((res) => {
            var qry1 = 'DELETE FROM player WHERE teamId = "'+team_id+'"' ;
            this.db.executeSql(qry1,[])
              .then((res1) => {
                var qry2 = 'DELETE FROM jersey WHERE teamId = "'+team_id+'"';
                this.db.executeSql(qry2,[])
                  .then((res2) => {
                    for(var i=0; i < subArray.length; i++ ){
                      var qry3 = 'DELETE FROM lineUpDetails WHERE lineUpId = "'+subArray[i].id+'"';
                      this.db.executeSql(qry3,[])
                        .then((res3) => {
                          console.log("success");
                        })
                        .catch((e) => {
                          reject(e)
                        });
                    }
                    if(i == subArray.length){
                      resolve(res);
                    }
                  })
                  .catch((e) => {
                    reject(e)
                  });
              })
              .catch((e) => {
                reject(e)
              });
          })
          .catch((e) => {
            reject(e)
          });
    })
  }

  deleteAllLineupExceptCustom(teamId,subArray,team_id){
    return new Promise((resolve, reject) => {
      var qry4 = 'DELETE FROM team WHERE id = "'+teamId+'"';
      this.db.executeSql(qry4,[]);
      var qry = 'DELETE FROM lineUp WHERE teamId = "'+teamId+'"';
      this.db.executeSql(qry,[])
      .then((res) => {
        var qry1 = 'DELETE FROM player WHERE teamId = "'+team_id+'"' ;
        this.db.executeSql(qry1,[])
          .then((res1) => {
            var qry2 = 'DELETE FROM jersey WHERE teamId = "'+team_id+'"';
            this.db.executeSql(qry2,[])
              .then((res2) => {
                for(var i=0; i < subArray.length; i++ ){
                  var qry3 = 'DELETE FROM lineUpDetails WHERE lineUpId = "'+subArray[i].id+'"';
                  this.db.executeSql(qry3,[])
                    .then((res3) => {
                      console.log("success");
                    })
                    .catch((e) => {
                      reject(e)
                    });
                }
                if(i == subArray.length){
                  resolve(res);
                }
              })
              .catch((e) => {
                reject(e)
              });
          })
          .catch((e) => {
            reject(e)
          });
        })
        .catch((e) => {
          reject(e)
        });
    })
  }

  deleteLineup(lineUpId){
    return new Promise((resolve, reject) => {
    var qry = 'DELETE from lineUpDetails  WHERE  lineUpId = "'+lineUpId+'"'
    // console.log(qry);

    this.db.executeSql(qry,[])
    .then((res) => {
      // console.log('Executed delete lineupdetails SQL', res)

      var qry = 'DELETE from lineUp  WHERE  id = '+lineUpId
      // console.log(qry);

      this.db.executeSql(qry,[])
      .then((res) => {
        console.log('Executed delete lineup SQL', res)
        resolve(res);
      })
      .catch((e) => {
        console.log(e);
        reject(e)
      });

    })
    .catch((e) => {
      console.log(e);
      reject(e)
    });
  })
  }

  deleteLineupDetails(lineUpId){
    return new Promise((resolve, reject) => {
      var qry = 'DELETE from lineUpDetails  WHERE  lineUpId = "'+lineUpId+'"'
      // console.log(qry);

      this.db.executeSql(qry,[])
      .then((res) => {
        console.log('Executed delete lineupdetails SQL', res)
        resolve(res)
      })
      .catch((e) => {
        console.log(e);
        reject(e)
      });
    })
  }
}
