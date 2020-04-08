webpackJsonp([14],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GroundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroundPage = /** @class */ (function () {
    function GroundPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.grounds = [];
    }
    GroundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroundPage');
    };
    GroundPage.prototype.ionViewWillEnter = function () {
        // console.log('this.leagues')
        this.getGrounds();
    };
    GroundPage.prototype.getGrounds = function () {
        var _this = this;
        this.service.getGround().subscribe(function (response) {
            _this.grounds = response;
            // console.log("Ground Images => ", this.grounds)
            // this.createLeagueTable(response);
        });
    };
    GroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ground',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/ground/ground.html"*/'<!--\n\n  Generated template for the GroundPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ground</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="ground-container">\n\n      <!-- <img src="./assets/imgs/groundImg.png" id="ionic-docs-text"> -->\n\n  </div>\n\n  <div class="display dispaly-ios ">\n\n  <div class="ground-container">\n\n      <ion-row>\n\n          <ion-col col-8>\n\n      <ion-slides>\n\n        <ion-slide col-3 style="background:none" *ngFor="let row of grounds" >\n\n            <!-- <img src="./assets/imgs/groundImg.jpg" id="ionic-docs-text"> -->\n\n        </ion-slide>\n\n        \n\n       \n\n      </ion-slides>\n\n      </ion-col>\n\n      </ion-row>  \n\n  </div>\n\n  </div>\n\n  \n\n  <tabs></tabs>\n\n</ion-content>\n\n<footer></footer>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/ground/ground.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], GroundPage);
    return GroundPage;
}());

//# sourceMappingURL=ground.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JerseyDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as $ from 'jquery';
// declare var $: any;
// declare var jQuery: any;
/**
 * Generated class for the JerseyDefaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JerseyDefaultPage = /** @class */ (function () {
    function JerseyDefaultPage(navCtrl, modalCtrl, navParams, dbProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.dbProvider = dbProvider;
        this.demoJersey = false;
    }
    JerseyDefaultPage.prototype.ngOnInit = function () {
        this.getAllJesreys();
    };
    JerseyDefaultPage.prototype.getAllJesreys = function () {
        var _this = this;
        this.dbProvider.selectGrounds().
            then(function (jerseysArr) {
            _this.jerseys = jerseysArr;
            console.log('jerseysArr', _this.jerseys);
        });
    };
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
    JerseyDefaultPage.prototype.presentPage = function () {
        var modal = this.modalCtrl.create('JerseyAddPage');
        modal.present();
    };
    JerseyDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-jersey-default',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/jersey-default/jersey-default.html"*/'<!--\n\n  Generated template for the JerseyDefaultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<!-- \n\n        <ion-navbar>\n\n            <ion-title>jersey-default</ion-title>\n\n        </ion-navbar> -->\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n         <div class="ground-container">\n\n            <img src="./assets/imgs/groundImg.jpg" id="ionic-docs-text">\n\n        </div> \n\n        <ground></ground>\n\n        <div class="display dispaly-ios ">\n\n            <div class="carousal-container">\n\n                <ion-row>\n\n                    <ion-col col-8>\n\n                        <ion-slides>\n\n                            <ion-slide col-3 style="background:none" *ngFor="let row of jerseys">\n\n                                <img src="http://www.mysoccer11.com/soccer_admin/{{row.playerImg}}" id="ionic-docs-text">\n\n                                <!-- <img src="http://128.199.118.13/soccer11/{{row.playerImg}}" id="ionic-docs-text"> -->\n\n                                <!--src="../../assets/imgs/liver.png"-->\n\n                            </ion-slide>\n\n    \n\n    \n\n                        </ion-slides>\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n                        <img src="./assets/imgs/add-jersey.png" (click)=presentPage()/>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    \n\n        <tabs></tabs>\n\n    </ion-content>\n\n    <footer></footer>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/jersey-default/jersey-default.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], JerseyDefaultPage);
    return JerseyDefaultPage;
}());

//# sourceMappingURL=jersey-default.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/settings/settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToolsPage = /** @class */ (function () {
    function ToolsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ToolsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToolsPage');
    };
    ToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tools',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/tools/tools.html"*/'<!--\n\n  Generated template for the ToolsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tools</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="ground-container">\n\n    <img src="../../assets/imgs/groundImg.jpg" id="ionic-docs-text">\n\n</div>\n\n<div class="display dispaly-ios ">\n\n<div class="">\n\n    <ion-row>\n\n        <ion-col col-12 >\n\n          <ion-segment [(ngModel)]="icons" color="secondary" >\n\n            <ion-segment-button (click)="pushPage(\'Team\')">\n\n            <img id="ionic-docs-text" src="./assets/imgs/arrow.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Jersey\')" >\n\n              <img id="ionic-docs-text" src="./assets/imgs/circle.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Ground\')" >\n\n               <img id="ionic-docs-text" src="./assets/imgs/rectangle.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Tools\')" >\n\n              <img id="ionic-docs-text" src="./assets/imgs/text.png">\n\n              <!-- hammer -->\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Settings\')" >\n\n             <img id="ionic-docs-text" src="./assets/imgs/pencil.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Save\')" >\n\n              <img id="ionic-docs-text" src="./assets/imgs/eraser.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Save\')" >\n\n             <img id="ionic-docs-text" src="./assets/imgs/undo.png">\n\n            </ion-segment-button>\n\n            <ion-segment-button (click)="pushPage(\'Save\')" >\n\n              <img id="ionic-docs-text" src="./assets/imgs/redo.png">\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n    </ion-col>\n\n    </ion-row>  \n\n</div>\n\n</div>\n\n\n\n<tabs></tabs>\n\n</ion-content>\n\n<footer></footer>\n\n\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/tools/tools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ToolsPage);
    return ToolsPage;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    // public filePath: any;
    // public filePathNew: any;
    // public fileObject: any;
    function DatabaseProvider(http, fileObj, sqlite) {
        this.http = http;
        this.fileObj = fileObj;
        this.sqlite = sqlite;
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
    DatabaseProvider.prototype.createDatabaseTables = function () {
        var _this = this;
        // alert('Hello DatabaseProvider Provider');
        this.sqlite.create({
            name: 'soccer11.db',
            location: 'default'
        })
            .then(function (db) {
            // alert("db created");
            //assign created db to var db
            _this.db = db;
            // alert(this.db);
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS league ( id INTEGER PRIMARY KEY, leagueId TEXT, name TEXT, logo TEXT, country TEXT )', {})
                .then(function (res) { return console.log('leage tableExecuted SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS team(id INTEGER PRIMARY KEY,teamId TEXT, leagueId TEXT,  name TEXT, manager TEXT, teamLogo TEXT, managerImage TEXT, jerseyId TEXT )', {})
                .then(function (res) { return console.log('team table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY,teamId TEXT, jerseyId TEXT,  name TEXT, image TEXT, jerseyNo TEXT, isGoalkeeper BOOLEAN,top TEXT,left TEXT,isDeleted TEXT,isDeletedGround TEXT, substitutedPlayers TEXT)', {})
                .then(function (res) { return console.log('player table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE ground ( id INTEGER PRIMARY KEY, groundId TEXT,  image TEXT )', {})
                .then(function (res) { return console.log('ground table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS jersey ( id INTEGER PRIMARY KEY, teamId TEXT, jerseyId TEXT,  playerImg TEXT, goalKeeperImg TEXT, patternId TEXT, primaryColour TEXT, secondaryColour TEXT, jerseyText TEXT, jerseyTextColour TEXT )', {})
                .then(function (res) { return console.log('jersey table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS formation ( id INTEGER PRIMARY KEY, formationText TEXT)', {})
                .then(function (res) { return console.log('formation table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS settingsPlayer ( id INTEGER PRIMARY KEY, playerNumber TEXT)', {})
                .then(function (res) { return console.log('settingsPlayer table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS savedTeams ( id INTEGER PRIMARY KEY, teamId TEXT, opponentId TEXT, formationId TEXT, settingsPlayerId TEXT, appName TEXT,showSubstitue BOOLEAN showManager BOOLEAN)', {})
                .then(function (res) { return console.log('savedTeams table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS formationAdvanced ( id INTEGER PRIMARY KEY, formationId TEXT, topValue TEXT, leftValue TEXT)', {})
                .then(function (res) { return console.log('formationAdvanced table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS lineUp ( id INTEGER PRIMARY KEY, leagueId TEXT,teamId TEXT,team TEXT,logo TEXT, teamName TEXT, time TIME, team_id TEXT)', {})
                .then(function (res) { return console.log('lineUp table Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS lineUpDetails ( id INTEGER PRIMARY KEY , lineUpId TEXT,playerId TEXT,jerseyId TEXT,topValue TEXT, leftValue TEXT, mode TEXT, name TEXT,jerseyNo TEXT,image TEXT,isGoalkeeper BOOLEAN)', {})
                .then(function (res) {
                console.log('lineUpDetails table Executed SQL');
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.insertLeagues = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var league;
            // console.log(this.db);
            for (var i = 0; i < response.length; i++) {
                //   this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?,?)', ['1', 'dfd', 'logo', 'country'])
                _this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?)', [response[i].id, response[i].name, response[i].logo, response[i].country])
                    .then(function (res) {
                    // console.log('Executed insert league SQL', res);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            league = _this.selectFirstleague();
            resolve(league);
        });
    };
    DatabaseProvider.prototype.insertLeagues1 = function (response) {
        var _this = this;
        // alert("inside database");
        return new Promise(function (resolve, reject) {
            var league;
            var activeLeague;
            // alert(this.db);
            if (_this.db) {
                // alert(this.db);
                _this.db.executeSql('delete from league', [])
                    .then(function (res1) {
                    console.log("333");
                    console.log("res1 =>", res1);
                    for (var i = 0; i < response.length; i++) {
                        //   this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?,?)', ['1', 'dfd', 'logo', 'country'])
                        console.log("league name => ", response[i].name);
                        _this.db.executeSql('INSERT INTO league VALUES(NULL,?,?,?,?)', [response[i].id, response[i].name, response[i].logo, response[i].country])
                            .then(function (res) {
                            // console.log('Executed insert league SQL', res);
                        })
                            .catch(function (e) { console.log(e); reject(e); });
                    }
                    activeLeague = localStorage.getItem('activeLeague');
                    if (activeLeague)
                        league = activeLeague;
                    else
                        league = _this.selectFirstleague();
                    resolve(league);
                })
                    .catch(function (e) { console.log("error => ", e); reject(e); });
            }
            else {
                reject();
            }
        });
    };
    DatabaseProvider.prototype.selectFirstleague = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('Select * from league limit 1, 1', [])
                .then(function (res) {
                // console.log('Executed select first league SQL', res)
                if (res.rows.length > 0) {
                    var league = res.rows.item(0).leagueId;
                    resolve(league);
                }
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertTeams = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var teamImageArr = [], team;
            for (var i = 0; i < response.length; i++) {
                teamImageArr.push(response[i].team_image);
                teamImageArr.push(response[i].manager_image);
                _this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
                    .then(function (res) {
                    // console.log('Executed insert team SQL', res)
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            /* Downloading all Team Images*/
            var observableBatch = [];
            teamImageArr.forEach(function (teamImage) {
                observableBatch.push(_this.fileObj.downloadImage(teamImage, 'team/'));
            });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                // console.log('after download', data)
                team = _this.selectFirstTeam();
                resolve(team);
            }, function (err) { return console.error(err); });
            // if(observableBatch.length) {
            //   let that = this;
            //   setTimeout(function () {
            //     Observable.forkJoin(observableBatch);
            //     team = that.selectFirstTeam();
            //     resolve(team);
            //   }, 1500);
            // }
        });
    };
    DatabaseProvider.prototype.insertTeams1 = function (response) {
        var _this = this;
        // console.log("inside insertTeams1");
        return new Promise(function (resolve, reject) {
            var teamImageArr = [], team;
            var activeTeam;
            _this.db.executeSql('delete from team', [])
                .then(function (res1) {
                // alert("deleted teams");
                for (var i = 0; i < response.length; i++) {
                    teamImageArr.push(response[i].team_image);
                    teamImageArr.push(response[i].manager_image);
                    // console.log("Image Inserted");
                    _this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
                        .then(function (res) {
                        console.log('Insert Teams =>Executed insert team SQL', res);
                    })
                        .catch(function (e) { console.log(e); reject(e); });
                }
                /* Downloading all Team Images*/
                var observableBatch = [];
                teamImageArr.forEach(function (teamImage) {
                    observableBatch.push(_this.fileObj.downloadImage(teamImage, 'team/'));
                    // Observable.forkJoin(
                    //   this.fileObj.downloadImage(teamImage, 'team/')
                    // )
                    // .subscribe((res1) => {
                    //   observableBatch.push(res1);
                    //   console.log("Image downloaded");
                    // });
                });
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                    activeTeam = localStorage.getItem('activeTeam');
                    if (activeTeam) {
                        team = activeTeam;
                    }
                    else {
                        team = _this.selectFirstTeam();
                    }
                    resolve(team);
                }, function (err) { console.error("err => ", err); });
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertTeamsNew = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var teamImageArr = [], team;
            for (var i = 0; i < response.length; i++) {
                teamImageArr.push(response[i].team_image);
                teamImageArr.push(response[i].manager_image);
                _this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', [response[i].id, response[i].league_id, response[i].name, response[i].manager, response[i].team_image, response[i].manager_image, response[i].jersey_id])
                    .then(function (res) {
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
        });
    };
    DatabaseProvider.prototype.deleteTeams = function (leagueId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var qry3 = 'DELETE FROM team WHERE leagueId = "' + leagueId + '"';
            _this.db.executeSql(qry3, [])
                .then(function (res3) {
                resolve();
                console.log("success");
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    DatabaseProvider.prototype.selectFirstTeam = function () {
        var _this = this;
        // alert("inside selectFirstTeam");
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('Select * from team limit 1', [])
                .then(function (res) {
                // alert(res.rows.length);
                console.log('Executed select first team SQL', res.rows.item(0).teamId);
                if (res.rows.length > 0) {
                    var team = res.rows.item(0).teamId;
                    resolve(team);
                }
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertPlayers = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var playerImageArr = [], player;
            for (var i = 0; i < response.length; i++) {
                playerImageArr.push(response[i].image);
                _this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?,NULL)', [response[i].team_id, response[i].jersey_id, response[i].name, response[i].image, response[i].jersey_no, response[i].is_goalkeeper, response[i].top, response[i].left, "false", "false"])
                    .then(function (res) {
                    // console.log('Executed insert player SQL');
                    player = res.rows.length;
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            /* Downloading all Player Images*/
            // console.log('playerImageArr', playerImageArr);
            var observableBatch = [];
            playerImageArr.forEach(function (playerImage) {
                // console.log(playerImage);
                observableBatch.push(_this.fileObj.downloadImage(playerImage, 'player/'));
            });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                // console.log('after download', data)
                resolve(player);
            }, function (err) { return console.error(err); });
            // if(observableBatch.length) {
            //   setTimeout(function () {
            //     Observable.forkJoin(observableBatch);
            //     resolve(player);
            //   }, 1500);
            // }
        });
    };
    DatabaseProvider.prototype.selectLeagues = function (leagueId) {
        var _this = this;
        if (leagueId === void 0) { leagueId = null; }
        var qry = 'Select * from league WHERE 1=1 ';
        if (leagueId) {
            qry = qry + " AND leagueId = " + leagueId;
        }
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    // console.log('Executed select all leagueSQL', res)
                    var leagueArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        leagueArr.push({ 'id': res.rows.item(i).leagueId, 'name': res.rows.item(i).name });
                    }
                    resolve(leagueArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectTeams = function (leagueId, teamId) {
        var _this = this;
        if (leagueId === void 0) { leagueId = null; }
        if (teamId === void 0) { teamId = null; }
        var qry = 'Select * from team WHERE 1=1 ';
        if (leagueId) {
            qry = qry + " AND leagueId = " + leagueId;
        }
        if (teamId) {
            qry = qry + " AND id = " + teamId;
        }
        //qry = qry + " LIMIT 1 ";
        var teamArr = [];
        return new Promise(function (resolve, reject) {
            var qry1 = 'SELECT * FROM team';
            _this.db.executeSql(qry1, [])
                .then(function (res) {
                // console.log("user result => ", res);
                for (var i = 0; i < res.rows.length; i++) {
                    console.log(res.rows.item(i));
                }
            })
                .catch(function (e) { console.log(e); reject(e); });
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    for (var i = 0; i < res.rows.length; i++) {
                        teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage, 'jerseyId': res.rows.item(i).jerseyId });
                    }
                    /* Retrieving all Player Images*/
                    var observableBatch = [];
                    if (teamArr.length <= 0) {
                        resolve(teamArr);
                    }
                    else {
                        teamArr.forEach(function (teamItem) {
                            console.log("here");
                            observableBatch.push(_this.fileObj.retrieveImage(teamItem.teamLogo));
                            if (teamItem.teamLogo == null) {
                                teamItem.teamLogo = "./assets/imgs/no-logo.png";
                            }
                            else {
                                teamItem.teamLogo = _this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.teamLogo;
                            }
                            observableBatch.push(_this.fileObj.retrieveImage(teamItem.managerImage));
                            if (teamItem.managerImage == null) {
                                teamItem.managerImage = "./assets/imgs/no-face.png";
                            }
                            else {
                                teamItem.managerImage = _this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.managerImage;
                            }
                        });
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                            resolve(teamArr);
                        }, function (err) { return console.error(err); });
                        // if(observableBatch.length) {
                        //   setTimeout(function () {
                        //     Observable.forkJoin(observableBatch);
                        //     resolve(teamArr);
                        //   }, 1500);
                        // }
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
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
    DatabaseProvider.prototype.selectPlayers = function (teamId) {
        // alert("here");
        var _this = this;
        if (teamId === void 0) { teamId = null; }
        var activeTeamID;
        activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
        if (activeTeamID == "0" || activeTeamID == 0)
            activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
        teamId = activeTeamID;
        var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround,player.substitutedPlayers,jersey.playerImg,jersey.goalKeeperImg from player left join jersey on player.jerseyId = jersey.jerseyId WHERE player.isDeleted="false"';
        // var qry = 'Select * from player where 1=1';
        // var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround from player where 1=1';
        if (teamId) {
            qry = qry + " AND player.teamId = " + teamId;
        }
        qry = qry + " group by player.id";
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    var playerArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        playerArr.push({ 'id': res.rows.item(i).id, 'name': res.rows.item(i).name, 'jerseyId': res.rows.item(i).jerseyId, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'image': res.rows.item(i).image, 'faceImage': res.rows.item(i).image, 'top': res.rows.item(i).top, 'left': res.rows.item(i).left, 'isGoalkeeper': res.rows.item(i).isGoalkeeper, 'playerImg': res.rows.item(i).playerImg, 'goalKeeperImg': res.rows.item(i).goalKeeperImg, 'isDeleted': res.rows.item(i).isDeleted, 'isDeletedGround': res.rows.item(i).isDeletedGround, 'mode': '', 'substitutedPlayers': [] });
                    }
                    /* Retrieving all Player Images*/
                    var observableBatch = [];
                    if (playerArr.length <= 0)
                        resolve(playerArr);
                    else {
                        playerArr.forEach(function (playerItem) {
                            // alert(playerItem.image);
                            observableBatch.push(_this.fileObj.retrieveImage(playerItem.image));
                            // console.log("Player Image => ", playerItem.image);
                            if (playerItem.image == null || playerItem.image == 'no-face.png') {
                                playerItem.faceImage = playerItem.image = "./assets/imgs/no-face.png";
                            }
                            else {
                                playerItem.faceImage = playerItem.image = _this.fileObj.getStorageDirectory() + 'assets/images/player/' + playerItem.image;
                            }
                            playerItem.playerImg = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.playerImg;
                            playerItem.goalKeeperImg = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.goalKeeperImg;
                        });
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                            resolve(playerArr);
                        }, function (err) { return console.error(err); });
                        // if(observableBatch.length) {
                        //   setTimeout(function () {
                        //     Observable.forkJoin(observableBatch);
                        //     resolve(playerArr);
                        //   }, 1500);
                        // }
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectPlayersAfterDelete = function (teamId) {
        var _this = this;
        if (teamId === void 0) { teamId = null; }
        var qry = 'Select player.id, player.name,player.jerseyId, player.jerseyNo, player.teamId, player.image, player.top, player.left, player.isGoalkeeper,player.isDeleted,player.isDeletedGround,jersey.playerImg,jersey.goalKeeperImg from player left join jersey on player.jerseyId = jersey.jerseyId WHERE player.isDeletedGround="false" ';
        if (teamId) {
            qry = qry + " AND player.teamId = " + teamId;
        }
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    var playerArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        playerArr.push({ 'id': res.rows.item(i).id, 'name': res.rows.item(i).name, 'jerseyId': res.rows.item(i).jerseyId, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'image': res.rows.item(i).image, 'faceImage': res.rows.item(i).image, 'top': res.rows.item(i).top, 'left': res.rows.item(i).left, 'isGoalkeeper': res.rows.item(i).isGoalkeeper, 'playerImg': res.rows.item(i).playerImg, 'goalKeeperImg': res.rows.item(i).goalKeeperImg, 'isDeleted': res.rows.item(i).isDeleted, 'isDeletedGround': res.rows.item(i).isDeletedGround, 'mode': '' });
                    }
                    /* Retrieving all Player Images*/
                    var observableBatch = [];
                    if (playerArr.length <= 0)
                        resolve(playerArr);
                    else {
                        playerArr.forEach(function (playerItem) {
                            observableBatch.push(_this.fileObj.retrieveImage(playerItem.image));
                            if (playerItem.image == null) {
                                playerItem.faceImage = playerItem.image = "./assets/imgs/no-face.png";
                            }
                            else {
                                playerItem.faceImage = playerItem.image = _this.fileObj.getStorageDirectory() + 'assets/images/player/' + playerItem.image;
                            }
                            playerItem.playerImg = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.playerImg;
                            playerItem.goalKeeperImg = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + playerItem.goalKeeperImg;
                        });
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                            resolve(playerArr);
                        }, function (err) { return console.error(err); });
                        // if(observableBatch.length) {
                        //   setTimeout(function () {
                        //     Observable.forkJoin(observableBatch);
                        //     resolve(playerArr);
                        //   }, 1500);
                        // }
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.insertGround = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var groundsImageArr = [], grounds;
            for (var i = 0; i < response.length; i++) {
                groundsImageArr.push(response[i].image);
                _this.db.executeSql('INSERT INTO ground VALUES(NULL,?,?)', [response[i].id, response[i].image])
                    .then(function (res) {
                    grounds = res.rows.length;
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            /* Downloading all Ground Images*/
            var observableBatch = [];
            groundsImageArr.forEach(function (groundImage) {
                observableBatch.push(_this.fileObj.downloadImage(groundImage, 'ground/'));
            });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                resolve(grounds);
            }, function (err) { return console.error(err); });
            // if(observableBatch.length) {
            //   setTimeout(function () {
            //     Observable.forkJoin(observableBatch);
            //     resolve(grounds);
            //   }, 1500);
            // }
        });
    };
    DatabaseProvider.prototype.insertGround1 = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('delete from ground', [])
                .then(function (res1) {
                var groundsImageArr = [], grounds;
                for (var i = 0; i < response.length; i++) {
                    groundsImageArr.push(response[i].image);
                    _this.db.executeSql('INSERT INTO ground VALUES(NULL,?,?)', [response[i].id, response[i].image])
                        .then(function (res) {
                        grounds = res.rows.length;
                    })
                        .catch(function (e) { console.log(e); reject(e); });
                }
                /* Downloading all Ground Images*/
                var observableBatch = [];
                groundsImageArr.forEach(function (groundImage) {
                    observableBatch.push(_this.fileObj.downloadImage(groundImage, 'ground/'));
                });
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                    resolve(grounds);
                }, function (err) { return console.error(err); });
                // if(observableBatch.length) {
                //   setTimeout(function () {
                //     Observable.forkJoin(observableBatch);
                //     resolve(grounds);
                //   }, 1500);
                // }
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.selectGroundsCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('Select * from ground ', [])
                .then(function (res) {
                resolve(res.rows.length);
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.selectGrounds = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('Select * from ground ', [])
                .then(function (res) {
                var groundArr = [];
                for (var i = 0; i < res.rows.length; i++) {
                    groundArr.push({ 'id': res.rows.item(i).id, 'image': res.rows.item(i).image });
                }
                /* Retrieving all Ground Images*/
                var observableBatch = [];
                groundArr.forEach(function (groundItem) {
                    observableBatch.push(_this.fileObj.retrieveImage(groundItem.image));
                    groundItem.image = _this.fileObj.getStorageDirectory() + 'assets/images/ground/' + groundItem.image;
                });
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                    resolve(groundArr);
                }, function (err) { return console.error(err); });
                // if(observableBatch.length) {
                //   setTimeout(function () {
                //     Observable.forkJoin(observableBatch);
                //     resolve(groundArr);
                //   }, 1500);
                // }
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertJersey = function (response) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var playerJerseyImageArr = [], jerseys;
            for (var i = 0; i < response.length; i++) {
                playerJerseyImageArr.push(response[i].player_jersey_image);
                playerJerseyImageArr.push(response[i].goalkeeper_jersey_image);
                var activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
                if (!response[i].team_id) {
                    response[i].team_id = activeTeamID;
                }
                _this.db.executeSql('INSERT INTO jersey VALUES(NULL,?,?,?,?," "," "," "," "," ")', [response[i].team_id, response[i].id, response[i].player_jersey_image, response[i].goalkeeper_jersey_image])
                    .then(function (res) {
                    jerseys = res.rows.length;
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            /* Downloading all Jersey Images*/
            var observableBatch = [];
            playerJerseyImageArr.forEach(function (jerseyImage) {
                observableBatch.push(_this.fileObj.downloadImage(jerseyImage, 'jersey/'));
            });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                resolve(jerseys);
            }, function (err) { return console.error(err); });
            // if(observableBatch.length) {
            //   setTimeout(function () {
            //     Observable.forkJoin(observableBatch);
            //     resolve(jerseys);
            //   }, 1500);
            // }
        });
    };
    DatabaseProvider.prototype.addCustomJersey = function (formObjData) {
        var _this = this;
        var activeTeamID;
        activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
        if (activeTeamID == 0 || activeTeamID == "0") {
            activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
        }
        // localStorage.getItem('activeTeamId')
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('INSERT INTO jersey VALUES(NULL,?,?,?,?,?,?,?,?,?)', [activeTeamID, 0, formObjData.playerImg, formObjData.goalKeeperImg, formObjData.patternId, formObjData.primaryColour, formObjData.secondaryColour, formObjData.jerseyText, formObjData.jerseyTextColour])
                .then(function (res) {
                resolve(res);
                console.log("add jersey =>", res);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    DatabaseProvider.prototype.addCustomTeam = function (formObjData, teamImage, managerImage) {
        var _this = this;
        // var qry = 'SELECT * FROM league WHERE name = ' + "'Custom Teams'";
        return new Promise(function (resolve, reject) {
            // console.log(qry);
            // this.db.executeSql(qry, [])
            //   .then((res1) => {
            //     console.log(res1);
            //     for (let i = 0; i < res1.rows.length; i++) {
            //       console.log( res1.rows.item(i).id );
            //       alert( res1.rows.item(i).id );
            //     }
            // this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', ['0', localStorage.getItem('activeLeague'), formObjData.team_name, formObjData.manager_name, teamImage, managerImage, 1])
            _this.db.executeSql('INSERT INTO team VALUES(NULL,?,?,?,?,?,?,?)', ['0', '1', formObjData.team_name, formObjData.manager_name, teamImage, managerImage, 1])
                .then(function (res) {
                // console.log('Executed insert team SQL', res)
                resolve(res);
            })
                .catch(function (e) {
                reject(e);
            });
        });
        // });
    };
    DatabaseProvider.prototype.addCustomPlayer = function (formObjData, playerLogo) {
        var _this = this;
        // alert("player id"); alert(formObjData.teamId);
        var activeTeamID;
        activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
        if (activeTeamID == 0 || activeTeamID == "0") {
            activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
        }
        return new Promise(function (resolve, reject) {
            // this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [formObjData.teamId, '', formObjData.name, playerLogo, formObjData.jerseyNo, formObjData.isGoalkeeper, '', '', 'false', 'false'])
            _this.db.executeSql('INSERT INTO player VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [activeTeamID, '', formObjData.name, playerLogo, formObjData.jerseyNo, formObjData.isGoalkeeper, '', '', 'false', 'false'])
                .then(function (res) {
                resolve(res);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    //this is for swapping
    DatabaseProvider.prototype.updatePlayer = function (player) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('UPDATE player SET jerseyNo = ?, name = ?,image = ? WHERE id =' + player.id, [player.jerseyNo, player.name, player.image])
                .then(function (res) {
                resolve(res);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    // delete player
    DatabaseProvider.prototype.deletePlayer = function (playerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //normal player deleteion
            _this.db.executeSql('DELETE from player WHERE id =' + playerId, [])
                .then(function (res) {
                resolve(res);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    // delete player
    DatabaseProvider.prototype.deletePlayerFromGround = function (playerId, editLineUp, lineUpId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //normal player deleteion
            if (!editLineUp) {
                _this.db.executeSql('UPDATE player SET isDeletedGround = "true" WHERE id =' + playerId, [])
                    .then(function (res) {
                    resolve(res);
                })
                    .catch(function (e) {
                    reject(e);
                });
            }
            else {
                var qry = 'DELETE from lineUpDetails  WHERE  id = ' + lineUpId;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    resolve(res);
                })
                    .catch(function (e) {
                    reject(e);
                });
            }
        });
    };
    DatabaseProvider.prototype.selectJersey = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var jerseyArr = [];
            var activeTeamID;
            activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['teamId'];
            if (activeTeamID == "0" || activeTeamID == 0)
                activeTeamID = JSON.parse(localStorage.getItem('activeTeamDetails'))[0]['id'];
            if (typeof (activeTeamID) != undefined && activeTeamID != '' && activeTeamID != null) {
                // this.db.executeSql('Select * from jersey where teamId = '+localStorage.getItem('activeTeam'), [])
                _this.db.executeSql('Select * from jersey where teamId = ' + activeTeamID, [])
                    .then(function (res) {
                    // console.log("Jersey Response =>", res);
                    for (var i = 0; i < res.rows.length; i++) {
                        // console.log("Jersey Array => ", res.rows.item(i));
                        jerseyArr.push({ 'id': res.rows.item(i).jerseyId, 'team_id': res.rows.item(i).teamId, 'image': res.rows.item(i).playerImg, 'goalKeeper': res.rows.item(i).goalKeeperImg });
                    }
                    /* Retrieving all Jersey Images*/
                    // console.log('jerseyArr', jerseyArr);
                    var observableBatch = [];
                    jerseyArr.forEach(function (jerseyItem) {
                        // console.log('jerseyItem', jerseyItem.image);
                        observableBatch.push(_this.fileObj.retrieveImage(jerseyItem.image));
                        jerseyItem.image = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + jerseyItem.image;
                        jerseyItem.goalKeeper = _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + jerseyItem.goalKeeper;
                    });
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                        // console.log('after retrieval', data)
                        // console.log('jerseyImageArr', jerseyArr);
                        resolve(jerseyArr);
                    }, function (err) { return console.error(err); });
                    // if(observableBatch.length) {
                    //   setTimeout(function () {
                    //     Observable.forkJoin(observableBatch);
                    //     resolve(jerseyArr);
                    //   }, 1500);
                    // }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            else {
                jerseyArr = [];
                resolve(jerseyArr);
            }
        });
    };
    DatabaseProvider.prototype.createInsertJerseyPattern = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('CREATE TABLE jersey_pattern ( id INTEGER PRIMARY KEY, patternName TEXT,  image TEXT )', {})
                .then(function (res) {
                var grounds;
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
                .catch(function (e) { return console.log(e); });
        });
    };
    DatabaseProvider.prototype.selectPatterns = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('Select * from jersey_pattern ', [])
                .then(function (res) {
                /*  console.log('Executed select all ground SQL',res)
                  let groundArr:any=[];
                  for(let i=0;i<res.rows.length;i++){
                   groundArr.push({'id': res.rows.item(i).id,'image':res.rows.item(i).image});
                  }
                  resolve(groundArr);*/
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertFormation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formationArr = ['4-4-2', '4-3-3', '3-4-3', '3-6-1', '3-1-4-2', '3-5-2', '4-1-3-2', '4-1-4-1', '4-2-3-1', '4-2-4', '4-4-1-1', '4-4-2 Diamond', '5-3-2', '5-4-1'];
            for (var i = 0; i < formationArr.length; i++) {
                _this.db.executeSql('INSERT INTO formation VALUES(NULL,?)', [formationArr[i]])
                    .then(function (res) {
                    // console.log('Executed insert formation SQL')
                    resolve(res);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
        });
    };
    DatabaseProvider.prototype.insertSettingsPlayer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql('delete from settingsPlayer', [])
                .then(function (res1) {
                var settingsPlayerArr = ['5', '7', '9', '11'];
                for (var i = 0; i < settingsPlayerArr.length; i++) {
                    _this.db.executeSql('INSERT INTO settingsPlayer VALUES(NULL,?)', [settingsPlayerArr[i]])
                        .then(function (res) {
                        // console.log('Executed insert settingsPlayer SQL')
                        resolve(res);
                    })
                        .catch(function (e) { console.log(e); reject(e); });
                }
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertFormationAdvanced = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formationArr = [
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
            ];
            for (var i = 0; i < formationArr.length; i++) {
                // console.log(formationArr[i])
                _this.db.executeSql('INSERT INTO formationAdvanced VALUES(NULL,?,?,?)', [formationArr[i].formationId, formationArr[i].topVal, formationArr[i].leftval])
                    .then(function (res) {
                    // console.log('Executed insert formationAdvanced SQL')
                    resolve(res);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
        });
    };
    DatabaseProvider.prototype.selectSettingsPlayer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql('Select * from settingsPlayer ', [])
                    .then(function (res) {
                    console.log('Executed select all settingsPlayer SQL', res);
                    var settingsArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        settingsArr.push({ 'id': res.rows.item(i).id, 'playerNumber': res.rows.item(i).playerNumber });
                    }
                    resolve(settingsArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectFormation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql('Select * from formation ', [])
                    .then(function (res) {
                    // console.log('Executed select all formation SQL', res)
                    var formationArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        formationArr.push({ 'id': res.rows.item(i).id, 'formationText': res.rows.item(i).formationText });
                    }
                    resolve(formationArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectFormationAdvanced = function (formationId) {
        var _this = this;
        var qry = 'Select * from formationAdvanced WHERE 1=1 ';
        qry = qry + " AND formationId = " + formationId;
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    console.log('Executed select all formation SQL', res);
                    var formationArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        formationArr.push({ 'id': res.rows.item(i).id, 'formationId': res.rows.item(i).formationId, 'topVal': res.rows.item(i).topValue, 'leftVal': res.rows.item(i).leftValue });
                    }
                    resolve(formationArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectOpponentTeams = function (teamId) {
        var _this = this;
        if (teamId === void 0) { teamId = null; }
        var qry = 'Select * from team WHERE 1=1 ';
        qry = qry + " AND id != " + teamId;
        //qry = qry + " LIMIT 1 ";
        console.log("qry **************************>>>>>>>>", qry);
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    console.log('Executed select all teams SQL', res);
                    var teamArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage });
                    }
                    resolve(teamArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.checkDbExist = function () {
        return this.sqlite.create({
            name: 'soccer11.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.insertLineUp = function (playerDetails) {
        var _this = this;
        // alert(localStorage.getItem('activeTeamId'));
        return new Promise(function (resolve, reject) {
            var league;
            var d = new Date();
            // console.log("playerDetails => ", playerDetails);
            _this.db.executeSql('INSERT INTO lineUp VALUES(NULL,?,?,?,?,?,?,?)', [playerDetails[0].leagueId, playerDetails[0].teamId, playerDetails[0].team, playerDetails[0].logo, playerDetails[0].teamName, d.getTime(), localStorage.getItem('activeTeamId')])
                .then(function (res) {
                // console.log('Executed insert lineup SQL', playerDetails)
                // console.log('Executed last_insert_rowid SQL', res.insertId)
                resolve(res.insertId);
            })
                .catch(function (e) { console.log(e); reject(e); });
        });
    };
    DatabaseProvider.prototype.insertLineUpDetails = function (playerDetails) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var league;
            var d = new Date();
            for (var i = 0; i < playerDetails.length; i++) {
                _this.db.executeSql('INSERT INTO lineUpDetails VALUES(NULL,?,?,?,?,?,?,?,?,?,?)', [playerDetails[i].lineupId, playerDetails[i].playerId, playerDetails[i].jerseyId, playerDetails[i].topval, playerDetails[i].leftval, playerDetails[i].mode, playerDetails[i].name, playerDetails[i].jerseyNo, playerDetails[i].image, playerDetails[i].isGoalkeeper])
                    .then(function (res) {
                })
                    .catch(function (e) { console.log(e); reject(e); });
            }
            if (i == playerDetails.length) {
                console.log(playerDetails.length, 'length');
                resolve(playerDetails.length);
            }
        });
    };
    DatabaseProvider.prototype.selectLineUpCategory = function () {
        var _this = this;
        var qry = 'Select lineUp.id,lineUp.teamId,lineUp.team,lineUp.teamName,lineUp.team_id from lineUp left join team on lineUp.teamId = team.id WHERE 1=1 ';
        // console.log("selectLineUps QRYYYYYYY -----", qry);
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    var lineupArr = [];
                    // if(res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        lineupArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).team, 'teamName': res.rows.item(i).teamName, 'team_id': res.rows.item(i).team_id });
                    }
                    // }
                    /* Retrieving all Player Images*/
                    console.log('lineupCategoryArr', lineupArr);
                    resolve(lineupArr);
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectLineUps = function (teamId) {
        var _this = this;
        var qry = 'Select lineUp.id,lineUp.teamId,lineUp.time,lineUp.team,lineUp.logo,lineUp.teamName,lineUp.team_id from lineUp left join team on lineUp.teamId = team.id WHERE lineUp.teamId= ' + teamId;
        // console.log("selectLineUps QRYYYYYYY -----", qry);
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    // console.log('Executed select lineup SQL', res.rows)
                    var lineupArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        lineupArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).team, 'logo': res.rows.item(i).logo, 'teamName': res.rows.item(i).teamName, 'time': res.rows.item(i).time, 'team_id': res.rows.item(i).team_id });
                    }
                    if (lineupArr.length == res.rows.length) {
                        /* Retrieving all Player Images*/
                        // console.log('lineupArr', lineupArr);
                        resolve(lineupArr);
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectLineUpDetails = function (lineupId) {
        var _this = this;
        var qry = 'select lineupDetails.*,jersey.playerImg,jersey.goalKeeperImg from lineUpDetails  left join  jersey   on lineupDetails.jerseyId = jersey.jerseyId  where lineupDetails.lineUpId = ' + lineupId;
        // console.log("selectLineUps QRYYYYYYY -----", qry);
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    // console.log('Executed select lineup SQL')
                    var lineupArr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        // console.log(res.rows.item(i),'res.rows.item(i)');
                        lineupArr.push({ 'lineupDetailsId': res.rows.item(i).id, 'id': res.rows.item(i).playerId, 'name': res.rows.item(i).name, 'jerseyNo': res.rows.item(i).jerseyNo, 'teamId': res.rows.item(i).teamId, 'faceImage': res.rows.item(i).image, 'image': res.rows.item(i).image, 'top': res.rows.item(i).topValue, 'left': res.rows.item(i).leftValue, 'isGoalkeeper': res.rows.item(i).isGoalkeeper, 'isDeleted': res.rows.item(i).isDeleted, 'playerImg': _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + res.rows.item(i).playerImg, 'goalKeeperImg': _this.fileObj.getStorageDirectory() + 'assets/images/jersey/' + res.rows.item(i).goalKeeperImg, 'mode': res.rows.item(i).mode });
                    }
                    if (lineupArr.length == res.rows.length) {
                        /* Retrieving all Player Images*/
                        // console.log('lineupArr', lineupArr);
                        resolve(lineupArr);
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.selectTeamsFromLineUp = function (lineupId) {
        var _this = this;
        var qry = 'Select team.* from team as team left join lineUp as lineUp on lineUp.teamId = team.id WHERE 1=1 ';
        qry = qry + " AND lineUp.id = " + lineupId;
        //qry = qry + " LIMIT 1 ";
        // console.log("qry **************************>>>>>>>>", qry);
        var teamArr = [];
        return new Promise(function (resolve, reject) {
            _this.checkDbExist().
                then(function (db) {
                //assign created db to var db
                _this.db = db;
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    // console.log('Executed select all teams SQL', res)
                    for (var i = 0; i < res.rows.length; i++) {
                        teamArr.push({ 'id': res.rows.item(i).id, 'teamId': res.rows.item(i).teamId, 'name': res.rows.item(i).name, 'leagueId': res.rows.item(i).leagueId, 'manager': res.rows.item(i).manager, 'teamLogo': res.rows.item(i).teamLogo, 'managerImage': res.rows.item(i).managerImage });
                    }
                    /* Retrieving all Player Images*/
                    // console.log('teamArr', teamArr);
                    var observableBatch = [];
                    if (teamArr.length <= 0) {
                        resolve(teamArr);
                    }
                    else {
                        teamArr.forEach(function (teamItem) {
                            // console.log('teamItem', teamItem.teamLogo);
                            observableBatch.push(_this.fileObj.retrieveImage(teamItem.teamLogo));
                            if (teamItem.teamLogo == null) {
                                teamItem.teamLogo = "./assets/imgs/no-logo.png";
                            }
                            else {
                                teamItem.teamLogo = _this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.teamLogo;
                            }
                            observableBatch.push(_this.fileObj.retrieveImage(teamItem.managerImage));
                            if (teamItem.managerImage == null) {
                                teamItem.managerImage = "./assets/imgs/no-face.png";
                            }
                            else {
                                teamItem.managerImage = _this.fileObj.getStorageDirectory() + 'assets/images/team/' + teamItem.managerImage;
                            }
                        });
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observableBatch).subscribe(function (data) {
                            // console.log('after retrieval', data)
                            // console.log('teamNmanageIMAGEArr', teamArr);
                            resolve(teamArr);
                        }, function (err) { return console.error(err); });
                        // if(observableBatch.length) {
                        //   setTimeout(function () {
                        //     Observable.forkJoin(observableBatch);
                        //     resolve(teamArr);
                        //   }, 1500);
                        // }
                    }
                })
                    .catch(function (e) { console.log(e); reject(e); });
            });
        });
    };
    DatabaseProvider.prototype.deleteAllLineup = function (teamId, subArray, team_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // var qry = 'SELECT * FROM team WHERE teamId = "'+teamId+'"';
            //   this.db.executeSql(qry,[])
            //   .then((result) => {
            //     alert(result.rows.length);
            //   });
            var qry4 = 'DELETE FROM team WHERE id = "' + teamId + '" AND teamId = 0';
            _this.db.executeSql(qry4, []);
            var qry = 'DELETE FROM lineUp WHERE teamId = "' + teamId + '"';
            _this.db.executeSql(qry, [])
                .then(function (res) {
                var qry1 = 'DELETE FROM player WHERE teamId = "' + team_id + '"';
                _this.db.executeSql(qry1, [])
                    .then(function (res1) {
                    var qry2 = 'DELETE FROM jersey WHERE teamId = "' + team_id + '"';
                    _this.db.executeSql(qry2, [])
                        .then(function (res2) {
                        for (var i = 0; i < subArray.length; i++) {
                            var qry3 = 'DELETE FROM lineUpDetails WHERE lineUpId = "' + subArray[i].id + '"';
                            _this.db.executeSql(qry3, [])
                                .then(function (res3) {
                                console.log("success");
                            })
                                .catch(function (e) {
                                reject(e);
                            });
                        }
                        if (i == subArray.length) {
                            resolve(res);
                        }
                    })
                        .catch(function (e) {
                        reject(e);
                    });
                })
                    .catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    DatabaseProvider.prototype.deleteAllLineupExceptCustom = function (teamId, subArray, team_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var qry4 = 'DELETE FROM team WHERE id = "' + teamId + '"';
            _this.db.executeSql(qry4, []);
            var qry = 'DELETE FROM lineUp WHERE teamId = "' + teamId + '"';
            _this.db.executeSql(qry, [])
                .then(function (res) {
                var qry1 = 'DELETE FROM player WHERE teamId = "' + team_id + '"';
                _this.db.executeSql(qry1, [])
                    .then(function (res1) {
                    var qry2 = 'DELETE FROM jersey WHERE teamId = "' + team_id + '"';
                    _this.db.executeSql(qry2, [])
                        .then(function (res2) {
                        for (var i = 0; i < subArray.length; i++) {
                            var qry3 = 'DELETE FROM lineUpDetails WHERE lineUpId = "' + subArray[i].id + '"';
                            _this.db.executeSql(qry3, [])
                                .then(function (res3) {
                                console.log("success");
                            })
                                .catch(function (e) {
                                reject(e);
                            });
                        }
                        if (i == subArray.length) {
                            resolve(res);
                        }
                    })
                        .catch(function (e) {
                        reject(e);
                    });
                })
                    .catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    DatabaseProvider.prototype.deleteLineup = function (lineUpId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var qry = 'DELETE from lineUpDetails  WHERE  lineUpId = "' + lineUpId + '"';
            // console.log(qry);
            _this.db.executeSql(qry, [])
                .then(function (res) {
                // console.log('Executed delete lineupdetails SQL', res)
                var qry = 'DELETE from lineUp  WHERE  id = ' + lineUpId;
                // console.log(qry);
                _this.db.executeSql(qry, [])
                    .then(function (res) {
                    console.log('Executed delete lineup SQL', res);
                    resolve(res);
                })
                    .catch(function (e) {
                    console.log(e);
                    reject(e);
                });
            })
                .catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    DatabaseProvider.prototype.deleteLineupDetails = function (lineUpId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var qry = 'DELETE from lineUpDetails  WHERE  lineUpId = "' + lineUpId + '"';
            // console.log(qry);
            _this.db.executeSql(qry, [])
                .then(function (res) {
                console.log('Executed delete lineupdetails SQL', res);
                resolve(res);
            })
                .catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_file_file__["a" /* FileProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/footer/footer.module": [
		488,
		8
	],
	"../pages/ground/ground.module": [
		489,
		13
	],
	"../pages/jersey-add/jersey-add.module": [
		500,
		7
	],
	"../pages/jersey-default/jersey-default.module": [
		490,
		12
	],
	"../pages/jersey-selection/jersey-selection.module": [
		491,
		6
	],
	"../pages/player-add/player-add.module": [
		493,
		5
	],
	"../pages/player-edit/player-edit.module": [
		492,
		4
	],
	"../pages/settings/settings.module": [
		494,
		11
	],
	"../pages/tabs/tabs.module": [
		495,
		3
	],
	"../pages/team-add/team-add.module": [
		496,
		2
	],
	"../pages/team-default/team-default.module": [
		501,
		10
	],
	"../pages/team-save/team-save.module": [
		497,
		1
	],
	"../pages/team-selection/team-selection.module": [
		498,
		0
	],
	"../pages/tools/tools.module": [
		499,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TeamComponent = /** @class */ (function () {
    function TeamComponent(_SharedService, alertCtrl, toastCtrl, dbProvider) {
        var _this = this;
        this._SharedService = _SharedService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbProvider = dbProvider;
        this.openPlayer = false;
        this.removePlayer = false;
        this.activeTab = '';
        this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        this.teamLogo = this.activeTeamDetails[0].teamLogo;
        this.managerImage = this.activeTeamDetails[0].managerImage;
        this.teamName = this.activeTeamDetails[0].name;
        localStorage.setItem('activeTempPlayerDetails', this.activePlayerDetails);
        this._SharedService.selectPlayerIcon.emit('oldData');
        this._SharedService.substituteMode.subscribe(function (resetVal) {
            _this.activeTab = resetVal;
        });
        this._SharedService.refreshTeamLogo.subscribe(function () {
            _this.teamLogo = '';
            _this.teamName = '';
        });
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SharedService.setOpenPage.subscribe(function (data) {
            // console.log('open page fired')
            if (data == 'false') {
                _this.openPlayer = false;
                // console.log('this.openPlayer',this.openPlayer)
            }
        });
    };
    TeamComponent.prototype.presentPage = function () {
        // let modal = this.modalCtrl.create('TeamAddPage');
        // modal.present();
        if (!this.openPlayer) {
            this.openPlayer = true;
            this._SharedService.showModal.emit("PlayerAddPage");
        }
    };
    TeamComponent.prototype.changePlayer = function (e) {
        if (!this.removePlayer) {
            this.activeTab = e.id;
            this.selectedPlayer = e;
            if (!this.selectedPlayer.isGoalkeeper || this.selectedPlayer.isGoalkeeper == "false") {
                this._SharedService.selectPlayerForSwap.emit(this.selectedPlayer);
            }
            else {
                this._SharedService.selectGoaliForSwap.emit(this.selectedPlayer);
            }
        }
    };
    //show delete button when clicking player
    TeamComponent.prototype.onPlayerClick = function () {
        this.removePlayer = (this.removePlayer == true) ? false : true;
    };
    /// event fired to remove item from ground
    TeamComponent.prototype.onRemoveFromGround = function (player) {
        var goalKeeperArray = [];
        var deleteGoali = false;
        if (player && player.isGoalkeeper == 'true' && player.isGoalkeeper == 1) {
            goalKeeperArray = JSON.parse(localStorage.getItem('goalKeeperWithFace'));
            if (goalKeeperArray.length <= 1) {
                deleteGoali = true;
            }
        }
        if (!deleteGoali) {
            this.presentConfirm('Do you want to delete this player permanently ?', player);
        }
    };
    TeamComponent.prototype.presentConfirm = function (msg, player) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.cancelDeletePlayer();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.onDeletePlayer(player);
                    }
                }
            ]
        });
        alert.present();
    };
    TeamComponent.prototype.cancelDeletePlayer = function () {
        this.removePlayer = false;
    };
    TeamComponent.prototype.onDeletePlayer = function (player) {
        // console.log('Delete clicked');
        var _this = this;
        this.removePlayer = false;
        this.dbProvider.deletePlayer(player.id)
            .then(function (res) {
            _this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then(function (response) {
                // console.log("selectplayers data ---- > ", response);
                var playerList = response;
                localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
                _this._SharedService.refreshPlayers.emit(JSON.parse(localStorage.getItem('activePlayerDetails')));
                _this._SharedService.retrieveData.emit("activePlayerDetails");
                _this.toastCtrl.callToast('Player deleted successfully.');
            });
        });
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/team/team.html"*/'<div class="carousal-container">\n\n    <ion-row>\n\n      <ion-col col-2 class="off-team">\n\n        <div class="top-logo">\n\n          <img *ngIf="teamLogo" src="{{teamLogo}}" id="ionic-docs-text" style="pointer-events:none;height: auto !important;">\n\n          <img *ngIf="!teamLogo" src="././assets/imgs/no-logo.png" id="ionic-docs-text" style="pointer-events:none;height: auto !important;">\n\n          <p class="team-name">{{teamName}}</p>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-8 main-team>\n\n        <!-- <ion-slides>\n\n           <ion-slide col-3 style="background:none;padding: 0 5px;font-size: 1px;" *ngFor="let row of activePlayerDetails"  (click)="changePlayer(row)" ion-long-press [interval]="1000" (onPressStart)="onPlayerClick()" >\n\n             <ion-icon  name="close"  (click)="onRemoveFromGround(row)" *ngIf="removePlayer == true"></ion-icon>\n\n             <img src="{{row.image}}" style="height: 40px;width: 40px;" id="ionic-docs-text" [ngClass]="(activeTab==row.id)?\'activetab\':\'inactivetab\'">\n\n             <label style="font-size:auto;font-family: \'Times New Roman\', Times, serif;color: white;line-height: 1;">{{row.name}}</label>\n\n          </ion-slide>\n\n        </ion-slides> -->\n\n\n\n        <div class="slider_div">\n\n          <ion-icon ios="ios-arrow-back" md="ios-arrow-back" class="slider_back_arrow"></ion-icon>\n\n          <ion-slides slidesPerView="4">\n\n            <ion-slide *ngFor="let row of activePlayerDetails" (click)="changePlayer(row)" ion-long-press [interval]="1000" (onPressStart)="onPlayerClick()" class="div_padding">\n\n                <ion-icon  name="close"  (click)="onRemoveFromGround(row)" *ngIf="removePlayer == true"></ion-icon>\n\n                <img src="{{row.image}}" style="height: 40px;width: 40px;" id="ionic-docs-text" [ngClass]="(activeTab==row.id)?\'activetab\':\'inactivetab\'">\n\n                <label style="font-size:auto;font-family: \'Times New Roman\', Times, serif;color: white;line-height: 1;">{{row.name}}</label>\n\n            </ion-slide>\n\n          </ion-slides>\n\n          <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" class="slider_right_arrow"></ion-icon>\n\n        </div>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-2 class="col-player">\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img (click)=presentPage() src="./assets/imgs/add-player.svg" style="width: 40px;"/>\n\n        <p class="team-name">Add Player</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </div>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/team/team.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], TeamComponent);
    return TeamComponent;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GroundPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GroundPageComponent = /** @class */ (function () {
    function GroundPageComponent(dbProvider, _SharedService) {
        // console.log('Hello GroundPageComponent Component');
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.grounds = [];
    }
    GroundPageComponent.prototype.ngOnInit = function () {
        this.getAllGrounds();
    };
    GroundPageComponent.prototype.getAllGrounds = function () {
        var _this = this;
        this.dbProvider.selectGrounds().
            then(function (groundsArr) {
            _this.grounds = groundsArr;
            // console.log('groundsPageArr',this.grounds);
        });
    };
    GroundPageComponent.prototype.changeGround = function (e) {
        this._SharedService.selectGround.emit(e);
    };
    GroundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ground-page',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/ground-page/ground-page.html"*/'<!-- Generated template for the GroundPageComponent component -->\n\n<ion-footer>\n\n  <div class="bar bar-footer bar-balanced">\n\n    <ion-slides slidesPerView="3">\n\n      <ion-slide col-3 style="background:none" *ngFor="let row of grounds" (click)="changeGround(row)">\n\n           <img src="{{row.image}}" id="ionic-docs-text"> \n\n         \n\n          <!--src="../../assets/imgs/liver.png"-->\n\n      </ion-slide>\n\n\n\n\n\n  </ion-slides>\n\n</div>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/ground-page/ground-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__["a" /* SharedService */]])
    ], GroundPageComponent);
    return GroundPageComponent;
}());

//# sourceMappingURL=ground-page.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dbProvider, _SharedService, ga) {
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.ga = ga;
        this.showManager = true;
        this.showSubstitute = true;
        this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        this.activeTeamName = "";
        this.playerCount = 0;
        this.formation = "0";
        this.ga.trackView('Settings Page');
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.playerCount = localStorage.getItem('playerCount') ? localStorage.getItem('playerCount') : 0;
        this.formation = localStorage.getItem('formation') ? localStorage.getItem('formation') : "0";
        this.showSubstituteVal = localStorage.getItem('showSubstitute');
        if (this.showSubstituteVal == "true" || this.showSubstituteVal == true)
            this.showSubstitute = true;
        else
            this.showSubstitute = false;
        this.showManagerVal = localStorage.getItem('showManager');
        if (this.showManagerVal == "true" || this.showManagerVal == true)
            this.showManager = true;
        else
            this.showManager = false;
        if (this.activeTeamDetails) {
            this.activeTeamName = this.activeTeamDetails[0].name;
        }
        this.getData();
    };
    SettingsComponent.prototype.getData = function () {
        var _this = this;
        //get the formation table
        this.dbProvider.selectFormation().
            then(function (formationArr) {
            _this.formationList = formationArr;
        });
        //get the number of players table
        this.dbProvider.selectSettingsPlayer().
            then(function (settingsArr) {
            _this.numberPlayersList = settingsArr;
        });
        this.dbProvider.selectOpponentTeams(localStorage.getItem('activeTeam')).
            then(function (opponentArr) {
            _this.opponentList = opponentArr;
        });
        this.numberPlayersListNew = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    };
    SettingsComponent.prototype.numberPlayerSelected = function (e) {
        this.playerCount = e;
        e ? localStorage.setItem('playerCount', e) : localStorage.setItem('playerCount', '11');
        this._SharedService.changePlayerCount.emit('changed');
    };
    SettingsComponent.prototype.formationSelected = function (e) {
        this.formation = e;
        localStorage.setItem('formation', e);
        this._SharedService.changeFormation.emit('changed');
    };
    SettingsComponent.prototype.opponentSelected = function (e) {
        localStorage.setItem('opponent', e);
    };
    SettingsComponent.prototype.onShowMananger = function () {
        this.showManager = !this.showManager;
        localStorage.setItem('showManager', JSON.stringify(this.showManager));
        this._SharedService.setManager.emit(this.showManager);
    };
    SettingsComponent.prototype.onShowSubstitute = function () {
        this.showSubstitute = !this.showSubstitute;
        localStorage.setItem('showSubstitute', JSON.stringify(this.showSubstitute));
        this._SharedService.setSubstitute.emit(this.showSubstitute);
    };
    SettingsComponent.prototype.settingsTyping = function () {
        this.lineupName ? localStorage.setItem('LineUpName', this.lineupName) : localStorage.setItem('LineUpName', 'LineUpName');
        this.opponentName ? localStorage.setItem('opponentName', this.opponentName) : localStorage.setItem('opponentName', 'Opponent Name');
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'settings',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/settings/settings.html"*/'<!-- Generated template for the SettingsComponent component -->\n\n<div>\n\n\n\n  <div class="jersey-display">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <!-- <ion-input type="text" value="" placeholder=" Team Name"></ion-input> -->\n\n          <!-- <label>{{activeTeamName}}</label> -->\n\n          <ion-input type="text" value="" placeholder="{{activeTeamName}}" readonly></ion-input>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label  style="padding: 0 0; display: none;">Select Player Count</ion-label>\n\n              <ion-select [(ngModel)]="playerCount" (ionChange)="numberPlayerSelected($event)">\n\n                <!-- <ion-option  value="0" (cancel)="onCancel()" selected >Player Count</ion-option> -->\n\n                <ion-option *ngFor="let players of numberPlayersList" value="{{players.playerNumber}}" (cancel)="onCancel()">{{players.playerNumber}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <div class="selects">\n\n            <ion-checkbox class="checkbox" (ionChange)="onShowSubstitute()" [checked]="showSubstitute"> </ion-checkbox> Show Substitutes \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-4> \n\n          <!-- <ion-input type="text" value="" placeholder="LineUpName" readonly></ion-input>  -->\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label  style="padding: 0 0; display: none;">Select Formation</ion-label>\n\n              <ion-select [(ngModel)]="formation" (ionChange)="formationSelected($event)">\n\n                <!-- <ion-option  value="0" (cancel)="onCancel()" selected >Formation</ion-option> -->\n\n                <ion-option *ngFor="let row of formationList" value="{{row.id}}" (cancel)="onCancel()">{{row.formationText}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <div class="selects">\n\n            <ion-checkbox class="checkbox" (ionChange)="onShowMananger()" [checked]="showManager"> </ion-checkbox> Show Manager </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-4>\n\n            <ion-input [(ngModel)]="opponentName" type="text" value="" placeholder="Opponent Name" (ionChange)="settingsTyping()" ></ion-input>\n\n        </ion-col>\n\n        \n\n        <ion-col col-4>\n\n          <ion-input [(ngModel)]="lineupName" type="text" value="" placeholder="Line Up Name" (ionChange)="settingsTyping()" ></ion-input>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <!-- <ion-segment-button (click)="pushPage(\'Save\')" >\n\n                <img id="ionic-docs-text" src="./assets/imgs/save-button.png">\n\n               \n\n             </ion-segment-button> --> \n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- <ion-row>\n\n        <ion-col col-4>\n\n          <ion-select [(ngModel)]="opponent" (ionChange)="opponentSelected($event)">\n\n            <ion-option *ngFor="let row of opponentList" value="{{row.id}}" (cancel)="onCancel()">{{row.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-input type="text" value="" placeholder="My Soccer11" readonly></ion-input>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <!-- <ion-segment-button (click)="pushPage(\'Save\')" >\n\n                <img id="ionic-docs-text" src="./assets/imgs/save-button.png">\n\n               \n\n             </ion-segment-button> \n\n        </ion-col>\n\n      </ion-row> -->\n\n\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n\n\n\n  </div>\n\n\n\n</div>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_sharedServices__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ToolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(_SharedService) {
        this._SharedService = _SharedService;
        // activeToolName = "Pencil"
        this.activeToolName = '';
        this.showBall = false;
        // console.log('Hello ToolsComponent Component');
        this.text = 'Hello World';
        var tool = localStorage.getItem('activeToolName');
        if (tool)
            this.activeToolName = tool;
        else
            this.activeToolName = '';
        var football = localStorage.getItem("showBall");
        if (football && football != null && football != '') {
            if (football == 'true')
                this.showBall = true;
            else
                this.showBall = false;
        }
        else {
            this.showBall = true;
        }
    }
    ToolsComponent.prototype.pushPage = function (e) {
        // console.log("pushPage ----", e);
        //localStorage.setItem('activeToolName', e);
        if (e != "Eraser" && e != "Undo" && e != "Redo" && e != "Football") {
            // this.activeToolName = e;
            var existingTool = localStorage.getItem('activeToolName');
            if ((e && existingTool == '') || (e && existingTool != e))
                this.activeToolName = e;
            else
                this.activeToolName = '';
        }
        if (e == "Football") {
            var football = localStorage.getItem("showBall");
            if (football && football != null && football != '') {
                if (football == 'true')
                    this.showBall = false;
                else
                    this.showBall = true;
            }
            else {
                this.showBall = true;
            }
        }
        this._SharedService.toolsManagement.emit(e);
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tools',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/tools/tools.html"*/'<!-- Generated template for the ToolsComponent component -->\n\n<!-- <ion-row>\n\n  <ion-col col-12 >\n\n    <ion-segment [(ngModel)]="icons" color="secondary" style="height: 50px !important">\n\n      <ion-segment-button (click)="pushPage(\'Arrow\')" [ngClass]="(activeToolName==\'Arrow\')?\'active\':\'\'" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/arrow.svg">\n\n        <p class="tool_div">Arrow</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Circle\')" [ngClass]="(activeToolName==\'Circle\')?\'active\':\'\'" >\n\n           <img id="ionic-docs-text" src="./assets/imgs/circle.svg">\n\n            <p class="tool_div">Circle</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Rectangle\')" [ngClass]="(activeToolName==\'Rectangle\')?\'active\':\'\'" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/rectangle.svg">\n\n         <p class="tool_div">Rectangle</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Pencil\')" [ngClass]="(activeToolName==\'Pencil\')?\'active\':\'\'" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/pencil.svg">\n\n         <p class="tool_div">Pencil</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Eraser\')" >\n\n         <img id="ionic-docs-text" src="./assets/imgs/eraser.svg">\n\n          <p class="tool_div">Clear</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Undo\')" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/undo.svg">\n\n         <p class="tool_div">Undo</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Redo\')" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/redo.svg">\n\n         <p class="tool_div">Redo</p>\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="pushPage(\'Football\')" [ngClass]="(showBall==true)?\'active\':\'\'" >\n\n        <img id="ionic-docs-text" src="./assets/imgs/football.svg">\n\n        <p class="tool_div"></p>\n\n      </ion-segment-button>\n\n    </ion-segment> \n\n  </ion-col>\n\n</ion-row>   -->\n\n\n\n<div>\n\n  <ion-row class="section_height">\n\n    <ion-col col-2 class="selected">  \n\n      <img *ngIf="activeToolName==\'Arrow\'" class="tool_img" src="./assets/imgs/arrow.svg"/>\n\n      <img *ngIf="activeToolName==\'Circle\'" class="tool_img" src="./assets/imgs/circle.svg"/>\n\n      <img *ngIf="activeToolName==\'Rectangle\'" class="tool_img" src="./assets/imgs/rectangle.svg"/>\n\n      <img *ngIf="activeToolName==\'Pencil\'" class="tool_img" src="./assets/imgs/pencil.svg"/>\n\n    </ion-col>\n\n\n\n    <ion-col col-10 class="outer_div">\n\n      <div class="slider_div">\n\n        <ion-slides slidesPerView="5">\n\n          <ion-slide class="div_padding" (click)="pushPage(\'Arrow\')">\n\n            <img src="./assets/imgs/arrow.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Arrow</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Circle\')">\n\n            <img src="./assets/imgs/circle.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Circle</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Rectangle\')">\n\n            <img src="./assets/imgs/rectangle.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Rectangle</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Pencil\')">\n\n            <img src="./assets/imgs/pencil.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Pencil</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Eraser\')">\n\n            <img src="./assets/imgs/eraser.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Clear</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Undo\')">\n\n            <img src="./assets/imgs/undo.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Undo</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide class="div_padding" (click)="pushPage(\'Redo\')">\n\n            <img src="./assets/imgs/redo.svg" style="height: 26px;width: 26px;" id="ionic-docs-text">\n\n            <label class="text_div">Redo</label>\n\n          </ion-slide>\n\n  \n\n          <ion-slide [ngClass]="(showBall==true)?\'active\':\'div_padding\'" (click)="pushPage(\'Football\')">\n\n            <img src="./assets/imgs/football.svg" style="height: 40px;width: 40px;" id="ionic-docs-text">\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/tools/tools.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_sharedServices__["a" /* SharedService */]])
    ], ToolsComponent);
    return ToolsComponent;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JerseyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JerseyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var JerseyComponent = /** @class */ (function () {
    function JerseyComponent(service, dbProvider, _SharedService, toastCtrl, ga) {
        this.service = service;
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.selectedJersey = localStorage.getItem('activeJersey') ? localStorage.getItem('activeJersey') : '';
        this.goalKeeperImg = localStorage.getItem('goalKeeperImg') ? localStorage.getItem('goalKeeperImg') : '';
        this.ga.trackView('Jersey Page');
        this._SharedService.loadJerseyPage.emit();
        this.getJerseys();
        if (JSON.parse(localStorage.getItem('activePlayerDetails')) && JSON.parse(localStorage.getItem('activePlayerDetails')).length > 0 && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
            // console.log("GroundComponent activePlayerDetails ---", JSON.parse(localStorage.getItem('activePlayerDetails')));
            this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
            //assign the current player jersey
            if (localStorage.getItem('activeJersey') == null) {
                if (this.activePlayerDetails) {
                    for (var i = 0; i <= this.activePlayerDetails.length; i++) {
                        if (this.activePlayerDetails[i].isGoalkeeper == 1) {
                            //this.goalKeeperImg = this.activePlayerDetails[i].goalKeeperImg
                            // console.log('goalKeeperImg', this.goalKeeperImg)
                        }
                        else if (this.activePlayerDetails[i].isGoalkeeper != 1) {
                            //this.selectedJersey = this.activePlayerDetails[i].playerImg
                            // console.log('selectedJersey', this.selectedJersey)
                            break;
                        }
                    }
                    this.setJersey();
                }
            }
        }
        else {
            this.setJersey();
        }
    }
    JerseyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SharedService.refreshJersey.subscribe(function (data) {
            console.log("EMIT JERSEY ");
            _this.getJerseys();
        });
    };
    JerseyComponent.prototype.getJerseys = function () {
        var _this = this;
        this.dbProvider.selectJersey().
            then(function (jerseyArr) {
            _this.jerseys = jerseyArr;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    JerseyComponent.prototype.presentPage = function () {
        // let modal = this.modalCtrl.create('TeamAddPage');
        // modal.present();
        this._SharedService.showModal.emit("JerseyAddPage");
    };
    JerseyComponent.prototype.changeJersey = function (e) {
        // console.log("Here", e);
        this.selectedJersey = e.image;
        this.goalKeeperImg = e.goalKeeper;
        // console.log("setItem - activeJersey2 - ");
        localStorage.setItem('activeJersey', this.selectedJersey);
        localStorage.setItem('activeKeeper', this.goalKeeperImg);
        this._SharedService.selectJersey.emit(localStorage.getItem('activeJersey'));
    };
    JerseyComponent.prototype.setJersey = function () {
        var _this = this;
        if (this.activePlayerDetails) {
            if (this.activePlayerDetails.length > 0) {
                var activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
                var curJersry = activeTeamDetails[0].jerseyId;
                var jerseyArr_1;
                this.dbProvider.selectJersey().
                    then(function (res) {
                    // console.log("SET DEFAULT JERSEY ::: ", res);
                    jerseyArr_1 = res;
                    for (var i = 0; i < jerseyArr_1.length; i++) {
                        var curJersry = activeTeamDetails[0].jerseyId;
                        if (curJersry == jerseyArr_1[i].id) {
                            _this.selectedJersey = jerseyArr_1[i].image;
                            _this.goalKeeperImg = jerseyArr_1[i].goalKeeper;
                            // console.log("SET PLYR JERSEY ::: ", this.selectedJersey);
                            // console.log("SET GK JERSEY ::: ", this.goalKeeperImg);
                        }
                    }
                    localStorage.setItem('activeJersey', _this.selectedJersey);
                    localStorage.setItem('activeKeeper', _this.goalKeeperImg);
                    _this.selectedJersey = localStorage.getItem('activeJersey');
                    _this.goalKeeperImg = localStorage.getItem('activeKeeper');
                    _this._SharedService.selectJersey.emit(localStorage.getItem('activeJersey'));
                    _this.playersList = localStorage.getItem('activePlayerDetails');
                    _this._SharedService.retrieveData.emit(_this.playersList);
                });
            }
        }
    };
    JerseyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jersey',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/jersey/jersey.html"*/'<!-- Generated template for the JerseyComponent component -->\n\n<div class="carousal-container">\n\n  <ion-row>\n\n      <ion-col col-2 class="selected">  <img *ngIf="selectedJersey" style="padding-top: 5px !important; width: 57px; height: 57px;" src="{{selectedJersey}}"/></ion-col>\n\n      <ion-col col-8>\n\n        <div class="slider_div">\n\n            <ion-slides slidesPerView="4">\n\n                <ion-slide *ngFor="let row of jerseys" (click)="changeJersey(row)" style="padding-top: 5px !important;">\n\n                    <img *ngIf="row.image" style="width: 57px; height: 57px;" src="{{row.image}}" id="ionic-docs-text">\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-2>\n\n          <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n          <img src="./assets/imgs/add-jersey.svg" (click)=presentPage()/>\n\n          <p class="team-name">Add Jersey</p>\n\n      </ion-col>\n\n  </ion-row>\n\n</div>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/jersey/jersey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], JerseyComponent);
    return JerseyComponent;
}());

//# sourceMappingURL=jersey.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.initialLoadData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tabNavigation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectGround = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectJersey = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectPlayerIcon = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.retrieveData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshTeams = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshLeagues = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshPlayers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshFooter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshAfterSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setManager = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setSubstitute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeFormation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setOpenPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setOpenTeam = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectPlayerForSwap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveLineUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ediLineUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delLineUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delTeam = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshJersey = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshFooterForLineup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toolsManagement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.substituteMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.afterEditLineUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setEditSaveMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changePlayerCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectPlayerForSwapFromSubstitute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectGoaliForSwap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.shareGroundImages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshTeamLogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadJerseyPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clearCanvas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshDefaultTeams = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clearTeamData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=sharedServices.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_tools__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jersey_default_jersey_default__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ground_ground__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_default_team_default__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_services_toast__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//import { Toast } from '@ionic-native/toast';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, service, dbProvider, loadingController, sanitizer, ga, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.dbProvider = dbProvider;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.ga = ga;
        this.toastCtrl = toastCtrl;
        this.players = [];
        var activeTabname = localStorage.getItem('activeTabName');
        if (activeTabname != null && activeTabname != '' && typeof (activeTabname) != 'undefined')
            this.ga.trackView('About Page');
        // this.loader = this.loadingController.create({ content: "Loading data, please wait..." });
        // this.loader.present();
        this.service.getContent().subscribe(function (response) {
            _this.content = response[0]['content'];
            _this.content = sanitizer.bypassSecurityTrustHtml(_this.content);
            // this.loader.dismissAll();
        }),
            function (error) {
                // this.loader.dismissAll();
            };
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var openSelectLeague = this.navParams.get('openSelectLeague');
        if (openSelectLeague) {
            this.toastCtrl.callToast('Successfully Updated/Deleted');
        }
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.pushPage = function (e) {
        // Team')" >Team</button>
        // <button ion-button (click)="pushPage('Jersey')" >Jersey</button>
        // <button ion-button (click)="pushPage('Ground')" >Ground</button>
        // <button ion-button (click)="pushPage('Tools')" >Tools</button>
        // <button ion-button (click)="pushPage('Settings')" >Settings</button>
        // <button ion-button (click)="pushPage('Save')" >Save</button>
        if (e == "Team") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__team_default_team_default__["a" /* TeamDefaultPage */], {});
        }
        else if (e == "Jersey") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jersey_default_jersey_default__["a" /* JerseyDefaultPage */], {});
        }
        else if (e == "Ground") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ground_ground__["a" /* GroundPage */], {});
        }
        else if (e == "Tools") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tools_tools__["a" /* ToolsPage */], {});
        }
        else if (e == "Settings") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */], {});
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tools_tools__["a" /* ToolsPage */], {});
        }
        // push another page onto the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('this.leagues');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("selectLeague"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "selectLeagueElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/home/home.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n      <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="home">\n\n    <ion-grid>\n\n      <ion-row >\n\n        <ion-col col-12>\n\n          <img src="././assets/imgs/logo.png"/>\n\n          <div [innerHTML]="content" class="content_div"></div>\n\n        </ion-col>\n\n      </ion-row >\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n<footer></footer>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_13__providers_services_toast__["a" /* ToastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider(dbProvider) {
        this.dbProvider = dbProvider;
        // console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getMenus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var menu = [], menuList = [];
            _this.dbProvider.selectLineUpCategory().
                then(function (response) {
                var lineupArr = [];
                lineupArr = response;
                var categories = [];
                // if(lineupArr.length > 0) {
                for (var i = 0; i < lineupArr.length; i++) {
                    var categoryExist = categories.find(function (e) { return e.id === lineupArr[i].teamId; });
                    if (categoryExist === undefined) {
                        // if(lineupArr[i].teamName != '' && lineupArr[i].teamName != undefined)
                        categories.push({ "name": lineupArr[i].name, "id": lineupArr[i].teamId, 'lineupId': lineupArr[i].id, 'teamName': lineupArr[i].teamName, "team_id": lineupArr[i].team_id });
                    }
                    //      items.push({"subcategory":"LineUpName"+lineupArr[i].id +" | "+ lineupArr[i].time,'lineupId':lineupArr[i].id})
                }
                // }
                // if(categories.length > 0) {
                for (var i = 0; i < categories.length; i++) {
                    var items = [];
                    // console.log("item", items);
                    _this.dbProvider.selectLineUps(categories[i].id).
                        then(function (response) {
                        var lineupNewArr = [], items = [], name = '', logo = '', teamId = '', team_id = '';
                        lineupNewArr = response;
                        // console.log("lineupNewArr", lineupNewArr);
                        //clearing all old values
                        localStorage.setItem("subcategory", JSON.stringify(items));
                        localStorage.setItem("categoryName", name);
                        localStorage.setItem("logoMenu", logo);
                        localStorage.setItem("logoTeamID", teamId);
                        localStorage.setItem("logoTeam_ID", team_id);
                        if (lineupNewArr.length > 0) {
                            for (var j = 0; j < lineupNewArr.length; j++) {
                                var time = new Date(lineupNewArr[j].time);
                                var options = { hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true };
                                var timeString = time.toLocaleString('en-US', options);
                                // console.log(timeString)
                                // let LineUpName = localStorage.getItem('LineUpName') ? localStorage.getItem('LineUpName') : "LineUpName";
                                var LineUpName = lineupNewArr[j].teamName ? lineupNewArr[j].teamName : "LineUpName";
                                if (LineUpName == "LineUp") {
                                    LineUpName = LineUpName + lineupNewArr[j].id;
                                    // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                                    items.push({ "subcategory": LineUpName, "time": timeString, "id": lineupNewArr[j].id });
                                    name = lineupNewArr[j].name;
                                    logo = lineupNewArr[j].logo;
                                    teamId = lineupNewArr[j].teamId;
                                    team_id = lineupNewArr[j].team_id;
                                }
                                else if (LineUpName == "Team") {
                                    // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                                    name = lineupNewArr[j].name;
                                    logo = lineupNewArr[j].logo;
                                    teamId = lineupNewArr[j].teamId;
                                    team_id = lineupNewArr[j].team_id;
                                }
                                else {
                                    // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                                    items.push({ "subcategory": LineUpName, "time": timeString, "id": lineupNewArr[j].id });
                                    name = lineupNewArr[j].name;
                                    logo = lineupNewArr[j].logo;
                                    teamId = lineupNewArr[j].teamId;
                                    team_id = lineupNewArr[j].team_id;
                                }
                            }
                        }
                        localStorage.setItem("subcategory", JSON.stringify(items));
                        localStorage.setItem("categoryName", name);
                        localStorage.setItem("logoMenu", logo);
                        localStorage.setItem("logoTeamID", teamId);
                        localStorage.setItem("logoTeam_ID", team_id);
                        // items.push({"subcategory":"LineUpName"+lineupArr[i].id +" | "+ lineupArr[i].time})
                        //  console.log(name);
                        //  console.log("item", items);
                        menu.push({ "category": localStorage.getItem("categoryName"), "teamID": localStorage.getItem("logoTeamID"), "logo": localStorage.getItem("logoMenu"), "subs": JSON.parse(localStorage.getItem("subcategory")), "team_id": localStorage.getItem("logoTeam_ID") });
                    });
                }
                // }
                // console.log("cat", categories);
                // console.log("menu", menu);
                resolve(menu);
                //[{"category":"PC","subs": [{"subcategory":"Processor"}]}
            });
        });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(413);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screenshot__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_long_press__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_cropperjs__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_cordova_plugin_ratio_crop__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_pro__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_market__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tools_tools__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_jersey_default_jersey_default__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ground_ground__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_team_default_team_default__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tabs_tabs__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_rest_rest__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_sqlite__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_absolute_drag_absolute_drag__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_carousel__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_ground_ground__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_ground_page_ground_page__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_settings_settings__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_team_team__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_tools_tools__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_jersey_jersey__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_transfer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_file__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_path__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_services_globalErrorHandler__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_save_save__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_photo_library__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_data_service_data_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_limit_limit__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_base64__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_clipboard__ = __webpack_require__(297);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { UniqueDeviceID } from '@ionic-native/unique-device-id';

//import { routes } from './app.router';






































//import { Keyboard } from '@ionic-native/keyboard';//
var ScreenOrientationMock = /** @class */ (function (_super) {
    __extends(ScreenOrientationMock, _super);
    function ScreenOrientationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScreenOrientationMock.prototype.lock = function (type) {
        return new Promise(function (resolve, reject) {
            resolve("locked");
        });
    };
    return ScreenOrientationMock;
}(__WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */]));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tools_tools__["a" /* ToolsPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tabs_tabs__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_ground_ground__["a" /* GroundComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_jersey_default_jersey_default__["a" /* JerseyDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_ground_ground__["a" /* GroundPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_team_default_team_default__["a" /* TeamDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_32__directives_absolute_drag_absolute_drag__["a" /* AbsoluteDrag */],
                __WEBPACK_IMPORTED_MODULE_35__components_ground_page_ground_page__["a" /* GroundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_settings_settings__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_save_save__["a" /* SaveComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_tools_tools__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_jersey_jersey__["a" /* JerseyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_team_team__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pipes_limit_limit__["a" /* LimitPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/footer/footer.module#FooterPageModule', name: 'FooterPage', segment: 'footer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ground/ground.module#GroundPageModule', name: 'GroundPage', segment: 'ground', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jersey-default/jersey-default.module#JerseyDefaultPageModule', name: 'JerseyDefaultPage', segment: 'jersey-default', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jersey-selection/jersey-selection.module#JerseySelectionPageModule', name: 'JerseySelectionPage', segment: 'jersey-selection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player-edit/player-edit.module#PlayerEditPageModule', name: 'PlayerEditPage', segment: 'player-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player-add/player-add.module#PlayerAddPageModule', name: 'PlayerAddPage', segment: 'player-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-add/team-add.module#TeamAddPageModule', name: 'TeamAddPage', segment: 'team-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-save/team-save.module#TeamSavePageModule', name: 'TeamSavePage', segment: 'team-save', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-selection/team-selection.module#TeamSelectionPageModule', name: 'TeamSelectionPage', segment: 'team-selection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tools/tools.module#ToolsPageModule', name: 'ToolsPage', segment: 'tools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jersey-add/jersey-add.module#JerseyAddPageModule', name: 'JerseyAddPage', segment: 'jersey-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-default/team-default.module#TeamDefaultPageModule', name: 'TeamDefaultPage', segment: 'team-default', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33_angular2_carousel__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_cropperjs__["AngularCropperjsModule"]
                // routes,
                // HttpModule,
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tools_tools__["a" /* ToolsPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tabs_tabs__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_ground_ground__["a" /* GroundComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_jersey_default_jersey_default__["a" /* JerseyDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_ground_ground__["a" /* GroundPage */],
                __WEBPACK_IMPORTED_MODULE_37__components_team_team__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_team_default_team_default__["a" /* TeamDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_35__components_ground_page_ground_page__["a" /* GroundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_settings_settings__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_save_save__["a" /* SaveComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_jersey_jersey__["a" /* JerseyComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_tools_tools__["a" /* ToolsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_44__providers_services_globalErrorHandler__["a" /* GlobalErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_14__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_services_sharedServices__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_42__providers_file_file__["a" /* FileProvider */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_46__providers_services_toast__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_pro__["a" /* AdMobPro */],
                // Keyboard,
                { provide: __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */], useClass: ScreenOrientationMock },
                __WEBPACK_IMPORTED_MODULE_48__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_cordova_plugin_ratio_crop__["a" /* RatioCrop */],
                // UniqueDeviceID,
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_market__["a" /* Market */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.callToast = function (msg) {
        var toast = this.presentToast(msg);
        toast.present();
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
    };
    ToastService.prototype.presentToast = function (message) {
        return this.toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesProvider = /** @class */ (function () {
    // private baseUrl = 'http://128.199.118.13/soccer11/index.php/Soccerapi';
    function ServicesProvider(httpClient) {
        this.httpClient = httpClient;
        //local server    ---  'http://192.168.0.110/soccer11/index.php/Soccerapi'
        //private baseUrl = 'http://192.168.0.110/soccer11/index.php/Soccerapi';
        // private baseUrl = 'http://128.199.118.13/soccer11/index.php/Soccerapi';
        this.baseUrl = 'https://www.mysoccer11.com/soccer_admin/index.php/Soccerapi';
        console.log('Hello ServicesProvider Provider');
    }
    ServicesProvider.prototype.getLeagues = function () {
        // console.log('services');
        return this.httpClient.get(this.baseUrl + '/get_league/');
    };
    ServicesProvider.prototype.getTeamById = function (leagueId) {
        // console.log(leagueId);
        return this.httpClient.get(this.baseUrl + '/get_teams/' + leagueId);
    };
    ServicesProvider.prototype.getPlayerbyTeamId = function (teamId) {
        // console.log(teamId);
        return this.httpClient.get(this.baseUrl + '/get_players/' + teamId);
    };
    ServicesProvider.prototype.getJerseys = function () {
        return this.httpClient.get(this.baseUrl + '/get_jerseys/');
    };
    ServicesProvider.prototype.getJerseysByTeamId = function (teamId) {
        return this.httpClient.get(this.baseUrl + '/get_jerseys_by_team_id/' + teamId);
    };
    ServicesProvider.prototype.getGround = function () {
        return this.httpClient.get(this.baseUrl + '/get_grounds/');
    };
    ServicesProvider.prototype.getContent = function () {
        return this.httpClient.get(this.baseUrl + '/get_dashboard_content/');
    };
    ServicesProvider.prototype.getGroundStatus = function (count, device_id) {
        return this.httpClient.post(this.baseUrl + '/is_change_in_grounds/', { count: count, device_id: device_id });
    };
    ServicesProvider.prototype.insertDeviceID = function (device_id) {
        return this.httpClient.post(this.baseUrl + '/insert_deviceid/', { device_id: device_id });
    };
    ServicesProvider.prototype.addTeam = function (formObjData) {
        // console.log("formObjData ---->>>>--- ", formObjData);
        //return "Responce from add team Services...";
        return this.httpClient.get(this.baseUrl + '/get_grounds/');
    };
    ServicesProvider.prototype.postImage = function (formObjData) {
        // console.log('formObjData', formObjData);
        return this.httpClient.post(this.baseUrl + '/saveImage', JSON.stringify(formObjData));
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_pro__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_market__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_team_default_team_default__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { UniqueDeviceID } from '@ionic-native/unique-device-id';












/*import { FileProvider } from '../providers/file/file'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';*/

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, renderer, splashScreen, service, dbProvider, _SharedService, screenOrientation, loadingController, dataService, alertCtrl, app, element, 
        // public uniqueDeviceID: UniqueDeviceID,
        admob, ga, appRate, market) {
        // this.platform = platform;
        var _this = this;
        this.platform = platform;
        this.renderer = renderer;
        this.service = service;
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.screenOrientation = screenOrientation;
        this.loadingController = loadingController;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.element = element;
        this.admob = admob;
        this.ga = ga;
        this.appRate = appRate;
        this.market = market;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */];
        this.players = [];
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.editLineUpVar = false;
        this.reloadingCount = 0;
        this.tempPlayerDetails = [];
        this.activePlayerWithFace = [];
        this.activePlayerDetails = [];
        this.substitutePlayerDetails = [];
        this.substituteWithFace = [];
        this.goalKeeperArray = [];
        this.goalKeeperWithFace = [];
        this.formationArray = [];
        this.activeTab = '';
        this.showSubstitute = true;
        this.showManager = true;
        this.swapEnabled = false;
        this.swapSubComponent = false;
        this.removePlayer = false;
        this.substituteClicked = false;
        this.jerseyTabSelected = false;
        this.substituteExist = false;
        this.lineupId = '';
        this.playerAddedToGround = [];
        this.playerAddedToSubstitute = null;
        this.substituteAddedToGround = [];
        this.playerCount = 10;
        this.groundPlayerCount = 10;
        this.showBall = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // get current
            // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
            // set to portrait
            if (_this.platform.is('cordova')) {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }
            // console.log('Width: ' + platform.width());
            // console.log('Height: ' + platform.height());
            _this.device_width = platform.width();
            _this.device_length = platform.height();
            if (_this.device_width)
                localStorage.setItem('device_width', _this.device_width);
            if (_this.device_length)
                localStorage.setItem('device_length', _this.device_length);
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
            _this.ga.startTrackerWithId('UA-137694077-2')
                .then(function () {
                // alert('Google analytics is ready now');
                _this.ga.trackView('Home Page');
                // Tracker is ready
                // You can now track pages or set additional information such as AppVersion or UserId
            })
                .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            _this.appRate.preferences.storeAppURL = {
                // ios: '<app_id>',
                android: 'market://details?id=smac.app.soccer',
            };
            _this.appRate.preferences.callbacks = {
                onRateDialogShow: function (callback) {
                    // console.log('rate dialog shown!');
                },
                onButtonClicked: function (buttonIndex, buttonName) {
                    // console.log(buttonName);
                    // console.log('Selected index: -> ' + buttonIndex);
                    if (buttonName == 'Not really' || buttonName == 'Remind Me Later' || buttonName == 'No, Thanks')
                        platform.exitApp();
                }
            };
        });
        var checkLocalStorage = JSON.parse(localStorage.getItem('leagues'));
        if (!checkLocalStorage) {
            this.dbProvider.createDatabaseTables();
            this.getLeagues();
            this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */];
        }
        else {
            var activeTabname = localStorage.getItem('activeTabName');
            if (activeTabname != null && activeTabname != '' && typeof (activeTabname) != 'undefined') {
                this.getLeagues1();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_team_default_team_default__["a" /* TeamDefaultPage */];
                this.loadMenus();
            }
            else {
                this.getLeagues();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */];
            }
        }
        this._SharedService.updateMenu.subscribe(function (res) {
            _this.loadMenus();
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
    MyApp.prototype.exitFromApp = function () {
        this.appRate.promptForRating(true);
        // this.platform.exitApp();
        // return navigator['app'].exitApp();
    };
    // Rate app
    MyApp.prototype.rateApp = function () {
        this.market.open('smac.app.soccer');
    };
    MyApp.prototype.loadMenus = function () {
        var _this = this;
        this.dataService.getMenus()
            .then(function (response) {
            _this.pages = [];
            _this.pages = (response);
            // console.log('menu List',this.pages);
        });
    };
    MyApp.prototype.getLeagues1 = function () {
        this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
        this.loading.present();
        var that = this;
        setTimeout(function () {
            that.service.getLeagues().subscribe(function (response) {
                var arrayLeague = [];
                arrayLeague = response;
                arrayLeague = arrayLeague.filter(function (elem) {
                    return elem.id != 1;
                });
                arrayLeague = arrayLeague.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                var param = {
                    id: 1,
                    name: "Other Teams"
                };
                arrayLeague.push(param);
                if (arrayLeague.length > 0) {
                    localStorage.setItem('leagues', JSON.stringify(arrayLeague));
                    that.dbProvider.insertLeagues1(arrayLeague)
                        .then(function (leagueid) {
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
                        .catch(function (err) {
                        that.loading.dismissAll();
                    });
                }
                else {
                    that.loading.dismissAll();
                }
            }),
                function (error) {
                    that.loading.dismissAll();
                };
            // }, 15000);
        }, 1000);
    };
    MyApp.prototype.getUpdatedLeagues = function () {
        this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
        this.loading.present();
        var that = this;
        setTimeout(function () {
            that.service.getLeagues().subscribe(function (response) {
                var arrayLeague = [];
                arrayLeague = arrayLeague.filter(function (elem) {
                    return elem.id != 1;
                });
                arrayLeague = arrayLeague.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                var param = {
                    id: 1,
                    name: "Other Teams"
                };
                arrayLeague.push(param);
                if (arrayLeague.length > 0) {
                    localStorage.setItem('leagues', JSON.stringify(arrayLeague));
                    that.dbProvider.insertLeagues1(arrayLeague)
                        .then(function (leagueid) {
                        that._SharedService.refreshLeagues.emit();
                        that.loading.dismissAll();
                        var activeLeagueArray = [];
                        activeLeagueArray = JSON.parse(localStorage.getItem('activeLeagueArray'));
                        console.log(activeLeagueArray);
                        for (var _i = 0, activeLeagueArray_1 = activeLeagueArray; _i < activeLeagueArray_1.length; _i++) {
                            var activeLeague = activeLeagueArray_1[_i];
                            console.log(activeLeague);
                            if (activeLeague != 1) {
                                that.getTeamById2(activeLeague);
                            }
                        }
                        localStorage.removeItem('activeLeagueArray');
                    })
                        .catch(function (err) {
                        that.loading.dismissAll();
                    });
                }
                else {
                    that.loading.dismissAll();
                }
            }),
                function (error) {
                    that.loading.dismissAll();
                };
        }, 1000);
    };
    MyApp.prototype.getTeamById1 = function (id) {
        var _this = this;
        this.service.getTeamById(id).subscribe(function (response) {
            var arrayTeam = [];
            arrayTeam = response;
            if (arrayTeam.length > 0) {
                _this.dbProvider.insertTeams1(arrayTeam).
                    then(function (teamid) {
                    _this.loading.dismissAll();
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
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    MyApp.prototype.getTeamById2 = function (id) {
        var _this = this;
        this.service.getTeamById(id).subscribe(function (response) {
            var arrayTeam = [];
            arrayTeam = response;
            if (arrayTeam.length > 0) {
                _this.dbProvider.insertTeamsNew(arrayTeam).
                    then(function (teamid) {
                    _this.loading.dismissAll();
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
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    MyApp.prototype.getLeagues = function () {
        // alert("here");
        this.loading = this.loadingController.create({ content: "Loading data, please wait..." });
        this.loading.present();
        var that = this;
        setTimeout(function () {
            // console.log(that.service);
            that.service.getLeagues().subscribe(function (response) {
                var arrayLeague = [];
                arrayLeague = response;
                arrayLeague = arrayLeague.filter(function (elem) {
                    return elem.id != 1;
                });
                arrayLeague = arrayLeague.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                var param = {
                    id: 1,
                    name: "Other Teams"
                };
                arrayLeague.push(param);
                // console.log("arrayLeague => ", arrayLeague);
                // alert(arrayLeague.length);
                that.dbProvider.insertLeagues1(response)
                    .then(function (leagueid) {
                    // alert("league insertion completed");
                    that.getTeamById(leagueid);
                })
                    .catch(function (err) {
                    that.loading.dismissAll();
                });
            }),
                function (error) {
                    that.loading.dismissAll();
                };
            // }, 20000);
        }, 1000);
    };
    MyApp.prototype.getTeamById = function (id) {
        var _this = this;
        // alert("inside team");
        this.service.getTeamById(id).subscribe(function (response) {
            var arrayTeam = [];
            arrayTeam = response;
            // alert(arrayTeam.length);
            if (arrayTeam.length > 0) {
                _this.dbProvider.insertTeams1(response).
                    then(function (teamid) {
                    // alert("team insertion completed");
                    // this.getPlayerbyTeamId(teamid);
                    _this.updateBasicSettings();
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    MyApp.prototype.saveData = function (response) {
        // this.databaseClass.saveTeam(response);
    };
    MyApp.prototype.updateBasicSettings = function () {
        var _this = this;
        // alert("inside basic settings");
        this.dbProvider.insertFormation().
            then(function (formationLength) {
            // alert("formation insertion completed");
            _this.dbProvider.insertSettingsPlayer().
                then(function (settingsPlayerLength) {
                // alert("settings insertion completed");
                _this.dbProvider.insertFormationAdvanced().
                    then(function (formationLength) {
                    _this.service.getGround().subscribe(function (response) {
                        _this.dbProvider.insertGround1(response).
                            then(function (groundLength) {
                            // alert("ground insertion completed");
                            // this._SharedService.shareGroundImages.emit();
                            _this.loading.dismissAll();
                            _this.loadMenus();
                            /* ---------- */
                            _this.dbProvider.selectLeagues().
                                then(function (leagues) {
                                _this.leagues = leagues;
                                var emitData = {
                                    "key": "league",
                                    "data": _this.leagues
                                };
                                _this._SharedService.initialLoadData.emit(emitData);
                            })
                                .catch(function (err) {
                                _this.loading.dismissAll();
                            });
                            _this.dbProvider.selectTeams().
                                then(function (teams) {
                                _this.teams = teams;
                                // emitData['teams'] =  this.teams;
                                // var emitData = {
                                //   "key":"teams",
                                //   "data":this.teams
                                //   };
                                // this._SharedService.initialLoadData.emit(emitData);
                                //console.log('MyApp teams',this.teams);
                            })
                                .catch(function (err) {
                                _this.loading.dismissAll();
                            });
                            /* ---------- */
                        })
                            .catch(function (err) {
                            _this.loading.dismissAll();
                        });
                    });
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            })
                .catch(function (err) {
                _this.loading.dismissAll();
            });
        })
            .catch(function (err) {
            _this.loading.dismissAll();
        });
    };
    MyApp.prototype.getPlayerbyTeamId = function (id) {
        var _this = this;
        var emitData;
        this.service.getPlayerbyTeamId(id).subscribe(function (response) {
            var arrayPlayers = [];
            arrayPlayers = response;
            // alert("aa");
            // alert(arrayPlayers.length);
            if (arrayPlayers.length > 0) {
                _this.dbProvider.insertPlayers(response).
                    then(function (player) {
                    // alert("bb");
                    _this.service.getGround().subscribe(function (response) {
                        // alert("cc");
                        _this.dbProvider.insertGround(response).
                            then(function (groundLength) {
                            _this._SharedService.shareGroundImages.emit();
                            // alert("dd");
                            _this.service.getJerseys().subscribe(function (response) {
                                // alert("ee");
                                _this.dbProvider.insertJersey(response).
                                    then(function (jerseyLength) {
                                    // alert("ff");
                                    _this.dbProvider.insertFormation().
                                        then(function (formationLength) {
                                        // alert("gg");
                                        _this.dbProvider.insertSettingsPlayer().
                                            then(function (settingsPlayerLength) {
                                            // alert("hh");
                                            _this.dbProvider.insertFormationAdvanced().
                                                then(function (formationLength) {
                                                // alert("ii");
                                                _this.loading.dismissAll();
                                                //loading the lineups
                                                _this.loadMenus();
                                            })
                                                .catch(function (err) {
                                                _this.loading.dismissAll();
                                            });
                                        })
                                            .catch(function (err) {
                                            _this.loading.dismissAll();
                                        });
                                    })
                                        .catch(function (err) {
                                        _this.loading.dismissAll();
                                    });
                                })
                                    .catch(function (err) {
                                    _this.loading.dismissAll();
                                });
                            }),
                                function (error) {
                                    _this.loading.dismissAll();
                                };
                        })
                            .catch(function (err) {
                            _this.loading.dismissAll();
                        });
                    }),
                        function (error) {
                            _this.loading.dismissAll();
                        };
                    _this.dbProvider.selectLeagues().
                        then(function (leagues) {
                        _this.leagues = leagues;
                        var emitData = {
                            "key": "league",
                            "data": _this.leagues
                        };
                        _this._SharedService.initialLoadData.emit(emitData);
                    })
                        .catch(function (err) {
                        _this.loading.dismissAll();
                    });
                    _this.dbProvider.selectTeams().
                        then(function (teams) {
                        _this.teams = teams;
                        // emitData['teams'] =  this.teams;
                        // var emitData = {
                        //   "key":"teams",
                        //   "data":this.teams
                        //   };
                        // this._SharedService.initialLoadData.emit(emitData);
                        //console.log('MyApp teams',this.teams);
                    })
                        .catch(function (err) {
                        _this.loading.dismissAll();
                    });
                    _this.dbProvider.selectPlayers().
                        then(function (players) {
                        _this.players = players;
                        // emitData['players'] =  this.players;
                        // var emitData = {
                        //   "key":"teams",
                        //   "data":this.teams
                        //   };
                        // this._SharedService.initialLoadData.emit(emitData);
                        //console.log('MyApp players',this.players);
                    })
                        .catch(function (err) {
                        _this.loading.dismissAll();
                    });
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    MyApp.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    MyApp.prototype.toggleLevel2 = function (idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        }
        else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    };
    ;
    MyApp.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    MyApp.prototype.isLevel2Shown = function (idx) {
        return this.showLevel2 === idx;
    };
    ;
    MyApp.prototype.editLineUp = function (lineUpId) {
        // console.log('lineUpId',lineUpId)
        this._SharedService.ediLineUp.emit(lineUpId);
    };
    MyApp.prototype.deleteLineUp = function (lineUpId, team_id) {
        // console.log('lineUpId',lineUpId)
        this._SharedService.delLineUp.emit(lineUpId);
    };
    MyApp.prototype.deleteTeam = function (teamId, team_id, subArray) {
        // alert('teamId'); alert(teamId);
        // alert('team_id'); alert(team_id);
        var lineupArray = { 'teamId': teamId, 'subArray': subArray, 'team_id': team_id };
        this._SharedService.delTeam.emit(lineupArray);
    };
    MyApp.prototype.clearTeamData = function () {
        this.presentConfirmClearTeamData('This will remove your downloaded teams and will provide you latest list of Teams/Leagues. There will not be any change to the custom created teams.');
    };
    MyApp.prototype.loadHomePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.presentConfirmClearTeamData = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete/Update',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        console.log(_this.pages);
                        _this.clearTeam().then(function (res) {
                            _this.getLeagues1();
                            _this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */], { openSelectLeague: true });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.clearTeam = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (page.team_id != 0) {
                    // var lineupArray = {'teamId': page.teamID,'subArray': page.subs, 'team_id': page.teamID}
                    _this.onDeleteAllLineUp(page.teamID, page.subs, page.team_id);
                }
            }
            setTimeout(function () {
                window.localStorage.removeItem('leagues');
                resolve();
            }, 2000);
        });
    };
    MyApp.prototype.onDeleteAllLineUp = function (teamId, subArray, team_id) {
        var _this = this;
        this.dbProvider.deleteAllLineup(teamId, subArray, team_id)
            .then(function (res) {
            _this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then(function (response) {
                var playerList = response;
                localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
                // this.dbProvider.selectTeams(1, null).then((data)=>{
                _this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then(function (data) {
                    _this._SharedService.refreshPlayers.emit(response);
                    _this._SharedService.refreshTeams.emit(data);
                    _this.setPlayerSubstiteArray();
                    _this.setActiveTeamData();
                    _this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
                    // if (this.activeTeam.length > 0) {
                    if (localStorage.getItem('activeTeam') == teamId) {
                        _this.activeTeam[0].teamLogo = '';
                        _this.activeTeam[0].name = '';
                        _this.activeTeam[0].managerImage = '';
                        _this.activeTeam[0].manager = '';
                        _this.teamLogo = '';
                        _this.teamName = '';
                        _this.managerLogo = '';
                        _this.managerName = '';
                        _this._SharedService.refreshTeamLogo.emit();
                    }
                    localStorage.setItem('activeTeamDetails', JSON.stringify(_this.activeTeam));
                    localStorage.setItem('activeLeague', '');
                    localStorage.setItem('activeTeam', '');
                    localStorage.setItem('activeTabName', '');
                    _this._SharedService.updateMenu.emit('update menu');
                });
            });
        });
    };
    MyApp.prototype.setPlayerSubstiteArray = function () {
        this.tempPlayerDetails = [];
        this.activePlayerDetails = [];
        this.activePlayerWithFace = [];
        this.substitutePlayerDetails = [];
        this.goalKeeperArray = [];
        this.substitute_goalkeeper = [];
        this.tempPlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        //splitting players into 2 arrays(player and substitute)
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
            // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
            if (this.tempPlayerDetails[i].isDeletedGround == 'false') {
                // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
                if (this.tempPlayerDetails[i].isGoalkeeper != 'true' && this.tempPlayerDetails[i].isGoalkeeper != 1) {
                    // console.log(this.activePlayerDetails.length, 'length')
                    // console.log("-------- Active Player Details --------", this.activePlayerDetails);
                    if (this.activePlayerDetails.length < 10) {
                        this.tempPlayerDetails[i].mode = "active";
                        this.activePlayerDetails.push(this.tempPlayerDetails[i]);
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
                            if (!this.tempPlayerDetails[i].type_of_sub) {
                                this.tempPlayerDetails[i].mode = "substitute";
                                this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
                            }
                        }
                        if (this.substitutePlayerDetails.length == 4) {
                            var found = this.substitutePlayerDetails.some(function (el) { return el.type_of_sub === "goalkeeper"; });
                            if (found == true) {
                                this.tempPlayerDetails[i].mode = "substitute";
                                this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
                            }
                        }
                    }
                    // console.log("substitute Player Details => ", this.substitutePlayerDetails);
                }
            }
        }
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
            // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
            if (this.tempPlayerDetails[i].isDeletedGround == 'false') {
                // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
                if (this.tempPlayerDetails[i].isGoalkeeper == 'true' || this.tempPlayerDetails[i].isGoalkeeper == 1) {
                    // console.log("Goal Keepers => ", this.tempPlayerDetails[i]);
                    if (this.goalKeeperArray.length < 1)
                        this.goalKeeperArray.push(this.tempPlayerDetails[i]);
                    // Set last player in the substitute a goal keeper
                    if (this.goalKeeperArray.length == 1 && (this.goalKeeperArray[0].id != this.tempPlayerDetails[i].id)) {
                        // if (this.substitutePlayerDetails.length == 4 && this.tempPlayerDetails[i]) {
                        if (this.substitutePlayerDetails.length < 5 && this.tempPlayerDetails[i]) {
                            var found = this.substitutePlayerDetails.some(function (el) { return el.type_of_sub === "goalkeeper"; });
                            if (found == false) {
                                this.tempPlayerDetails[i].type_of_sub = "goalkeeper";
                                this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
                                this.substitute_goalkeeper = this.tempPlayerDetails[i];
                            }
                        }
                    }
                }
            }
        }
        localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails));
        localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails));
        localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray));
        // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
        this.getCurrentFormation();
    };
    MyApp.prototype.setActiveTeamData = function () {
        this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
        // console.log('activeTeam in ground', this.activeTeam);
        if (this.activeTeam.length > 0) {
            this.managerLogo = this.activeTeam[0].managerImage;
            this.managerName = this.activeTeam[0].manager;
            this.teamLogo = this.activeTeam[0].teamLogo;
            this.teamName = this.activeTeam[0].name;
        }
    };
    MyApp.prototype.getCurrentFormation = function () {
        var _this = this;
        this.dbProvider.selectFormationAdvanced(localStorage.getItem('formation')).
            then(function (response) {
            _this.formationArray = response;
            // Width: 360 & Height: 616 -> based on this resolution, all other points are marked
            var i = 0;
            _this.activePlayerDetails.forEach(function (playerItem) {
                _this.formationArray[i].leftVal = (parseInt(_this.formationArray[i].leftVal) * _this.device_width) / 360;
                _this.formationArray[i].topVal = (parseInt(_this.formationArray[i].topVal) * _this.device_length) / 616;
                _this.renderer.setElementStyle(_this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'left', _this.formationArray[i].leftVal + 'px');
                _this.renderer.setElementStyle(_this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'top', _this.formationArray[i].topVal + 'px');
                i++;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/app/app.html"*/'<ion-menu [content]="mycontent"  overflow-scroll="true">\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>My Teams</ion-title>\n\n      <ion-buttons right>\n\n        <button ion-button icon-only (click)="exitFromApp()">\n\n          <label>Exit</label>\n\n          <ion-icon name="close-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content scroll=false>\n\n    <div class="ham">\n\n      <!-- <ion-scroll style="width:100%;height:100px" scrollY="true"> -->\n\n        <ion-list scroll="true">\n\n          <ion-item *ngFor="let p of pages; let i=index" text-wrap (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}" class="team-name">\n\n            <div class="team-box">\n\n              <img *ngIf="p.logo" src="{{p.logo}}" style="height: 35px;width: 30px" />\n\n              <img *ngIf="!p.logo" src="././assets/imgs/no-logo.png" style="height: 35px;width: 30px">\n\n              <h4 >\n\n              {{p.category}}\n\n              </h4>\n\n              <ion-icon name="trash" (click)="deleteTeam(p.teamID, p.team_id, p.subs)"></ion-icon>\n\n            </div>\n\n\n\n            <!-- <ion-list *ngIf="isLevel1Shown(\'idx\'+i)" class="team-formation" style="overflow-y:scroll">\n\n              <ion-item *ngFor="let s of p.subs; let i2=index" text-wrap  [ngClass]="{active: isLevel2Shown(\'idx\'+i+\'idx\'+i2)}">\n\n                <div class="team-lineup">\n\n                  <h4>{{s.subcategory}}</h4>\n\n                  <h6> {{s.time}}</h6>\n\n                  <ion-icon name="create" (click)="editLineUp(s.id)"></ion-icon>\n\n                  <ion-icon name="trash" (click)="deleteLineUp(s.id, s.team_id)"></ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </ion-list> -->\n\n          </ion-item>\n\n        </ion-list>\n\n      <!-- </ion-scroll> -->\n\n    </div>\n\n  </ion-content>\n\n\n\n\n\n  <ion-footer menuClose>\n\n    <button class="Updatebtn" color="primary" (click)="clearTeamData()">Update Teams/League</button>\n\n    <ion-toolbar (click)="loadHomePage()" class="about_main">\n\n      <ion-title>About</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_market__["a" /* Market */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_team_default_team_default__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_toast__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';



/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    //leagueDetails = localStorage.getItem('leagueDetails');
    function FooterComponent(navCtrl, modalCtrl, navParams, service, _SharedService, toastCtrl, menuCtrl, dbProvider, loadingController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.service = service;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.dbProvider = dbProvider;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.league = "League";
        this.team = "Team";
        this.openTeam = false;
        this.playerListCount = 0;
        // console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
        this.activeTabnameNew = localStorage.getItem('activeTabName');
        // let view = this.navCtrl.getActive();
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tabname = localStorage.getItem('activeTabName');
            _this.currentPage = _this.navCtrl.getActive().name;
            if (JSON.parse(localStorage.getItem('leagues')) && typeof JSON.parse(localStorage.getItem('leagues')) == "object") {
                _this.leagueDetails = JSON.parse(localStorage.getItem('leagues'));
                _this.league = localStorage.getItem('activeLeague');
                if (_this.league) {
                    _this.getTeamByLeagueId(_this.league);
                }
                if (localStorage.getItem('activeTeam')) {
                    _this.team = localStorage.getItem('activeTeam');
                    _this.getTeamByLeagueId(_this.league);
                }
                // if( localStorage.getItem('activeTeamId') ){
                //   this.team = localStorage.getItem('activeTeamId');
                //   this.getTeamByLeagueId(this.league);
                // }
            }
        }, 1000);
        this._SharedService.initialLoadData.subscribe(function (data) {
            _this.leagueDetails = data.data;
            localStorage.setItem('leagues', JSON.stringify(_this.leagueDetails));
            // this.dbProvider.selectLeagues().then((data)=>{
            //   console.log("selectLeagues data ---- > ", data);
            // })
        });
        this._SharedService.refreshTeams.subscribe(function (data) {
            // console.log("refreshTeams ::: ", data);
            _this.teamsList = data;
        });
        this._SharedService.refreshLeagues.subscribe(function () {
            if (JSON.parse(localStorage.getItem('leagues')) && typeof JSON.parse(localStorage.getItem('leagues')) == "object") {
                _this.leagueDetails = JSON.parse(localStorage.getItem('leagues'));
                _this.league = localStorage.getItem('activeLeague');
                if (_this.league) {
                    _this.getTeamByLeagueId(_this.league);
                    // alert("1");
                    // this.loadNewTeams(this.league);
                }
                if (localStorage.getItem('activeTeam')) {
                    _this.team = localStorage.getItem('activeTeam');
                    _this.getTeamByLeagueId(_this.league);
                    // alert("2");
                    // this.loadNewTeams(this.league);
                }
            }
        });
        this._SharedService.refreshDefaultTeams.subscribe(function (teamId) {
            _this.league = 1;
            _this.team = teamId;
            var leagueId = null;
            _this.dbProvider.selectTeams(leagueId, teamId).then(function (response) {
                localStorage.setItem('activeTeamDetails', JSON.stringify(response));
                _this.clickGo('e');
            });
        });
        this._SharedService.refreshFooterForLineup.subscribe(function (data) {
            // console.log("resfreshfooter",data);
            _this.league = data.leagueId;
            _this.team = data.teamId;
        });
        this._SharedService.setOpenTeam.subscribe(function (data) {
            // console.log('open team fired')
            if (data == 'false') {
                _this.openTeam = false;
                // console.log('this.openTeam',this.openTeam)
            }
        });
    };
    FooterComponent.prototype.presentPage = function () {
        // let modal = this.modalCtrl.create('TeamAddPage');
        // modal.present();
        if (!this.openTeam) {
            this.openTeam = true;
            this._SharedService.showModal.emit("TeamAddPage");
        }
    };
    FooterComponent.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Make Your Team',
            message: 'You have to select a team from drop down to proceed.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log("Clicked OK Button.");
                    }
                }
            ]
        });
        alert.present();
    };
    FooterComponent.prototype.onChange = function (evt) {
        console.log(evt, "wwww");
    };
    FooterComponent.prototype.leagueSelected = function () {
        localStorage.setItem('activeLeague', this.league);
        this.getTeamByLeagueId(this.league);
    };
    FooterComponent.prototype.teamSelected = function (team) {
        var prev_team = localStorage.getItem('activeTeam');
        if (prev_team)
            localStorage.setItem('prev_team', prev_team);
        this.team = team;
        localStorage.setItem('activeTeam', team);
        this.getTeamByTeamId(team);
    };
    FooterComponent.prototype.getTeamByLeagueId = function (leagueId) {
        var _this = this;
        if (leagueId === void 0) { leagueId = null; }
        this.dbProvider.selectLeagues(leagueId).then(function (response) {
            localStorage.setItem('activeLeagueDetails', JSON.stringify(response));
        });
        this.dbProvider.selectTeams(leagueId).then(function (response) {
            _this.teamsList = response;
            if (_this.teamsList.length <= 0) {
                _this.loading = _this.loadingController.create({ content: "Loading data, please wait..." });
                _this.loading.present();
                _this.dbProvider.deleteTeams(leagueId).then(function () {
                    _this.retrieveTeamsByLeagueId(leagueId);
                });
                _this.team = '';
                localStorage.setItem('activeTeam', _this.team);
            }
            else {
                if (leagueId == 1) {
                }
                else {
                    _this.loading = _this.loadingController.create({ content: "Loading data, please wait..." });
                    _this.loading.present();
                    _this.dbProvider.deleteTeams(leagueId).then(function () {
                        _this.loadNewTeams(leagueId);
                    });
                }
            }
        });
    };
    FooterComponent.prototype.loadNewTeams = function (id) {
        var _this = this;
        this.service.getTeamById(id).subscribe(function (response) {
            _this.teamlist = [];
            _this.teamlist = response;
            if (_this.teamlist.length > 0) {
                _this.dbProvider.insertTeams(_this.teamlist).
                    then(function (teamid) {
                    _this.dbProvider.selectTeams(_this.teamlist[0]['league_id'], '').
                        then(function (teamsList) {
                        _this.teamsList = teamsList;
                        console.log(_this.teamsList);
                        _this.loading.dismissAll();
                    })
                        .catch(function (err) {
                        _this.loading.dismissAll();
                    });
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.team = '';
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    FooterComponent.prototype.getTeamByTeamId = function (teamId) {
        var leagueId = null;
        this.dbProvider.selectTeams(leagueId, teamId).then(function (response) {
            localStorage.setItem('activeTeamDetails', JSON.stringify(response));
        });
    };
    FooterComponent.prototype.clickGo = function (e) {
        var prev_team = localStorage.getItem('prev_team');
        var active_team = localStorage.getItem('activeTeam');
        if (active_team && prev_team && prev_team != null && prev_team != 'null' && prev_team != '' && prev_team != 'undefined') {
            if (active_team != prev_team) {
                this._SharedService.clearCanvas.emit();
            }
        }
        this.playerListCount = 0;
        if (this.league && this.team && this.league != "League" && this.team != "Team") {
            if (this.team != '') {
                localStorage.removeItem('activeJersey');
                localStorage.removeItem('activeKeeper');
                localStorage.setItem('activeTabName', 'Team');
                if (localStorage.getItem('activeTeamDetails')) {
                    var activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
                }
                // console.log("activeTeamDetails11 =>", activeTeamDetails);
                if (activeTeamDetails && activeTeamDetails.length > 0) {
                    // if(activeTeamDetails[0].teamId && activeTeamDetails[0].name && activeTeamDetails[0].manager) {
                    if (activeTeamDetails[0].teamId) {
                        this.getTeamByTeamId(this.team);
                        localStorage.setItem('activeTeamId', activeTeamDetails[0].teamId);
                        this.addLineUp(activeTeamDetails[0].teamId);
                        this.getPlayerbyTeamId(activeTeamDetails[0].teamId);
                    }
                    else {
                        localStorage.setItem('activeTeamId', this.team);
                        this.addLineUp(this.team);
                        this.getPlayerbyTeamId(this.team);
                    }
                }
                else {
                    localStorage.setItem('activeTeamId', this.team);
                    this.addLineUp(this.team);
                    this.getPlayerbyTeamId(this.team);
                }
                this._SharedService.setEditSaveMode.emit('Save');
                //this.navCtrl.push(TeamDefaultPage, {    });
            }
            else {
                this.toastCtrl.callToast('Please select a team to move forward.');
            }
        }
        else {
            this.toastCtrl.callToast('Please select a league and team to move forward.');
        }
    };
    FooterComponent.prototype.getPlayerbyTeamId = function (teamId) {
        var _this = this;
        this.playerListCount = this.playerListCount + 1;
        this.dbProvider.selectPlayers(teamId).then(function (response) {
            _this.playersList = response;
            // console.log("Players List => ", this.playersList);
            //check if team created here or from server..teamId=0 for custom team
            var activeTeamId = localStorage.getItem('activeTeamId');
            if (_this.playersList.length <= 0 && activeTeamId != '0') {
                if (_this.playerListCount > 2) {
                    _this.playerListCount = 0;
                    _this.loading.dismissAll();
                    _this.playersList = [];
                    localStorage.setItem('activePlayerDetails', JSON.stringify(_this.playersList));
                    _this._SharedService.shareGroundImages.emit();
                    _this._SharedService.retrieveData.emit(_this.playersList);
                    _this._SharedService.refreshJersey.emit();
                    _this.reRootPage();
                }
                else {
                    _this.loading = _this.loadingController.create({ content: "Loading data, please wait..." });
                    _this.loading.present();
                    _this.retrievePlayerbyTeamId(teamId);
                }
            }
            else {
                localStorage.setItem('activePlayerDetails', JSON.stringify(_this.playersList));
                _this._SharedService.shareGroundImages.emit();
                _this._SharedService.retrieveData.emit(_this.playersList);
                _this._SharedService.refreshJersey.emit();
                _this.reRootPage();
            }
        });
    };
    FooterComponent.prototype.reRootPage = function () {
        if (this.navCtrl.getActive().name == "HomePage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_team_default_team_default__["a" /* TeamDefaultPage */], {});
        }
        else {
            this._SharedService.tabNavigation.emit("Team");
            // localStorage.setItem('activeTabName', 'Team');
            this._SharedService.retrieveData.emit("activePlayerDetails");
            this._SharedService.afterEditLineUp.emit('Team');
            // this._SharedService.clearCanvas.emit();
            localStorage.setItem('prev_team', null);
        }
    };
    FooterComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    FooterComponent.prototype.retrieveTeamsByLeagueId = function (id) {
        var _this = this;
        this.service.getTeamById(id).subscribe(function (response) {
            _this.teamlist = [];
            _this.teamsList = [];
            _this.teamlist = response;
            console.log(_this.teamlist);
            if (_this.teamlist.length > 0) {
                if (localStorage.getItem('activeTeam')) {
                    _this.team = localStorage.getItem('activeTeam');
                }
                _this.dbProvider.insertTeams(_this.teamlist).
                    then(function (teamid) {
                    _this.dbProvider.selectTeams(_this.teamlist[0]['league_id'], '').
                        then(function (teamsList) {
                        _this.teamsList = teamsList;
                        _this.loading.dismissAll();
                    })
                        .catch(function (err) {
                        _this.loading.dismissAll();
                    });
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.team = '';
                _this.loading.dismissAll();
            }
        }),
            function (error) {
                _this.loading.dismissAll();
            };
    };
    FooterComponent.prototype.retrievePlayerbyTeamId = function (id) {
        var _this = this;
        var emitData;
        this.service.getPlayerbyTeamId(id).subscribe(function (response) {
            _this.playersNewList = response;
            if (_this.playersNewList.length) {
                _this.dbProvider.insertPlayers(_this.playersNewList).
                    then(function (player) {
                    // this.getPlayerbyTeamId(id);
                    _this.getJerseysByTeamId(id);
                    // this.loading.dismissAll();
                    // this.reRootPage();
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
                // });
            }
            else {
                localStorage.setItem('activePlayerDetails', JSON.stringify(_this.playersNewList));
                _this._SharedService.retrieveData.emit(_this.playersNewList);
                _this._SharedService.refreshPlayers.emit(_this.playersNewList);
                // this.loading.dismissAll();
                _this.getJerseysByTeamId(id);
            }
        }),
            function (error) {
                _this.loading.dismissAll();
                throw error;
            };
    };
    FooterComponent.prototype.getJerseysByTeamId = function (teamId) {
        var _this = this;
        this.service.getJerseysByTeamId(teamId).subscribe(function (response) {
            _this.jerseyList = response;
            if (_this.jerseyList.length > 0) {
                _this.dbProvider.insertJersey(_this.jerseyList).
                    then(function (player) {
                    _this.getPlayerbyTeamId(teamId);
                    _this.loading.dismissAll();
                    // this.addLineUp(teamId);
                })
                    .catch(function (err) {
                    _this.loading.dismissAll();
                });
            }
            else {
                _this.getPlayerbyTeamId(teamId);
                _this.loading.dismissAll();
                // this.addLineUp(teamId);
            }
        }),
            function (error) {
                _this.loading.dismissAll();
                throw error;
            };
    };
    FooterComponent.prototype.addLineUp = function (teamId) {
        var _this = this;
        var lineUpArray = [];
        var LineUpName = 'Team';
        this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
        lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': this.activeTeam[0].id, 'team': this.activeTeam[0].name, 'logo': this.activeTeam[0].teamLogo, 'teamName': LineUpName });
        this.dbProvider.insertLineUp(lineUpArray)
            .then(function (lineupId) {
            // this.loading.dismissAll();
            _this._SharedService.updateMenu.emit('update menu');
            // this.getPlayerbyTeamId(teamId);
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<ion-footer class="footer_new">\n\n  <div class="bar bar-footer bar-balanced">\n\n   <ion-grid >\n\n      <ion-row>\n\n        <ion-col col-2 class="hamburger padd-top">\n\n          <ion-list >\n\n            <ion-item class="menu_div">\n\n                <button class="menu_button" menuToggle (click)="openMenu()"> <ion-icon name="menu"></ion-icon></button>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n        <ion-col col-3 class="padd-top">\n\n          <ion-list>\n\n            <ion-item>\n\n              <!-- <ion-label *ngIf="league == \'League\' || tabname==null" style="padding: 0 0;">Select Your League</ion-label> -->\n\n              <ion-label *ngIf="league == \'League\' || league==undefined || league==\'\' || league==null" style="padding: 0 0;">Select Your League</ion-label>\n\n              <ion-select #selectLeague [(ngModel)]="league"  (ngModelChange)="leagueSelected()" name="league" >\n\n                <ion-option  *ngFor="let row of leagueDetails" value="{{row.id}}" (cancel)="onCancel()"  >{{row.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n      <ion-col col-3 class="padd-top">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label *ngIf="team == \'Team\' || team==undefined || team==\'\' || team==null">Select Your Team</ion-label>\n\n              <ion-select [(ngModel)]="team" (ngModelChange)="teamSelected(team)" >\n\n                  <ion-option *ngFor="let row of teamsList" value="{{row.id}}" (cancel)="onCancel()" >{{row.name}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n    <ion-col col-2 class="padd-top">\n\n      <!--  <img src="./assets/imgs/go-button-home.png" (click)="clickGo($event)" *ngIf="currentPage == \'HomePage\'" />-->\n\n        <img src="./assets/imgs/go-button.svg" (click)="clickGo($event)"  />\n\n\n\n        <!--<button (click)="clickGo($event)" class="go">Go <br /></button>\n\n        <button  class="team" (click)=presentPage() >Custom <br /> Team</button>-->\n\n    </ion-col>\n\n\n\n    <ion-col col-2 class="padd-top">\n\n    <!--  <img src="./assets/imgs/go-button-home.png" (click)="clickGo($event)" *ngIf="currentPage == \'HomePage\'" />-->\n\n      <img src="./assets/imgs/make-your-team.svg" *ngIf="activeTabnameNew" (click)="presentPage()" />\n\n      <img src="./assets/imgs/make-your-team.svg" *ngIf="!activeTabnameNew" (click)="showAlert()" />\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n  </ion-grid>\n\n</div>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/footer/footer.html"*/
        })
        //@Injectable()
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent(navCtrl, navParams, _SharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._SharedService = _SharedService;
        this.activeTab = localStorage.getItem('activeTabName');
        this.buttonMode = './assets/imgs/save-button.svg';
        // console.log('Hello TabsComponent Component');
        this.text = 'Hello World';
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SharedService.afterEditLineUp.subscribe(function (componentName) {
            localStorage.setItem('activeTabName', componentName);
            _this.activeTab = componentName;
        });
        this._SharedService.setEditSaveMode.subscribe(function (modeText) {
            _this.buttonMode = (modeText == 'Update') ? './assets/imgs/update-button.svg' : './assets/imgs/save-button.svg';
        });
    };
    TabsComponent.prototype.pushPage = function (e) {
        localStorage.setItem('activeTabName', e);
        this.activeTab = e;
        this._SharedService.tabNavigation.emit(e);
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tabs',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/tabs/tabs.html"*/'<div class="tabs-container">\n\n\n\n  <ion-segment [(ngModel)]="icons" color="secondary" >\n\n    <ion-segment-button (click)="pushPage(\'Team\')" [ngClass]="(activeTab==\'Team\')?\'activetab\':\'inactivetab\'" >\n\n      <img id="ionic-docs-text" src="./assets/imgs/team.svg">\n\n      <p>Team</p>\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button (click)="pushPage(\'Jersey\')"  [ngClass]="(activeTab==\'Jersey\')?\'activetab\':\'inactivetab\'" >\n\n      <img id="ionic-docs-text" src="./assets/imgs/jersey.svg">\n\n       <p>Jersey</p>\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button (click)="pushPage(\'Ground\')"  [ngClass]="(activeTab==\'Ground\')?\'activetab\':\'inactivetab\'" >\n\n      <img id="ionic-docs-text" src="./assets/imgs/ground.svg">\n\n       <p>Ground</p>\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button (click)="pushPage(\'Tools\')" [ngClass]="(activeTab==\'Tools\')?\'activetab\':\'inactivetab\'"  >\n\n      <img id="ionic-docs-text" src="./assets/imgs/tools.svg">\n\n       <p>Tools</p>\n\n      <!-- hammer -->\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button (click)="pushPage(\'Settings\')" [ngClass]="(activeTab==\'Settings\')?\'activetab\':\'inactivetab\'"  >\n\n     <img id="ionic-docs-text" src="./assets/imgs/settings.svg">\n\n      <p>Settings</p>\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button (click)="pushPage(\'Save\')"  class="btn_padding">\n\n       <img id="ionic-docs-text" src="{{buttonMode}}">\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__["a" /* SharedService */]])
    ], TabsComponent);
    return TabsComponent;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getLeague = function () {
    };
    RestProvider.prototype.getTeam = function () {
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDrag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbsoluteDrag = /** @class */ (function () {
    function AbsoluteDrag(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    AbsoluteDrag.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    AbsoluteDrag.prototype.handlePan = function (ev) {
        var _this = this;
        // let newLeft = ev.center.x - ev.target.parentElement.getBoundingClientRect().left;
        // let newTop = ev.center.y - ev.target.parentElement.getBoundingClientRect().top;
        if (ev.center.x != 0)
            this.previousXval = ev.center.x;
        if (ev.center.y != 0)
            this.previousYval = ev.center.y;
        // let newLeft = this.previousXval;
        // let newTop = this.previousYval;
        var newLeft = this.previousXval - 21;
        var newTop = this.previousYval - 26;
        this.domCtrl.write(function () {
            _this.renderer.setElementStyle(_this.element.nativeElement, 'left', newLeft + 'px');
            _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('startLeft'),
        __metadata("design:type", Object)
    ], AbsoluteDrag.prototype, "startLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('startTop'),
        __metadata("design:type", Object)
    ], AbsoluteDrag.prototype, "startTop", void 0);
    AbsoluteDrag = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[absolute-drag]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* DomController */]])
    ], AbsoluteDrag);
    return AbsoluteDrag;
}());

//# sourceMappingURL=absolute-drag.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroundComponent = /** @class */ (function () {
    function GroundComponent(navCtrl, navParams, dbProvider, _SharedService, toastCtrl, alertCtrl, element, renderer, domCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.tempPlayerDetails = [];
        this.activePlayerWithFace = [];
        this.activePlayerDetails = [];
        this.substitutePlayerDetails = [];
        this.substituteWithActivePlayer = [];
        this.substituteWithFace = [];
        this.goalKeeperArray = [];
        this.goalKeeperWithFace = [];
        this.formationArray = [];
        this.activeTab = '';
        this.showSubstitute = true;
        this.showManager = true;
        this.swapEnabled = false;
        this.swapSubComponent = false;
        this.removePlayer = false;
        this.substituteClicked = false;
        this.jerseyTabSelected = false;
        this.editLineUp = false;
        this.substituteExist = false;
        this.lineupId = '';
        this.playerAddedToGround = [];
        this.playerAddedToSubstitute = null;
        this.substituteAddedToGround = [];
        this.playerCount = 10;
        this.groundPlayerCount = 10;
        this.showBall = false;
        localStorage.setItem("showBall", 'false');
        this.device_width = localStorage.getItem('device_width');
        this.device_length = localStorage.getItem('device_length');
        this.goali_width = (160 * this.device_width) / 360;
        this.goali_heigth = (355 * this.device_length) / 616;
        this.ball_width = (175 * this.device_width) / 360;
        this.ball_height = (235 * this.device_length) / 616;
    }
    GroundComponent.prototype.enableProdMode = function () { };
    GroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SharedService.toolsManagement.subscribe(function (data) {
            var football = localStorage.getItem("showBall");
            if (football && football != null && football != '') {
                if (football == 'true')
                    _this.showBall = true;
                else
                    _this.showBall = false;
            }
            else {
                _this.showBall = true;
            }
        });
        this.showSubstituteVal = localStorage.getItem('showSubstitute');
        if (this.showSubstituteVal == "true" || this.showSubstituteVal == true)
            this.showSubstitute = true;
        else
            this.showSubstitute = false;
        this.showManagerVal = localStorage.getItem('showManager');
        if (this.showManagerVal == "true" || this.showManagerVal == true)
            this.showManager = true;
        else
            this.showManager = false;
        this.activeTabName = localStorage.getItem('activeTabName');
        setInterval(function () {
            var tempCount = parseInt(localStorage.getItem('playerCount'));
            //console.log('groundPlayerCount ', this.groundPlayerCount, this.activePlayerDetails, tempCount);
            _this.groundPlayerCount = tempCount ? (tempCount - 1) : 10;
            //console.log('groundPlayerCountAfter ', this.groundPlayerCount );
        }, 1000);
        // console.log('Hello GroundComponent Component');
        //set default formation as 4-4-2
        localStorage.setItem('formation', '1');
        //get active players
        if (JSON.parse(localStorage.getItem('activePlayerDetails')) && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
            // console.log("GroundComponent activePlayerDetails ---", JSON.parse(localStorage.getItem('activePlayerDetails')));
            this.setPlayerSubstiteArray();
            // console.log("tempPlayerDetails", this.tempPlayerDetails, "substitutePlayerDetails", this.substitutePlayerDetails);
            this.setActiveTeamData();
        }
        // console.log("12. retrieveData");
        //set manager
        this._SharedService.setManager.subscribe(function (responceType) {
            // console.log('setManager', responceType)
            _this.showManager = responceType;
        });
        //set substitute
        this._SharedService.setSubstitute.subscribe(function (responceType) {
            // console.log('showSubstitute', responceType)
            _this.showSubstitute = responceType;
        });
        //get players on changing the drop down and when new player added
        this._SharedService.retrieveData.subscribe(function (responceType) {
            // console.log("EMMIT PLAYER Ground", responceType);
            // this.substitute_goalkeeper = '';
            _this.editLineUp = false;
            _this.lineupId = '';
            _this.setPlayerSubstiteArray();
            _this.setActiveTeamData();
            _this._SharedService.shareGroundImages.emit();
        });
        //change top left based on formation
        this._SharedService.changeFormation.subscribe(function (responceType) {
            _this.getCurrentFormation();
            // console.log(" formationArray", this.formationArray);
        });
        //display players after selecting jersey
        this._SharedService.selectJersey.subscribe(function (jerseyData) {
            _this.jerseyTabSelected = true;
            // console.log('before this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
            _this.activePlayerDetails.forEach(function (playerItem) {
                if (playerItem.isGoalkeeper != 'true' && playerItem.isGoalkeeper != 1)
                    playerItem.image = localStorage.getItem('activeJersey');
                else
                    playerItem.image = localStorage.getItem('activeKeeper');
                // console.log(" activeJersey", playerItem);
            });
            _this.goalKeeperArray.forEach(function (playerItem) {
                playerItem.image = localStorage.getItem('activeKeeper');
                // console.log(" goalkeeper", playerItem);
            });
            _this.substitutePlayerDetails.forEach(function (playerItem) {
                playerItem.image = localStorage.getItem('activeJersey');
                // console.log(" substitute", playerItem);
            });
            // console.log('after this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
        });
        //display jersey image instead if loaded page is jersey page
        this._SharedService.loadJerseyPage.subscribe(function () {
            _this.activePlayerDetails.forEach(function (playerItem) {
                if (playerItem.isGoalkeeper != 'true' && playerItem.isGoalkeeper != 1) {
                    if (localStorage.getItem('activeJersey'))
                        playerItem.image = localStorage.getItem('activeJersey');
                }
                else {
                    if (localStorage.getItem('activeKeeper'))
                        playerItem.image = localStorage.getItem('activeKeeper');
                }
            });
            _this.goalKeeperArray.forEach(function (playerItem) {
                if (localStorage.getItem('activeKeeper'))
                    playerItem.image = localStorage.getItem('activeKeeper');
            });
            _this.substitutePlayerDetails.forEach(function (playerItem) {
                if (localStorage.getItem('activeJersey'))
                    playerItem.image = localStorage.getItem('activeJersey');
            });
        });
        //display players withh player icon
        this._SharedService.selectPlayerIcon.subscribe(function (jerseyData) {
            _this.jerseyTabSelected = false;
            var i = 0, s = 0, g = 0;
            _this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'));
            _this.substituteWithFace = JSON.parse(localStorage.getItem('substituteWithFace'));
            _this.goalKeeperWithFace = JSON.parse(localStorage.getItem('goalKeeperWithFace'));
            // console.log('SON parse this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
            // console.log('this.activePlayerWithFace', this.activePlayerWithFace)
            _this.activePlayerDetails.forEach(function (playerItem) {
                if (_this.activePlayerWithFace[i] != undefined) {
                    playerItem.image = _this.activePlayerWithFace[i].image;
                }
                // console.log(" activephoto", playerItem);
                i++;
            });
            _this.goalKeeperArray.forEach(function (playerItem) {
                playerItem.image = _this.goalKeeperWithFace[g].image;
                // console.log(" goalKeeperPhoto", playerItem);
            });
            _this.substitutePlayerDetails.forEach(function (playerItem) {
                playerItem.image = _this.substituteWithFace[s].image;
                // console.log("substitute", playerItem);
                s++;
            });
        });
        //select players for swapping
        this._SharedService.selectPlayerForSwap.subscribe(function (selectedPlayerData) {
            var indexExist = false;
            _this.substituteExist = false;
            _this.activePlayerDetails.forEach(function (playerItem) {
                if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
                    indexExist = true;
                    return;
                }
                playerItem.substitutedPlayers.forEach(function (substitutePlayer) {
                    if ((substitutePlayer.id == selectedPlayerData.id) || (substitutePlayer.name == selectedPlayerData.name)) {
                        indexExist = true;
                        return;
                    }
                });
            });
            if (indexExist == true) {
                _this.toastCtrl.callToast('This player is already in the ground.');
                // this._SharedService.substituteMode.emit('none')
                _this.swapEnabled = false;
            }
            else {
                _this.toastCtrl.callToast('Select a player on ground to complete the swap or add as substitute.');
                _this.substitutePlayerDetails.forEach(function (playerItem) {
                    if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
                        _this.substituteExist = true;
                        return;
                    }
                });
                _this.swapEnabled = true; //(this.swapEnabled == true) ? false : true;
                // console.log("this.swapEnabled", this.swapEnabled);
                _this.removePlayer = false;
                _this.playerAddedToGround = selectedPlayerData;
                if (!_this.substituteExist) {
                    _this.swapSubComponent = true;
                    //this.swapEnabled = false
                }
                // console.log("this.substituteExist", this.substituteExist);
                _this.playerAddedToSubstitute = selectedPlayerData;
            }
        });
        this._SharedService.selectPlayerForSwapFromSubstitute.subscribe(function (selectedPlayerData) {
            var indexExist = false;
            _this.substituteExist = false;
            // this.toastCtrl.callToast('This player can be swapped with player in ground.');
            _this.substitutePlayerDetails.forEach(function (playerItem) {
                if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
                    _this.substituteExist = true;
                    return;
                }
                playerItem.substitutedPlayers.forEach(function (substitutePlayer) {
                    if ((substitutePlayer.id == selectedPlayerData.id) || (substitutePlayer.name == selectedPlayerData.name)) {
                        indexExist = true;
                        return;
                    }
                });
            });
            _this.swapEnabled = true; //(this.swapEnabled == true) ? false : true;
            // console.log("this.swapEnabled", this.swapEnabled);
            _this.removePlayer = false;
            _this.playerAddedToGround = selectedPlayerData;
            if (!_this.substituteExist) {
                _this.swapSubComponent = true;
                //this.swapEnabled = false
            }
            // console.log("this.substituteExist", this.substituteExist);
            _this.playerAddedToSubstitute = selectedPlayerData;
        });
        //select goal keeper for swapping
        this._SharedService.selectGoaliForSwap.subscribe(function (selectedPlayerData) {
            var indexExist = false;
            _this.substituteExist = false;
            _this.goalKeeperArray.forEach(function (playerItem) {
                if ((playerItem.id == selectedPlayerData.id) || (playerItem.name == selectedPlayerData.name)) {
                    indexExist = true;
                    return;
                }
            });
            if (indexExist == true) {
                _this.toastCtrl.callToast('This goal keeper is already in the ground.');
                // this._SharedService.substituteMode.emit('none')
                _this.swapEnabled = false;
            }
            else {
                _this.toastCtrl.callToast('This goal keeper can be swapped or add as substitute with another goal keeper.');
                _this.swapEnabled = true; //(this.swapEnabled == true) ? false : true;
                // console.log("this.swapEnabled", this.swapEnabled);
                _this.removePlayer = false;
                _this.playerAddedToGround = selectedPlayerData;
                // console.log("this.substituteExist", this.substituteExist);
                if (!_this.substituteExist) {
                    _this.swapSubComponent = true;
                    //this.swapEnabled = false
                }
                _this.playerAddedToSubstitute = selectedPlayerData;
            }
        });
        //save the lineup details to database in 2 tables(lineup+team table and lineup+playerdetails table)
        this._SharedService.saveLineUp.subscribe(function (responceType) {
            //edit a lineup
            // console.log(this.lineupId, 'this.lineupId');
            if (_this.lineupId != '') {
                _this.editCurrentLineup();
            }
            else {
                _this.addNewLineup();
            }
        });
        //edit lineup
        this._SharedService.ediLineUp.subscribe(function (lineupId) {
            // console.log(" lineupId", lineupId);
            _this.lineupId = lineupId;
            _this._SharedService.setEditSaveMode.emit('Update');
            _this.selectLineUpDetails(lineupId);
        });
        //delete lineup
        this._SharedService.delLineUp.subscribe(function (lineupId) {
            // console.log(" lineupId", lineupId);
            _this.deleteLineupDetails(lineupId);
        });
        //delete all lineups of this team
        this._SharedService.delTeam.subscribe(function (lineArray) {
            // console.log(" teamId", lineArray.teamId, lineArray.subArray);
            _this.deleteAllLineUp(lineArray.teamId, lineArray.subArray, lineArray.team_id);
        });
        //clear team/league data
        this._SharedService.clearTeamData.subscribe(function (lineArray) {
            _this.onDeleteAllLineUpExceptCustoms(lineArray.teamId, lineArray.subArray, lineArray.team_id);
        });
        //change player count
        this._SharedService.changePlayerCount.subscribe(function (selectedCount) {
            _this.playerCount = localStorage.getItem('playerCount');
        });
    };
    GroundComponent.prototype.addNewLineup = function () {
        var _this = this;
        var i = 0, left, top;
        var lineUpArray = [], lineUpDetailsArray = [];
        var LineUpName = localStorage.getItem('LineUpName') ? localStorage.getItem('LineUpName') : "LineUpName";
        // console.log("activeTeam => ", this.activeTeam[0]);
        lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': this.activeTeam[0].id, 'team': this.activeTeam[0].name, 'logo': this.activeTeam[0].teamLogo, 'teamName': LineUpName });
        // console.log("****** ---------------- *******");
        // console.log("lineUpArray => ", lineUpArray);
        this.dbProvider.insertLineUp(lineUpArray)
            .then(function (lineupId) {
            _this.tempPlayerDetails.forEach(function (playerItem) {
                if (playerItem.isDeletedGround == "false") {
                    var activePlayer = (_this.element.nativeElement.querySelector('#active' + playerItem.id.toString())) ? true : false;
                    if (activePlayer) {
                        left = _this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetLeft;
                        top = _this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetTop;
                    }
                    else {
                        left = top = 0;
                    }
                    // console.log('left', left, 'top', top)
                    lineUpDetailsArray.push({ 'lineupId': lineupId, 'playerId': playerItem.id, 'name': playerItem.name, 'image': playerItem.faceImage, 'jerseyNo': playerItem.jerseyNo, 'jerseyId': playerItem.jerseyId, 'topval': top, 'leftval': left, 'mode': playerItem.mode, 'isGoalkeeper': playerItem.isGoalkeeper });
                    i++;
                }
            });
            // console.log('lineUpArray', lineUpDetailsArray)
            _this.dbProvider.insertLineUpDetails(lineUpDetailsArray).then(function (res) {
                _this._SharedService.updateMenu.emit('update menu');
            });
        });
    };
    GroundComponent.prototype.editCurrentLineup = function () {
        var _this = this;
        var i = 0, left, top;
        var lineUpDetailsArray = [];
        // console.log('tempArray', this.tempPlayerDetails)
        this.tempPlayerDetails.forEach(function (playerItem) {
            var activePlayer = (_this.element.nativeElement.querySelector('#active' + playerItem.id.toString())) ? true : false;
            if (activePlayer) {
                left = _this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetLeft;
                top = _this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).offsetTop;
            }
            else {
                left = top = 0;
            }
            // console.log('left', left, 'top', top)
            lineUpDetailsArray.push({ 'lineupId': _this.lineupId, 'playerId': playerItem.id, 'name': playerItem.name, 'image': playerItem.faceImage, 'jerseyNo': playerItem.jerseyNo, 'jerseyId': playerItem.jerseyId, 'topval': top, 'leftval': left, 'mode': playerItem.mode, 'isGoalkeeper': playerItem.isGoalkeeper });
            i++;
        });
        localStorage.setItem('lineUpDetailsArray', JSON.stringify(lineUpDetailsArray));
        this.dbProvider.deleteLineupDetails(this.lineupId)
            .then(function (res) {
            _this.dbProvider.insertLineUpDetails(JSON.parse(localStorage.getItem('lineUpDetailsArray'))).then(function (res) {
                _this._SharedService.updateMenu.emit('update menu');
            });
        });
    };
    GroundComponent.prototype.deleteLineupDetails = function (lineupId) {
        this.presentConfirmLineUpDel('Do you want to delete this Line Up?', lineupId);
    };
    GroundComponent.prototype.deleteAllLineUp = function (teamId, subArray, team_id) {
        this.presentConfirmLineUpAllDel('Do you want to delete all the Line Ups and data related to this team?', teamId, subArray, team_id);
    };
    GroundComponent.prototype.clearTeamData = function () {
        console.log('button clicked');
        this.presentConfirmClearTeamData('This will remove your downloaded teams and will provide you latest list of Teams/Leagues. There will not be any change to the custom created teams.');
    };
    GroundComponent.prototype.selectLineUpDetails = function (lineupId) {
        var _this = this;
        this.dbProvider.selectLineUpDetails(lineupId).then(function (res) {
            var playerList = res;
            // localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
            _this.editLineUp = true;
            _this.dbProvider.selectTeamsFromLineUp(lineupId).then(function (response) {
                localStorage.setItem('activeTeamDetails', JSON.stringify(response));
                //Reflect this change in footer for team selction and league selection
                var currentLineUp = JSON.parse(localStorage.getItem('activeTeamDetails'));
                if (currentLineUp.length > 0) {
                    var currentLeagueTeamArray = { 'leagueId': currentLineUp[0].leagueId, 'teamId': currentLineUp[0].id };
                    _this.managerLogo = currentLineUp[0].managerImage;
                    _this.managerName = currentLineUp[0].manager;
                    _this.teamLogo = currentLineUp[0].teamLogo;
                    _this.teamName = currentLineUp[0].name;
                    _this._SharedService.refreshFooterForLineup.emit(currentLeagueTeamArray);
                    _this._SharedService.afterEditLineUp.emit('Team');
                    _this.setPlayerSubstiteArrayOnEdit();
                }
            });
        });
    };
    GroundComponent.prototype.setActiveTeamData = function () {
        this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
        // console.log('activeTeam in ground', this.activeTeam);
        if (this.activeTeam.length > 0) {
            this.managerLogo = this.activeTeam[0].managerImage;
            this.managerName = this.activeTeam[0].manager;
            this.teamLogo = this.activeTeam[0].teamLogo;
            this.teamName = this.activeTeam[0].name;
        }
    };
    GroundComponent.prototype.setPlayerSubstiteArray = function () {
        this.tempPlayerDetails = [];
        this.activePlayerDetails = [];
        this.activePlayerWithFace = [];
        this.substitutePlayerDetails = [];
        this.goalKeeperArray = [];
        this.substitute_goalkeeper = [];
        this.tempPlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        //splitting players into 2 arrays(player and substitute)
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
            // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
            if (this.tempPlayerDetails[i].isDeletedGround == 'false') {
                // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
                if (this.tempPlayerDetails[i].isGoalkeeper != 'true' && this.tempPlayerDetails[i].isGoalkeeper != 1) {
                    // console.log(this.activePlayerDetails.length, 'length')
                    // console.log("-------- Active Player Details --------", this.activePlayerDetails);
                    if (this.activePlayerDetails.length < 10) {
                        this.tempPlayerDetails[i].mode = "active";
                        this.activePlayerDetails.push(this.tempPlayerDetails[i]);
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
                            if (!this.tempPlayerDetails[i].type_of_sub) {
                                this.tempPlayerDetails[i].mode = "substitute";
                                this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
                            }
                        }
                        if (this.substitutePlayerDetails.length == 4) {
                            var found = this.substitutePlayerDetails.some(function (el) { return el.type_of_sub === "goalkeeper"; });
                            if (found == true) {
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
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            // console.log("Temp Player Details => ", i, this.tempPlayerDetails[i]);
            // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
            if (this.tempPlayerDetails[i].isDeletedGround == 'false') {
                // console.log("Is goalkeeper => ", this.tempPlayerDetails[i].isGoalkeeper);
                if (this.tempPlayerDetails[i].isGoalkeeper == 'true' || this.tempPlayerDetails[i].isGoalkeeper == 1) {
                    // console.log("Goal Keepers => ", this.tempPlayerDetails[i]);
                    if (this.goalKeeperArray.length < 1)
                        this.goalKeeperArray.push(this.tempPlayerDetails[i]);
                    // Set last player in the substitute a goal keeper
                    if (this.goalKeeperArray.length == 1 && (this.goalKeeperArray[0].id != this.tempPlayerDetails[i].id)) {
                        // if (this.substitutePlayerDetails.length == 4 && this.tempPlayerDetails[i]) {
                        if (this.substitutePlayerDetails.length < 5 && this.tempPlayerDetails[i]) {
                            var found = this.substitutePlayerDetails.some(function (el) { return el.type_of_sub === "goalkeeper"; });
                            if (found == false) {
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
        localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails));
        localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails));
        localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray));
        // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
        this.getCurrentFormation();
    };
    GroundComponent.prototype.setPlayerSubstiteArrayOnEdit = function () {
        this.jerseyTabSelected = false;
        this.tempPlayerDetails = [];
        this.activePlayerDetails = [];
        this.activePlayerWithFace = [];
        this.substitutePlayerDetails = [];
        this.goalKeeperArray = [];
        var activePlayerCount = 0, substituteCount = 0;
        this.tempPlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            if (this.tempPlayerDetails[i].mode == 'active')
                activePlayerCount++;
            else if (this.tempPlayerDetails[i].mode == 'substitute')
                substituteCount++;
        }
        //splitting players into 2 arrays(player and substitute)
        for (var i = 0; i < this.tempPlayerDetails.length; i++) {
            // console.log("Temp Player Details => ", this.tempPlayerDetails[i]);
            // console.log(this.tempPlayerDetails[i].isGoalkeeper, 'keeperval')
            if (this.tempPlayerDetails[i].isGoalkeeper != 'true' && this.tempPlayerDetails[i].isGoalkeeper != 1) {
                // console.log('activePlayerCount', activePlayerCount)
                if (this.activePlayerDetails.length < activePlayerCount) {
                    if (this.tempPlayerDetails[i].mode == 'active')
                        this.activePlayerDetails.push(this.tempPlayerDetails[i]);
                }
                else {
                    if (this.substitutePlayerDetails.length < substituteCount) {
                        if (this.tempPlayerDetails[i].mode == 'substitute')
                            this.substitutePlayerDetails.push(this.tempPlayerDetails[i]);
                    }
                }
            }
            else {
                if (this.goalKeeperArray.length < 1) {
                    this.goalKeeperArray.push(this.tempPlayerDetails[i]);
                    //  console.log('this.goalKeeperArray', this.goalKeeperArray)
                }
            }
        }
        localStorage.setItem('activePlayerWithFace', JSON.stringify(this.activePlayerDetails));
        localStorage.setItem('substituteWithFace', JSON.stringify(this.substitutePlayerDetails));
        localStorage.setItem('goalKeeperWithFace', JSON.stringify(this.goalKeeperArray));
        //this._SharedService.refreshPlayers.emit(JSON.parse(localStorage.getItem('activeTempPlayerDetails')));
        // console.log('this.activePlayerWithFace', JSON.parse(localStorage.getItem('activePlayerWithFace')))
    };
    GroundComponent.prototype.getCurrentFormation = function () {
        var _this = this;
        this.dbProvider.selectFormationAdvanced(localStorage.getItem('formation')).
            then(function (response) {
            console.log(response);
            _this.formationArray = response;
            // Width: 360 & Height: 616 -> based on this resolution, all other points are marked
            var i = 0;
            _this.activePlayerDetails.forEach(function (playerItem) {
                if (_this.element.nativeElement.querySelector('#active' + playerItem.id.toString()) != null) {
                    _this.formationArray[i].leftVal = (parseInt(_this.formationArray[i].leftVal) * _this.device_width) / 360;
                    _this.formationArray[i].topVal = (parseInt(_this.formationArray[i].topVal) * _this.device_length) / 616;
                    _this.renderer.setElementStyle(_this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'left', _this.formationArray[i].leftVal + 'px');
                    _this.renderer.setElementStyle(_this.element.nativeElement.querySelector('#active' + playerItem.id.toString()), 'top', _this.formationArray[i].topVal + 'px');
                }
                i++;
            });
        });
    };
    GroundComponent.prototype.swapComponentSubstitute = function (playerToBeSwapped) {
        var _this = this;
        // console.log('Sub-Component', playerToBeSwapped)
        if (this.swapSubComponent == true) {
            ///animate it
            var player_1, animateSubstitue_1 = false;
            player_1 = this.substituteAddedToGround;
            animateSubstitue_1 = true;
            this.substituteClicked = false;
            localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped));
            localStorage.setItem('player', JSON.stringify(player_1));
            if (this.substitutePlayerDetails.length <= 0) {
                // console.log('here');
                this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'));
            }
            var tempPlayerswapped_1 = JSON.parse(localStorage.getItem('playerToBeSwapped'));
            this.substitutePlayerDetails.forEach(function (playerItem) {
                // console.log("##############################");
                // console.log(playerItem.id, player.id);
                if (playerItem.id == player_1.id) {
                    // console.log("here11");
                    playerItem.image = tempPlayerswapped_1.image;
                    playerItem.jerseyNo = tempPlayerswapped_1.jerseyNo;
                    playerItem.name = tempPlayerswapped_1.name;
                    // console.log('animateSubstitue', animateSubstitue)
                    if (animateSubstitue_1 == true) {
                        var elem = document.querySelector('#sub' + playerItem.id.toString());
                        elem.className = 'slide-In-Both-Ways_Bottom';
                        //set the class back to original after animation
                        setTimeout(function () {
                            elem.className = 'pulse card';
                        }, 1000);
                    }
                    // console.log(" swapped substitute photo", playerItem);
                }
            });
            var tempPlayer_1 = JSON.parse(localStorage.getItem('player'));
            // console.log('plYER', tempPlayerswapped, tempPlayer)
            this.tempPlayerDetails.forEach(function (playerItem) {
                // console.log('playerItem.id', playerItem.id)
                if (playerItem.id == tempPlayerswapped_1.id) {
                    playerItem.image = tempPlayer_1.image;
                    playerItem.faceImage = tempPlayer_1.image;
                    playerItem.jerseyNo = tempPlayer_1.jerseyNo;
                    playerItem.name = tempPlayer_1.name;
                }
                if (playerItem.id == tempPlayer_1.id) {
                    playerItem.image = tempPlayerswapped_1.image;
                    playerItem.faceImage = tempPlayerswapped_1.image;
                    playerItem.jerseyNo = tempPlayerswapped_1.jerseyNo;
                    playerItem.name = tempPlayerswapped_1.name;
                    // console.log(" swapped photo2", playerItem);
                }
            });
            var finalPlayerSwappedImage = tempPlayerswapped_1.image.substr(tempPlayerswapped_1.image.lastIndexOf('/') + 1);
            var finalPlayerAddedGroundImage = tempPlayer_1.image.substr(tempPlayer_1.image.lastIndexOf('/') + 1);
            this.dbProvider.updatePlayer({ 'id': tempPlayer_1.id, 'jerseyNo': tempPlayerswapped_1.jerseyNo, 'name': tempPlayerswapped_1.name, 'image': finalPlayerSwappedImage })
                .then(function (res) {
                // console.log('tempPlayer.id', tempPlayer.id)
                _this.dbProvider.updatePlayer({ 'id': tempPlayerswapped_1.id, 'jerseyNo': tempPlayer_1.jerseyNo, 'name': tempPlayer_1.name, 'image': finalPlayerAddedGroundImage })
                    .then(function (res) {
                    // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
                    localStorage.setItem('substituteWithFace', JSON.stringify(_this.substitutePlayerDetails));
                    _this._SharedService.refreshPlayers.emit(_this.tempPlayerDetails);
                    _this.swapSubComponent = false;
                    _this.swapEnabled = false;
                    _this.substituteExist = false;
                    _this.playerAddedToGround = [];
                    _this.playerAddedToSubstitute = null;
                    _this.substituteAddedToGround = [];
                    _this._SharedService.substituteMode.emit('none');
                });
            });
        }
    };
    //event fired on clicking the swap button
    GroundComponent.prototype.swapThisImage = function (playerToBeSwapped) {
        // console.log("playerToBeSwapped => ", playerToBeSwapped);
        if (this.swapEnabled == true) {
            this.playerToBeSwapped = playerToBeSwapped;
            this.select1.open();
        }
    };
    GroundComponent.prototype.swapOrSubstituteSelected = function (event) {
        console.log(event);
        if (event == 'swap') {
            this.swapThePlayer(this.playerToBeSwapped);
        }
        else {
            this.substituteThePlayer(this.playerToBeSwapped);
        }
    };
    GroundComponent.prototype.substituteThePlayer = function (playerToBeSwapped) {
        var _this = this;
        var updateItem = this.tempPlayerDetails.find(this.findIndexToUpdate, playerToBeSwapped.id);
        var index = this.tempPlayerDetails.indexOf(updateItem);
        var param = { name: this.playerAddedToSubstitute.name };
        this.tempPlayerDetails[index].substitutedPlayers.push(param);
        this.dbProvider.updatePlayer({ 'id': playerToBeSwapped.id, 'substitutedPlayers': this.tempPlayerDetails[index].substitutedPlayers })
            .then(function (res) {
            localStorage.setItem('activePlayerDetails', JSON.stringify(_this.tempPlayerDetails));
            _this._SharedService.refreshPlayers.emit(_this.tempPlayerDetails);
            _this.swapEnabled = false;
            _this.swapSubComponent = false;
            _this.substituteExist = false;
            _this.activeTab = '';
            _this.playerAddedToGround = [];
            _this.playerAddedToSubstitute = null;
            _this.substituteAddedToGround = [];
            _this._SharedService.substituteMode.emit('none');
        });
    };
    GroundComponent.prototype.findIndexToUpdate = function (newItem) {
        return newItem.id === this;
    };
    GroundComponent.prototype.swapThePlayer = function (playerToBeSwapped) {
        var _this = this;
        ///animate it
        var player, animateSubstitue = false;
        if (this.substituteClicked == true) {
            player = this.substituteAddedToGround;
            animateSubstitue = true;
            this.substituteClicked = false;
        }
        else {
            animateSubstitue = false;
            player = this.playerAddedToGround;
        }
        if (player && player.isGoalkeeper != 'true' && player.isGoalkeeper != 1) {
            localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped));
            localStorage.setItem('player', JSON.stringify(player));
            if (this.activePlayerWithFace.length <= 0) {
                this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'));
            }
            if (this.substitutePlayerDetails.length <= 0) {
                // console.log('here');
                this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'));
            }
            var tempPlayerswapped_2 = JSON.parse(localStorage.getItem('playerToBeSwapped'));
            this.substitutePlayerDetails.forEach(function (playerItem) {
                if (playerItem.id == player.id) {
                    playerItem.image = tempPlayerswapped_2.image;
                    playerItem.jerseyNo = tempPlayerswapped_2.jerseyNo;
                    playerItem.name = tempPlayerswapped_2.name;
                    // console.log('animateSubstitue', animateSubstitue)
                    if (animateSubstitue == true) {
                        var elem = document.querySelector('#sub' + playerItem.id.toString());
                        elem.className = 'slide-In-Both-Ways_Bottom';
                        //set the class back to original after animation
                        setTimeout(function () {
                            elem.className = 'pulse card';
                        }, 1000);
                    }
                    // console.log(" swapped substitute photo", playerItem);
                }
            });
            var tempPlayer_2 = JSON.parse(localStorage.getItem('player'));
            // console.log('plYER', tempPlayerswapped, tempPlayer)
            this.activePlayerWithFace.forEach(function (playerItem) {
                // console.log('playerItem.id', playerItem.id, player)
                if (playerItem.id == tempPlayerswapped_2.id) {
                    playerItem.image = tempPlayer_2.image;
                    playerItem.jerseyNo = tempPlayer_2.jerseyNo;
                    playerItem.name = tempPlayer_2.name;
                    // console.log(" swapped photo", playerItem);
                }
            });
            this.tempPlayerDetails.forEach(function (playerItem) {
                // console.log('playerItem.id', playerItem.id)
                if (playerItem.id == tempPlayerswapped_2.id) {
                    playerItem.image = tempPlayer_2.image;
                    playerItem.faceImage = tempPlayer_2.image;
                    playerItem.jerseyNo = tempPlayer_2.jerseyNo;
                    playerItem.name = tempPlayer_2.name;
                    var elem = document.querySelector('#active' + playerItem.id.toString());
                    elem.className = 'slide-in-both-ways';
                    //set the class back to original after animation
                    setTimeout(function () {
                        elem.className = 'pulse';
                    }, 1000);
                    // console.log(" swapped photo1", playerItem);
                }
                if (playerItem.id == tempPlayer_2.id) {
                    playerItem.image = tempPlayerswapped_2.image;
                    playerItem.faceImage = tempPlayerswapped_2.image;
                    playerItem.jerseyNo = tempPlayerswapped_2.jerseyNo;
                    playerItem.name = tempPlayerswapped_2.name;
                    // console.log(" swapped photo2", playerItem);
                }
            });
            var finalPlayerSwappedImage = tempPlayerswapped_2.image.substr(tempPlayerswapped_2.image.lastIndexOf('/') + 1);
            var finalPlayerAddedGroundImage = tempPlayer_2.image.substr(tempPlayer_2.image.lastIndexOf('/') + 1);
            // console.log("finalPlayerSwappedImage => ", finalPlayerSwappedImage, finalPlayerAddedGroundImage);
            this.dbProvider.updatePlayer({ 'id': tempPlayer_2.id, 'jerseyNo': tempPlayerswapped_2.jerseyNo, 'name': tempPlayerswapped_2.name, 'image': finalPlayerSwappedImage })
                .then(function (res) {
                // console.log('tempPlayer.id', tempPlayer.id)
                _this.dbProvider.updatePlayer({ 'id': tempPlayerswapped_2.id, 'jerseyNo': tempPlayer_2.jerseyNo, 'name': tempPlayer_2.name, 'image': finalPlayerAddedGroundImage })
                    .then(function (res) {
                    // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
                    localStorage.setItem('activePlayerWithFace', JSON.stringify(_this.activePlayerWithFace));
                    localStorage.setItem('activePlayerDetails', JSON.stringify(_this.tempPlayerDetails));
                    localStorage.setItem('substituteWithFace', JSON.stringify(_this.substitutePlayerDetails));
                    _this._SharedService.refreshPlayers.emit(_this.tempPlayerDetails);
                    _this.swapEnabled = false;
                    _this.swapSubComponent = false;
                    _this.substituteExist = false;
                    _this.activeTab = '';
                    _this.playerAddedToGround = [];
                    _this.playerAddedToSubstitute = null;
                    _this.substituteAddedToGround = [];
                    _this._SharedService.substituteMode.emit('none');
                });
            });
        }
        else {
            this.toastCtrl.callToast('Swap the goal keeper with another keeper.');
        }
    };
    GroundComponent.prototype.swapOrSubstituteGoalKeeper = function (event) {
        if (event == 'swap') {
            this.swapGoalKeeper(this.playerToBeSwapped);
        }
        else {
            this.substituteTheGoalKeeper(this.playerToBeSwapped);
        }
    };
    GroundComponent.prototype.substituteTheGoalKeeper = function (playerToBeSwapped) {
        var _this = this;
        console.log(playerToBeSwapped);
        var updateItem = this.tempPlayerDetails.find(this.findIndexToUpdate, playerToBeSwapped.id);
        var index = this.tempPlayerDetails.indexOf(updateItem);
        var param = { name: this.playerAddedToGround.name };
        this.tempPlayerDetails[index].substitutedPlayers.push(param);
        this.dbProvider.updatePlayer({ 'id': playerToBeSwapped.id, 'substitutedPlayers': this.tempPlayerDetails[index].substitutedPlayers })
            .then(function (res) {
            localStorage.setItem('activePlayerDetails', JSON.stringify(_this.tempPlayerDetails));
            _this._SharedService.refreshPlayers.emit(_this.tempPlayerDetails);
            _this.swapEnabled = false;
            _this.swapSubComponent = false;
            _this.substituteExist = false;
            _this.activeTab = '';
            _this.playerAddedToGround = [];
            _this.playerAddedToSubstitute = null;
            _this.substituteAddedToGround = [];
            _this._SharedService.substituteMode.emit('none');
        });
    };
    GroundComponent.prototype.swapTheGoalKeeper = function (playerToBeSwapped) {
        if (this.swapEnabled == true) {
            this.select2.open();
            this.playerToBeSwapped = playerToBeSwapped;
        }
    };
    GroundComponent.prototype.swapGoalKeeper = function (playerToBeSwapped) {
        var _this = this;
        var player, animateSubstitue = false;
        /*if (this.substituteClicked == true) {
          player = this.substituteAddedToGround
          animateSubstitue = true
          this.substituteClicked = false
        }
        else {*/
        animateSubstitue = false;
        player = this.playerAddedToGround;
        //}
        if (playerToBeSwapped && playerToBeSwapped.isGoalkeeper != 'true' && playerToBeSwapped.isGoalkeeper != 1) {
            this.toastCtrl.callToast('Swap the player with another player.');
        }
        else {
            if (player && player.isGoalkeeper != 'true' && player.isGoalkeeper != 1) {
                this.toastCtrl.callToast('Swap the player with another player.');
            }
            else {
                localStorage.setItem('playerToBeSwapped', JSON.stringify(playerToBeSwapped));
                localStorage.setItem('player', JSON.stringify(player));
                if (this.goalKeeperWithFace.length <= 0) {
                    this.goalKeeperWithFace = JSON.parse(localStorage.getItem('goalKeeperWithFace'));
                }
                //
                if (this.substitutePlayerDetails.length <= 0) {
                    this.substitutePlayerDetails = JSON.parse(localStorage.getItem('substituteWithFace'));
                }
                //
                var tempPlayerswapped_3 = JSON.parse(localStorage.getItem('playerToBeSwapped'));
                //
                this.substitutePlayerDetails.forEach(function (playerItem) {
                    if (playerItem.id == player.id) {
                        playerItem.image = tempPlayerswapped_3.image;
                        playerItem.jerseyNo = tempPlayerswapped_3.jerseyNo;
                        playerItem.name = tempPlayerswapped_3.name;
                        if (animateSubstitue == true) {
                            var elem = document.querySelector('#sub' + playerItem.id.toString());
                            elem.className = 'slide-In-Both-Ways_Bottom';
                            //set the class back to original after animation
                            setTimeout(function () {
                                elem.className = 'pulse card';
                            }, 1000);
                        }
                    }
                });
                //
                var tempPlayer_3 = JSON.parse(localStorage.getItem('player'));
                // console.log('plYER', tempPlayerswapped, tempPlayer)
                this.goalKeeperWithFace.forEach(function (playerItem) {
                    // console.log('playerItem.id', playerItem.id, player)
                    if (playerItem.id == tempPlayerswapped_3.id) {
                        playerItem.image = tempPlayer_3.image;
                        playerItem.jerseyNo = tempPlayer_3.jerseyNo;
                        playerItem.name = tempPlayer_3.name;
                        // console.log(" swapped photo", playerItem);
                    }
                });
                this.tempPlayerDetails.forEach(function (playerItem) {
                    // console.log('playerItem.id', playerItem.id)
                    if (playerItem.id == tempPlayerswapped_3.id) {
                        playerItem.image = tempPlayer_3.image;
                        playerItem.faceImage = tempPlayer_3.image;
                        playerItem.jerseyNo = tempPlayer_3.jerseyNo;
                        playerItem.name = tempPlayer_3.name;
                        var elem = document.querySelector('#activeGoali' + playerItem.id.toString());
                        elem.className = 'slide-in-both-ways';
                        //set the class back to original after animation
                        setTimeout(function () {
                            elem.className = 'pulse';
                        }, 1000);
                        // console.log(" swapped photo1", playerItem);
                    }
                    if (playerItem.id == tempPlayer_3.id) {
                        playerItem.image = tempPlayerswapped_3.image;
                        playerItem.faceImage = tempPlayerswapped_3.image;
                        playerItem.jerseyNo = tempPlayerswapped_3.jerseyNo;
                        playerItem.name = tempPlayerswapped_3.name;
                        // console.log(" swapped photo2", playerItem);
                    }
                });
                var finalPlayerSwappedImage = tempPlayerswapped_3.image.substr(tempPlayerswapped_3.image.lastIndexOf('/') + 1);
                var finalPlayerAddedGroundImage = tempPlayer_3.image.substr(tempPlayer_3.image.lastIndexOf('/') + 1);
                this.dbProvider.updatePlayer({ 'id': tempPlayer_3.id, 'jerseyNo': tempPlayerswapped_3.jerseyNo, 'name': tempPlayerswapped_3.name, 'image': finalPlayerSwappedImage })
                    .then(function (res) {
                    // console.log('tempPlayer.id', tempPlayer.id)
                    _this.dbProvider.updatePlayer({ 'id': tempPlayerswapped_3.id, 'jerseyNo': tempPlayer_3.jerseyNo, 'name': tempPlayer_3.name, 'image': finalPlayerAddedGroundImage })
                        .then(function (res) {
                        // console.log('tempPlayerswapped.id', tempPlayerswapped.id)
                        localStorage.setItem('goalKeeperWithFace', JSON.stringify(_this.goalKeeperWithFace));
                        // localStorage.setItem('activePlayerDetails', JSON.stringify(this.tempPlayerDetails))
                        //
                        localStorage.setItem('substituteWithFace', JSON.stringify(_this.substitutePlayerDetails));
                        //
                        _this._SharedService.refreshPlayers.emit(_this.tempPlayerDetails);
                        _this.swapEnabled = false;
                        _this.swapSubComponent = false;
                        _this.substituteExist = false;
                        _this.activeTab = '';
                        _this.playerAddedToGround = [];
                        _this.playerAddedToSubstitute = null;
                        _this.substituteAddedToGround = [];
                        _this._SharedService.substituteMode.emit('none');
                    });
                });
            }
        }
    };
    //show delete button when clicking player
    GroundComponent.prototype.onPlayerClick = function () {
        this.removePlayer = (this.removePlayer == true) ? false : true;
        this.swapEnabled = false;
        ///animate it
        var elem = document.querySelector('.slide-in-both-ways');
        if (elem)
            elem.className = 'pulse';
    };
    /// event fired to remove item from ground
    GroundComponent.prototype.onRemoveFromGround = function (player) {
        this.presentConfirm('Do you want to remove this player from the ground ?', player);
    };
    //Action handler when substitute player is clicked
    GroundComponent.prototype.changePlayer = function (e) {
        if (!this.jerseyTabSelected) {
            if (this.swapEnabled == true) {
                if (this.playerAddedToSubstitute && this.playerAddedToSubstitute.isGoalkeeper != 'true' && this.playerAddedToSubstitute.isGoalkeeper != 1) {
                    if (e && e.isGoalkeeper != 'true' && e.isGoalkeeper != 1) {
                        this.substituteClicked = true;
                        this.substituteAddedToGround = e;
                        var subArray = false;
                        // console.log('this.playerAddedToSubstitute', this.playerAddedToSubstitute);
                        if (this.playerAddedToSubstitute)
                            subArray = true;
                        else
                            subArray = false;
                        if (subArray) {
                            if (this.substituteExist == true) {
                                this.toastCtrl.callToast('This player is already in the substitute list.');
                                this._SharedService.substituteMode.emit('none');
                                this.swapSubComponent = false;
                                this.substituteExist = false;
                                this.activeTab = '';
                                this.playerAddedToSubstitute = null;
                            }
                            else if (this.substituteExist == false) {
                                this.activeTab = '';
                                this.swapComponentSubstitute(this.playerAddedToSubstitute);
                            }
                        }
                        else {
                            // console.log('swap with players')
                            //remove any selections from team component
                            this._SharedService.substituteMode.emit('none');
                            this.activeTab = (this.activeTab == '') ? e.id : '';
                            // console.log('this.activeTab',this.activeTab)
                            //substitute and player swapping
                            if (this.activeTab == e.id) {
                                this._SharedService.selectPlayerForSwapFromSubstitute.emit(e);
                            }
                            else {
                                this.swapEnabled = false;
                            }
                            this.substituteExist = false;
                            this.playerAddedToSubstitute = null;
                        }
                    }
                    else {
                        this.toastCtrl.callToast('Swap the player with another player.');
                    }
                }
                else {
                    if (e && e.isGoalkeeper != 'true' && e.isGoalkeeper != 1) {
                        this.toastCtrl.callToast('Swap the goal keeper with another goal keeper.');
                    }
                    else {
                        this.substituteClicked = true;
                        this.substituteAddedToGround = e;
                        var subArray = false;
                        if (this.playerAddedToSubstitute)
                            subArray = true;
                        else
                            subArray = false;
                        if (subArray) {
                            if (this.substituteExist == true) {
                                this.toastCtrl.callToast('This player is already in the substitute list.');
                                this._SharedService.substituteMode.emit('none');
                                this.swapSubComponent = false;
                                this.substituteExist = false;
                                this.activeTab = '';
                                this.playerAddedToSubstitute = null;
                            }
                            else if (this.substituteExist == false) {
                                this.activeTab = '';
                                this.swapComponentSubstitute(this.playerAddedToSubstitute);
                            }
                        }
                        else {
                            //remove any selections from team component
                            this._SharedService.substituteMode.emit('none');
                            this.activeTab = (this.activeTab == '') ? e.id : '';
                            //substitute and player swapping
                            if (this.activeTab == e.id) {
                                this._SharedService.selectPlayerForSwapFromSubstitute.emit(e);
                            }
                            else {
                                this.swapEnabled = false;
                            }
                            this.substituteExist = false;
                            this.playerAddedToSubstitute = null;
                        }
                    }
                }
            }
        }
    };
    // Present a conform dialog before deletion
    GroundComponent.prototype.presentConfirm = function (msg, player) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.cancelDeletePlayer();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.onDeletePlayer(player);
                    }
                }
            ]
        });
        alert.present();
    };
    // Present a conform dialog ebefore deletion
    GroundComponent.prototype.presentConfirmLineUpDel = function (msg, lineupId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.onDeleteLineUp(lineupId);
                    }
                }
            ]
        });
        alert.present();
    };
    GroundComponent.prototype.presentConfirmLineUpAllDel = function (msg, teamID, subArray, team_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.onDeleteAllLineUp(teamID, subArray, team_id);
                    }
                }
            ]
        });
        alert.present();
    };
    GroundComponent.prototype.presentConfirmClearTeamData = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        // this.onDeleteAllLineUp(teamID, subArray, team_id)
                    }
                }
            ]
        });
        alert.present();
    };
    GroundComponent.prototype.onDeleteAllLineUp = function (teamId, subArray, team_id) {
        var _this = this;
        this.dbProvider.deleteAllLineup(teamId, subArray, team_id)
            .then(function (res) {
            _this.editLineUp = false;
            _this.lineupId = '';
            _this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then(function (response) {
                // console.log("selectplayers data ---- > ", response);
                var playerList = response;
                localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
                // this.dbProvider.selectTeams(1, null).then((data)=>{
                _this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then(function (data) {
                    _this._SharedService.refreshPlayers.emit(response);
                    _this._SharedService.refreshTeams.emit(data);
                    _this.toastCtrl.callToast('Team data removed successfully.');
                    _this.setPlayerSubstiteArray();
                    _this.setActiveTeamData();
                    _this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
                    // if (this.activeTeam.length > 0) {
                    if (localStorage.getItem('activeTeam') == teamId) {
                        _this.activeTeam[0].teamLogo = '';
                        _this.activeTeam[0].name = '';
                        _this.activeTeam[0].managerImage = '';
                        _this.activeTeam[0].manager = '';
                        _this.teamLogo = '';
                        _this.teamName = '';
                        _this.managerLogo = '';
                        _this.managerName = '';
                        _this._SharedService.refreshTeamLogo.emit();
                    }
                    localStorage.setItem('activeTeamDetails', JSON.stringify(_this.activeTeam));
                    _this._SharedService.updateMenu.emit('update menu');
                });
            });
        });
    };
    GroundComponent.prototype.onDeleteAllLineUpExceptCustoms = function (teamId, subArray, team_id) {
        var _this = this;
        this.dbProvider.deleteAllLineupExceptCustom(teamId, subArray, team_id)
            .then(function (res) {
            _this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
            // if (this.activeTeam.length > 0) {
            if (localStorage.getItem('activeTeam') == teamId) {
                _this.activeTeam[0].teamLogo = '';
                _this.activeTeam[0].name = '';
                _this.activeTeam[0].managerImage = '';
                _this.activeTeam[0].manager = '';
                _this.teamLogo = '';
                _this.teamName = '';
                _this.managerLogo = '';
                _this.managerName = '';
                _this._SharedService.refreshTeamLogo.emit();
            }
            localStorage.setItem('activeTeamDetails', JSON.stringify(_this.activeTeam));
            _this._SharedService.updateMenu.emit('update menu');
        });
    };
    GroundComponent.prototype.onDeleteLineUp = function (lineupId) {
        var _this = this;
        this.dbProvider.deleteLineup(lineupId)
            .then(function (res) {
            _this.editLineUp = false;
            _this.lineupId = '';
            _this.dbProvider.selectPlayers(localStorage.getItem('activeTeam')).then(function (response) {
                // console.log("selectplayers data ---- > ", response);
                var playerList = response;
                localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
                _this._SharedService.refreshPlayers.emit(response);
                _this.toastCtrl.callToast('Lineup removed successfully.');
                _this.setPlayerSubstiteArray();
                _this.setActiveTeamData();
                _this._SharedService.updateMenu.emit('update menu');
            });
        });
    };
    GroundComponent.prototype.cancelDeletePlayer = function () {
        this.removePlayer = false;
    };
    GroundComponent.prototype.onDeletePlayer = function (player) {
        var _this = this;
        // console.log('Delete clicked');
        this.removePlayer = false;
        // console.log("Player to be removed", player)
        if (this.activePlayerWithFace.length <= 0) {
            this.activePlayerWithFace = JSON.parse(localStorage.getItem('activePlayerWithFace'));
        }
        var i = 0, j = 0, k = 0;
        this.activePlayerDetails.forEach(function (playerItem) {
            if (playerItem.id == player.id) {
                _this.activePlayerDetails.splice(i, 1);
                return;
            }
            i++;
        });
        // console.log('face array before splice',this.activePlayerWithFace)
        this.activePlayerWithFace.forEach(function (playerItem) {
            if (playerItem.id == player.id) {
                _this.activePlayerWithFace.splice(k, 1);
                return;
            }
            k++;
        });
        this.tempPlayerDetails.forEach(function (playerItem) {
            if (playerItem.id == player.id) {
                playerItem.isDeletedGround = "true";
                return;
            }
            j++;
        });
        // console.log('face array after splice',this.activePlayerWithFace)
        this.dbProvider.deletePlayerFromGround(player.id, this.editLineUp, player.lineupDetailsId)
            .then(function (res) {
            if (!_this.editLineUp) {
                _this.dbProvider.selectPlayersAfterDelete(localStorage.getItem('activeTeam')).then(function (response) {
                    // console.log("selectplayers data ---- > ", response);
                    var playerList = response;
                    localStorage.setItem('activePlayerDetails', JSON.stringify(playerList));
                    localStorage.setItem('activePlayerWithFace', JSON.stringify(_this.activePlayerWithFace));
                    // this._SharedService.refreshPlayers.emit(response);
                    _this.toastCtrl.callToast('Player removed successfully.');
                });
            }
            else {
                _this.selectLineUpDetails(_this.lineupId);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('swapOrSubstitute'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */])
    ], GroundComponent.prototype, "select1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('swapOrSubstituteGoalKeeper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Select */])
    ], GroundComponent.prototype, "select2", void 0);
    GroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ground',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/ground/ground.html"*/'<!-- Generated template for the GroundComponent component -->\n\n\n\n<div class="top-head">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n      </ion-col>\n\n\n\n      <ion-col col-4>\n\n        <img src="././assets/imgs/logo.png" style="width: 80%;margin: 0 auto;display: table;margin-top: 10px;">\n\n      </ion-col>\n\n\n\n      <ion-col col-1> </ion-col>\n\n\n\n      <ion-col col-3 class="sub_div">\n\n        <div class="sub" *ngIf=showSubstitute>\n\n          <ion-card id="sub{{row.id}}" class="pulse" style="background:none;height: auto;width: auto;" *ngFor="let row of substitutePlayerDetails" (click)="changePlayer(row)" [hidden]="row.type_of_sub">\n\n            <div class="sub_image_div">\n\n              <!-- <img src="{{row.image}}" style="pointer-events:none; width: 100%;" [ngClass]="(activeTab==row.id)?\'activetab\':\'inactivetab\'" /> -->\n\n              <img *ngIf="row.image" src="{{row.image}}" style="pointer-events:none; max-width: 100%; height: auto;" [ngClass]="(activeTab==row.id)?\'activetab\':\'inactivetab\'" />\n\n            </div>\n\n            <span style="pointer-events:none">{{row.jerseyNo}}</span>\n\n            <p style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n              {{row.name}}\n\n            </p>\n\n          </ion-card>\n\n\n\n          <ion-card id="sub{{substitute_goalkeeper.id}}" class="pulse" style="background:none;height: auto;width: auto; top: 25px !important;\n\n          position: absolute; right: 0;" (click)="changePlayer(substitute_goalkeeper)" [hidden]="!substitute_goalkeeper.type_of_sub">\n\n            <div class="sub_image_div">\n\n              <!-- <img src="{{substitute_goalkeeper.image}}" style="pointer-events:none; width: 100%;" [ngClass]="(activeTab==substitute_goalkeeper.id)?\'activetab\':\'inactivetab\'" /> -->\n\n              <img *ngIf="substitute_goalkeeper.image" src="{{substitute_goalkeeper.image}}" style="pointer-events:none; max-width: 100%; height: auto;" [ngClass]="(activeTab==substitute_goalkeeper.id)?\'activetab\':\'inactivetab\'" />\n\n            </div>\n\n            <span style="pointer-events:none">{{substitute_goalkeeper.jerseyNo}}</span>\n\n            <p style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n              {{substitute_goalkeeper.name}}\n\n            </p>\n\n          </ion-card>\n\n        </div>\n\n        <p class="sub-title" *ngIf=showSubstitute>Substitutes</p>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</div>\n\n\n\n\n\n\n\n<!-- startLeft="{{row.left}}" startTop="{{row.top}}" -->\n\n<ion-item>\n\n  <ion-label>Select the option</ion-label>\n\n  <ion-select #swapOrSubstitute (ionChange)="swapOrSubstituteSelected($event)" [hidden]="true">\n\n    <ion-option value="swap">Swap</ion-option>\n\n    <ion-option value="substitute">Substitute</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-card id="active{{row.id}}" class="pulse" (click)="swapThisImage(row)" absolute-drag  style="background:none;height: auto; width: auto !important;" *ngFor="let row of activePlayerDetails; index as i" [hidden]="i >= groundPlayerCount"  ion-long-press [interval]="1000" (onPressStart)="onPlayerClick()" >\n\n  <div class="image_div">\n\n    <!-- <img src="{{row.image}}" style="pointer-events:none; width: 100%;" /> -->\n\n    <img src="{{row.image}}" style="pointer-events:none; max-width: 100%; height: auto;" />\n\n  </div>\n\n  <span style="pointer-events:none">{{row.jerseyNo}}</span>\n\n  <p style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n    {{row.name}}\n\n  </p>\n\n  <p *ngFor="let substitutePlayer of row.substitutedPlayers" style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n    {{substitutePlayer.name}}\n\n  </p>\n\n</ion-card>\n\n\n\n<ion-item>\n\n  <ion-label>Select the option</ion-label>\n\n  <ion-select #swapOrSubstituteGoalKeeper (ionChange)="swapOrSubstituteGoalKeeper($event)" [hidden]="true">\n\n    <ion-option value="swap">Swap</ion-option>\n\n    <ion-option value="substitute">Substitute</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-card id="activeGoali{{row.id}}" style="background:none;height: auto; width: auto !important;" *ngFor="let row of goalKeeperArray" absolute-drag startLeft="{{goali_width}}" startTop="{{goali_heigth}}" (click)="swapTheGoalKeeper(row)">\n\n  <div class="image_div">\n\n    <!-- <img src="{{row.image}}" style="pointer-events:none; width: 100%;" /> -->\n\n    <img *ngIf="row.image" src="{{row.image}}" style="pointer-events:none; max-width: 100%; height: auto;" />\n\n  </div>\n\n  <span style="pointer-events:none">{{row.jerseyNo}}</span>\n\n  <p style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n    {{row.name}}\n\n  </p>\n\n  <p *ngFor="let substitutePlayer of row.substitutedPlayers" style="pointer-events:none; padding: 0px 5px 0px 10px; width: 100% !important;">\n\n    {{substitutePlayer.name}}\n\n</ion-card>\n\n\n\n<ion-card style="background:none;height: auto; width: auto !important;" absolute-drag startLeft="{{ball_width}}" startTop="{{ball_height}}"  *ngIf="showBall">\n\n  <div class="ball_div">\n\n    <img src="./assets/imgs/football_small.svg" />\n\n  </div>\n\n</ion-card>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/ground/ground.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* DomController */]])
    ], GroundComponent);
    return GroundComponent;
}());

//# sourceMappingURL=ground.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var toast = this.presentToast('An unexpected error occured');
        toast.present();
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        console.log(error);
    };
    GlobalErrorHandler.prototype.presentToast = function (message) {
        return this.toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
    };
    GlobalErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());

//# sourceMappingURL=globalErrorHandler.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SaveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SaveComponent = /** @class */ (function () {
    function SaveComponent() {
        console.log('Hello SaveComponent Component');
        this.text = 'Hello World';
    }
    SaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'save',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/components/save/save.html"*/'<!-- Generated template for the SaveComponent component -->\n\n<div>\n\n\n\n\n\n  <div class="profile">\n\n    <ion-grid no-padding>\n\n      <ion-row no-padding>\n\n        <ion-col col-6 no-padding> \n\n          <div class="user">\n\n        xxxb\n\n        \n\n        </div>\n\n        </ion-col>\n\n        \n\n         <ion-col col-6 no-padding> \n\n        \n\n          <div class="vehicle">\n\n        xxxb\n\n        \n\n        </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid\n\n>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/components/save/save.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SaveComponent);
    return SaveComponent;
}());

//# sourceMappingURL=save.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the LimitPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var LimitPipe = /** @class */ (function () {
    function LimitPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    LimitPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value;
    };
    LimitPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'limitTo',
        })
    ], LimitPipe);
    return LimitPipe;
}());

//# sourceMappingURL=limit.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_team_team__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ground_page_ground_page__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_settings_settings__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tools_tools__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_jersey_jersey__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_screenshot__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_pro__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var TeamDefaultPage = /** @class */ (function () {
    function TeamDefaultPage(navCtrl, modalCtrl, navParams, service, resolver, fileObj, screenshot, toastCtrl, platform, renderer, _SharedService, _location, dbProvider, admobNew, ga) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.service = service;
        this.resolver = resolver;
        this.fileObj = fileObj;
        this.screenshot = screenshot;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this._SharedService = _SharedService;
        this._location = _location;
        this.dbProvider = dbProvider;
        this.admobNew = admobNew;
        this.ga = ga;
        this.originalImage = null;
        this.blobImage = null;
        this.componentRefArray = [];
        this.drag = false;
        this.saveClicked = true;
        this.selectedColor = '#fff';
        this.activeTabName = localStorage.getItem('activeTabName');
        // activeTool = "Pencil";
        this.activeTool = '';
        this.showTool = '';
        this.cPushArray = new Array();
        this.cStep = -1;
        this.grounds = [];
        this.page = 'team-default';
        // this.ga.trackView('Home Page');
    }
    TeamDefaultPage.prototype.ngOnInit = function () {
        var _this = this;
        var groundImg = localStorage.getItem("groundImageSrc");
        if (groundImg) {
            this.groundImageSrc = groundImg;
        }
        this.activeTabName = 'Team';
        localStorage.setItem('activeTabName', 'Team');
        this._SharedService.toolsManagement.subscribe(function (data) {
            if (data != "Undo" && data != "Redo" && data != "Eraser" && data != "Football") {
                var existingTool = localStorage.getItem('activeToolName');
                if (existingTool && existingTool == data) {
                    _this.activeTool = '';
                    _this.showTool = '';
                    localStorage.setItem('activeToolName', '');
                }
                else {
                    _this.activeTool = data;
                    _this.showTool = data;
                    localStorage.setItem('activeToolName', data);
                }
            }
            // console.log("TD --- toolsManagement ::: ", data);
            if (data == "Undo") {
                _this.cUndo();
            }
            else if (data == "Redo") {
                _this.cRedo();
            }
            else if (data == "Eraser") {
                _this.clearCanvas();
            }
            else if (data == "Football") {
                var football = localStorage.getItem("showBall");
                if (football && football != null && football != '') {
                    if (football == 'true')
                        localStorage.setItem('showBall', 'false');
                    else
                        localStorage.setItem('showBall', 'true');
                }
                else {
                    localStorage.setItem('showBall', 'true');
                }
            }
            // else {
            //   this.activeTool = data;
            //   this.showTool = data;
            //   localStorage.setItem('activeToolName', data);
            // }
        });
        var self = this;
        setTimeout(function () {
            // console.log("EMIT AFTER TIMEOUT");
            self._SharedService.retrieveData.emit("activePlayerDetails");
        }, 2000);
        //Reloads all the previously set league and team values
        this._SharedService.refreshFooter.emit('relaod');
        this._SharedService.refreshPlayers.subscribe(function (data) {
            // console.log("refreshPlayers ::: ", data);
            localStorage.setItem('activePlayerDetails', JSON.stringify(data));
            _this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
            _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_4__components_team_team__["a" /* TeamComponent */]);
        });
        if (JSON.parse(localStorage.getItem('activePlayerDetails')) && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
            this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        }
        this._SharedService.tabNavigation.subscribe(function (componentName) {
            _this.activeTabName = localStorage.getItem('activeTabName');
            if (componentName == "Team") {
                _this.activeTool = '';
                _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_4__components_team_team__["a" /* TeamComponent */]);
            }
            else if (componentName == "Jersey") {
                _this.activeTool = '';
                _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_9__components_jersey_jersey__["a" /* JerseyComponent */]);
            }
            else if (componentName == "Ground") {
                _this.activeTool = '';
                _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_5__components_ground_page_ground_page__["a" /* GroundPageComponent */]);
            }
            else if (componentName == "Tools") {
                _this.activeTool = localStorage.getItem('activeToolName');
                var tool = localStorage.getItem('activeToolName');
                if (tool != null && tool != 'null' && tool != undefined && tool != 'undefined' && tool != '')
                    _this.showTool = tool;
                else
                    _this.showTool = '';
                _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_8__components_tools_tools__["a" /* ToolsComponent */]);
            }
            else if (componentName == "Settings") {
                _this.activeTool = '';
                _this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_6__components_settings_settings__["a" /* SettingsComponent */]);
                _this.launchInterstitial();
            }
            else {
                // Take a screenshot and save to file
                _this.saveCanvas();
            }
        });
        this._SharedService.showModal.subscribe(function (modalName) {
            // console.log("showModal---************---***********---");
            var modal = _this.modalCtrl.create(modalName);
            modal.present();
        });
        this._SharedService.selectGround.subscribe(function (groundData) {
            // console.log("groundData", groundData);
            _this.groundImageSrc = groundData.image;
            // console.log("this.groundImageSrc", this.groundImageSrc);
        });
        this._SharedService.refreshAfterSave.subscribe(function (saveData) {
            _this.saveClicked = true;
            // this.createDynamicComponent(TeamComponent);
            // this.toastCtrl.callToast('Lineup saved successfully with the players photo. Please use the menu to edit the lineup.');
        });
        this._SharedService.shareGroundImages.subscribe(function () {
            _this.getAllGrounds();
        });
        this._SharedService.clearCanvas.subscribe(function () {
            _this.clearCanvas();
        });
    };
    TeamDefaultPage.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    TeamDefaultPage.prototype.ionViewDidLoad = function () {
        this.createDynamicComponent(__WEBPACK_IMPORTED_MODULE_4__components_team_team__["a" /* TeamComponent */]);
        // Set the Canvas Element and its size
        this.canvasElement = this.canvas.nativeElement;
        // this.canvasElement.height = 200;
        this.offsetX = this.canvasElement.offsetLeft;
        this.offsetY = this.canvasElement.offsetTop;
    };
    // show Interstitial Ads
    TeamDefaultPage.prototype.launchInterstitial = function () {
        var _this = this;
        var adId;
        if (this.platform.is('android')) {
            adId = 'ca-app-pub-3177597429175100/5082349560';
        }
        else if (this.platform.is('ios')) {
            adId = 'YOUR_ADID_IOS';
        }
        this.admobNew.prepareInterstitial({ adId: adId, license: "justinwilson28@gmail.com/fd1e7592ac1ca9d1ee450534aaf7df4f", isTesting: false })
            .then(function () { _this.admobNew.showInterstitial(); });
        // this.admobNew.onAdDismiss()
        // .subscribe(() => {
        //     var that = this;
        //     setTimeout(function() {
        //       that.activeTool = '';
        //       that.createDynamicComponent(SettingsComponent);
        //     }, 0);
        //  });
        //  this.admobNew.onAdFailLoad()
        //  .subscribe((err) => {
        //     //  alert("err");
        //     //  console.log('Error loading ad:', err);
        //     var that = this;
        //       setTimeout(function() {
        //         that.activeTool = '';
        //         that.createDynamicComponent(SettingsComponent);
        //       }, 0);
        //  });
    };
    TeamDefaultPage.prototype.getAllGrounds = function () {
        var _this = this;
        this.dbProvider.selectGrounds().
            then(function (groundsArr) {
            _this.grounds = groundsArr;
            // console.log('groundsPageArr',this.grounds);
            if (_this.grounds[0]['image'])
                _this.groundImageSrc = _this.grounds[0]['image'];
            else
                _this.groundImageSrc = "";
            // this.groundImageSrc = "./assets/imgs/groundImg.png";
            localStorage.setItem("groundImageSrc", _this.groundImageSrc);
        });
    };
    TeamDefaultPage.prototype.createDynamicComponent = function (theComponent) {
        // console.log ('this.previousComponent',this.previousComponent,this.container)
        if (this.previousComponent) {
            this.container.remove(this.container.indexOf(this.previousComponent));
        }
        // this.removeComponent(this.previousComponent);
        var factory = this.resolver.resolveComponentFactory(theComponent);
        var componentRef = this.container.createComponent(factory);
        this.previousComponent = componentRef;
    };
    TeamDefaultPage.prototype.removeComponent = function (componentClass) {
        // Find the component
        var component = this.componentRefArray.find(function (component) { return component.instance instanceof componentClass; });
        var componentIndex = this.componentRefArray.indexOf(component);
        this.previousComponent = null;
        if (componentIndex !== -1) {
            // Remove component from both view and array
            this.container.remove(this.container.indexOf(component));
            this.componentRefArray.splice(componentIndex, 1);
        }
    };
    TeamDefaultPage.prototype.presentPage = function () {
        var modal = this.modalCtrl.create('PlayerAddPage');
        modal.present();
    };
    TeamDefaultPage.prototype.saveCanvas = function () {
        var _this = this;
        this.saveClicked = false;
        //this.removeComponent(this.previousComponent);
        this.saveLineUp();
        //take screen shot after hiding the tab and footer
        setTimeout(function () {
            _this.screenshot.URI(80).
                then(function (dataFile) {
                // console.log("dataUrl =>", dataFile);
                _this.originalImage = dataFile.URI;
                setTimeout(function () {
                    _this.fileObj.saveBase64(dataFile.URI, '').then(function (dataUrl) {
                        // console.log("dataUrl ----------",dataUrl , dataFile )
                        localStorage.setItem('activeLineup', dataUrl);
                        // let data = this.fileObj.retrieveImage(dataUrl)
                        var modal = _this.modalCtrl.create('TeamSavePage', { 'screenshot': _this.fileObj.getStorageDirectory() + 'assets/images/' + localStorage.getItem('activeLineup'), 'URI': dataFile.URI });
                        modal.present();
                    }, function (error) { return console.error('Error image', error); });
                }, 1500);
            }, function (onError) {
                console.log(onError);
            });
        }, 2000);
    };
    TeamDefaultPage.prototype.startDrawing = function (ev) {
        this.canvasW = $(".canvasDefault ").width();
        this.canvasH = $(".canvasDefault ").height();
        if (this.activeTabName == "Tools") {
            var canvasPosition = this.canvasElement.getBoundingClientRect();
            this.saveX = ev.touches[0].pageX - this.offsetX;
            this.saveY = ev.touches[0].pageY - this.offsetY;
        }
    };
    TeamDefaultPage.prototype.moved = function (ev) {
        if (this.activeTabName == "Tools") {
            var canvasPosition = this.canvasElement.getBoundingClientRect();
            var ctx = this.canvasElement.getContext('2d');
            var currentX = ev.touches[0].screenX - this.offsetX;
            var currentY = ev.touches[0].screenY - this.offsetY;
            // console.log("HERE EV",ev.touches[0].screenX , ev.touches[0].screenY)
            // console.log("HERE 1",currentX, currentY, this.offsetX, this.offsetY)
            ctx.lineJoin = 'round';
            ctx.globalAlpha = 1.0;
            ctx.strokeStyle = '#f7fc00';
            ctx.lineWidth = 1.5;
            // console.log("currentX 1-", currentX);
            // var currentX1 = ((currentX-20)/20)*2;
            // currentX = currentX - currentX1;
            // console.log("currentX 2-", currentX);
            // console.log("currentY 1-", currentY);
            // var currentY1 = ((currentY-20)/20)*12;
            // currentY = currentY - currentY1;
            // console.log("currentY 2-", currentY);
            ctx.beginPath();
            ctx.moveTo(this.saveX, this.saveY);
            ctx.lineTo(currentX, currentY);
            ctx.closePath();
            ctx.stroke();
            this.saveX = currentX;
            this.saveY = currentY;
        }
    };
    TeamDefaultPage.prototype.saveLineUp = function () {
        this._SharedService.saveLineUp.emit("activePlayerDetails");
    };
    TeamDefaultPage.prototype.mouseDown = function (ev) {
        if (this.activeTool == "Arrow") {
            this.handleStart(ev);
        }
        else {
            this.mDownX = ev.touches[0].pageX;
            this.mDownY = ev.touches[0].pageY;
            // console.log("mDownXY ::: ", this.mDownX, this.mDownY, ev)
            if (this.cStep == -1) {
                // console.log("First Time...")
                this.cPush();
            }
            if (this.activeTabName == "Tools") {
                if (this.activeTool == 'Pencil') {
                    this.startDrawing(ev);
                }
                else if (this.activeTool == 'Arrow') {
                    this.startArrowDrawing(ev);
                }
                else {
                    var canvasPosition = this.canvasElement.getBoundingClientRect();
                    this.saveX = ev.touches[0].pageX - canvasPosition.x;
                    this.saveY = ev.touches[0].pageY - canvasPosition.y;
                }
            }
        }
    };
    TeamDefaultPage.prototype.mouseUp = function (ev) {
        if (this.activeTool == "Arrow") {
            this.handleMove(ev);
        }
        else {
            this.mUpX = ev.changedTouches[0].pageX;
            this.mUpY = ev.changedTouches[0].pageY;
            // console.log("mUpXY ::: ", this.mUpX, this.mUpY, ev)
            // console.log("MouseUp --------", this.activeTabName )
            //this.drawRectangle()
            if (this.activeTabName == "Tools") {
                if (this.activeTool == 'Pencil') {
                    this.cPush();
                    // console.log('Pencil');
                }
                else {
                    switch (this.activeTool) {
                        case 'Pencil':
                            // console.log('Pencil');
                            //this.drawRectangle()
                            break;
                        case 'Rectangle':
                            // console.log('Rectangle');
                            this.drawRectangle();
                            break;
                        case 'Circle':
                            // console.log('Circle');
                            this.drawCircle();
                            break;
                        case 'Arrow':
                            // console.log('Arrow');
                            this.drawArrow(ev);
                            break;
                        case 'Undo':
                            // console.log('Undo');
                            //this.backClicked()
                            this.cUndo();
                            break;
                        default:
                            console.log('default');
                    }
                }
            }
        }
    };
    TeamDefaultPage.prototype.backClicked = function () {
        this._location.back();
    };
    TeamDefaultPage.prototype.undoClicked = function () {
    };
    TeamDefaultPage.prototype.mouseMove = function (ev) {
        //console.log("HERE 2")
        if (this.activeTabName == "Tools" && this.activeTool != "Arrow") {
            if (this.activeTool == 'Pencil') {
                this.moved(ev);
            }
            else {
                var canvasPosition = this.canvasElement.getBoundingClientRect();
                var ctx = this.canvasElement.getContext('2d');
                this.currentX = ev.touches[0].pageX - this.offsetX;
                this.currentY = ev.touches[0].pageY - this.offsetY;
                this.saveX = this.currentX;
                this.saveY = this.currentY;
            }
        }
    };
    TeamDefaultPage.prototype.drawRectangle = function () {
        //console.log( "co-ordinates : ", this.currentX,"--", this.currentY, " *** ", this.saveX,"--", this.saveY );
        var _this = this;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        var w = this.currentX - this.saveX;
        var h = this.currentY - this.saveY;
        ctx.beginPath();
        // ctx.rect(this.saveX, this.saveY, 16, 9);
        //ctx.rect(this.saveX-20, this.saveY-12, 18, 10);
        //ctx.rect(20, 20, 100, 100);
        var x1 = this.mDownX;
        var y1 = this.mDownY;
        var x2 = this.mUpX;
        var y2 = this.mUpY;
        var differenceX = Math.abs(x1 - x2);
        var differenceY = Math.abs(y1 - y2);
        // console.log("difference Type of", typeof differenceX, typeof differenceY, differenceX, differenceY, this.selectedColor);
        //parseInt(differenceX)
        //parseInt(differencey)
        setTimeout(function () {
            if (differenceX > 0 && differenceY > 0) {
                // console.log("rect points are", this.mDownX, this.mDownY, differenceX, differenceY );
                // this.mDownX= 50;
                // this.mDownY= 50;
                // differenceX= 150;
                // differenceY= 150;
                ctx.strokeStyle = _this.selectedColor;
                //ctx.rect(this.mDownX-60, this.mDownY-145, differenceX, differenceY);
                // ctx.rect(this.mDownX, this.mDownY-145 , differenceX, differenceY);
                // ctx.rect(this.mDownX, this.mDownY , differenceX, differenceY);
                //ctx.rect(20, 20, 100, 100);
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = "#f47804";
                ctx.fillRect(_this.mDownX, _this.mDownY, differenceX, differenceY);
                // ctx.lineWidth = 1.5;
                ctx.stroke();
                _this.cPush();
            }
            else {
                console.log("Zero Value");
            }
        }, 100);
    };
    TeamDefaultPage.prototype.drawCircle = function () {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        var w = this.currentX - this.saveX;
        var h = this.currentY - this.saveY;
        ctx.beginPath();
        //ctx.arc(this.saveX, this.saveY, 15, 0, 2 * Math.PI);
        // this.mDownX, this.mDownY
        // this.mUpX, this.mUpY
        var x1 = this.mDownX;
        var y1 = this.mDownY;
        var x2 = this.mUpX;
        var y2 = this.mUpY;
        var differenceX = Math.abs(x1 - x2);
        var differenceY = Math.abs(y1 - y2);
        var csqr = (differenceX * differenceX) + (differenceY + differenceY);
        var radius = Math.sqrt(csqr);
        var centerX = (x1 + x2) / 2;
        var centerY = (y1 + y2) / 2;
        // console.log("circle points", x1, y1, x2, y2);
        // console.log("circle diff", differenceX.toFixed(0), differenceY.toFixed(0), csqr.toFixed(0), radius.toFixed(0));
        // console.log("circle centre", centerX.toFixed(0), centerY.toFixed(0));
        // ctx.arc(centerX.toFixed(0) , (centerY-145).toFixed(0) , radius.toFixed(0) , 0, 2 * Math.PI);
        ctx.arc(centerX.toFixed(0), (centerY).toFixed(0), radius.toFixed(0), 0, 2 * Math.PI);
        //ctx.arc(this.saveX-15, this.saveY-15, 15, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = "#f47804";
        ctx.fillStyle = "#f47804";
        ctx.fill();
        // ctx.lineWidth = 1.5;
        ctx.stroke();
        this.cPush();
    };
    TeamDefaultPage.prototype.draw = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.fillRect(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
    };
    TeamDefaultPage.prototype.cPush = function () {
        this.cStep++;
        if (this.cStep < this.cPushArray.length) {
            this.cPushArray.length = this.cStep;
        }
        this.cPushArray.push(this.canvasElement.toDataURL());
        //console.log("cPush", this.cStep , this.cPushArray);
    };
    TeamDefaultPage.prototype.cUndo = function () {
        // console.log("cUndo ****");
        if (this.cStep > 0) {
            var ctx = this.canvasElement.getContext('2d');
            this.cStep--;
            var canvasPic = new Image();
            canvasPic.src = this.cPushArray[this.cStep];
            this.clearCanvas();
            canvasPic.onload = function () { ctx.globalAlpha = 1.0; ctx.drawImage(canvasPic, 0, 0); };
            document.title = this.cStep + ":" + this.cPushArray.length;
        }
    };
    TeamDefaultPage.prototype.cRedo = function () {
        // console.log("cRedo ****");
        if (this.cStep < this.cPushArray.length - 1) {
            var ctx = this.canvasElement.getContext('2d');
            this.cStep++;
            var canvasPic = new Image();
            canvasPic.src = this.cPushArray[this.cStep];
            this.clearCanvas();
            canvasPic.onload = function () { ctx.globalAlpha = 1.0; ctx.drawImage(canvasPic, 0, 0); };
        }
    };
    TeamDefaultPage.prototype.drawImage = function () {
        var ctx = this.canvasElement.getContext('2d');
        var image = new Image();
        image.src = './assets/imgs/groundImg.png';
        $(image).load(function () {
            // ctx.globalAlpha = 1.0;
            this.ctx.drawImage(image, 0, 0, 500, 200);
            this.cPush();
        });
    };
    TeamDefaultPage.prototype.clearCanvas = function () {
        var context = this.canvasElement.getContext('2d');
        context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        // this.activeTool = '';
        // this.showTool = '';
    };
    TeamDefaultPage.prototype.drawArrow = function (ev) {
        // console.log("drawArrow ***");
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        // let currentX = ev.touches[0].pageX - canvasPosition.x;
        // let currentY = ev.touches[0].pageY - canvasPosition.y;
        // var ctx = this.canvasElement.getContext('2d');
        // arbitrary styling
        ctx.strokeStyle = '#f7fc00';
        ctx.fillStyle = '#f7fc00';
        ctx.lineWidth = 2;
        // draw the line
        ctx.beginPath();
        ctx.moveTo(this.saveX, this.saveY);
        ctx.lineTo(this.currentX, this.currentY);
        ctx.stroke();
        // draw the starting arrowhead
        var startRadians = Math.atan((this.currentY - this.currentX) / (this.saveY - this.saveX));
        startRadians += ((this.saveY > this.saveX) ? -90 : 90) * Math.PI / 180;
        this.drawArrowhead(ctx, this.saveX, this.saveY, startRadians);
        // draw the ending arrowhead
        // var endRadians=Math.atan((275-50)/(250-this.x1));
        // endRadians+=((this.x2>this.x1)?90:-90)*Math.PI/180;
        // this.drawArrowhead(ctx,this.x2,this.y2,endRadians);
    };
    TeamDefaultPage.prototype.drawArrowhead = function (ctx, x, y, radians) {
        // console.log("drawArrowhead *******");
        // console.log(ctx ,x, y, radians);
        ctx.fillStyle = '#f7fc00';
        ctx.save();
        ctx.beginPath();
        // ctx.translate(x,y-143);
        ctx.translate(x, y);
        ctx.rotate(radians);
        ctx.moveTo(0, 0);
        ctx.lineTo(5, 10);
        ctx.lineTo(-5, 10);
        ctx.closePath();
        ctx.restore();
        ctx.fill();
        this.cPush();
    };
    TeamDefaultPage.prototype.startArrowDrawing = function (ev) {
        // this.canvasW = $( ".canvasDefault " ).width();
        // this.canvasH = $( ".canvasDefault " ).height();
        if (this.activeTabName == "Tools") {
            var canvasPosition = this.canvasElement.getBoundingClientRect();
            this.saveX = ev.touches[0].pageX - this.offsetX;
            this.saveY = ev.touches[0].pageY - this.offsetY;
        }
    };
    TeamDefaultPage.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
        // console.log("handleStart", this.lastX, this.lastY);
    };
    TeamDefaultPage.prototype.handleMove = function (ev) {
        // console.log("handleMove");
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.changedTouches[0].pageX;
        var currentY = ev.changedTouches[0].pageY;
        // console.log("handleMove", currentX, currentY);
        ctx.beginPath();
        ctx.lineJoin = "round";
        // ctx.moveTo(this.lastX, this.lastY-138);
        // ctx.lineTo(currentX, currentY-138);
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = '#f7fc00';
        // ctx.lineWidth = 2;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // this.lastX = currentX;
        // this.lastY = currentY;
        // var startRadians=Math.atan((currentY-this.lastY)/(currentX-this.lastX));
        // startRadians+=((currentX>this.lastX)?-90:90)*Math.PI/180;
        // this.drawArrowhead(ctx,this.lastX,this.lastY,startRadians);
        // draw the ending arrowhead
        var endRadians = Math.atan((currentY - this.lastY) / (currentX - this.lastX));
        endRadians += ((currentX > this.lastX) ? 90 : -90) * Math.PI / 180;
        this.drawArrowhead(ctx, currentX, currentY, endRadians);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageCanvas'),
        __metadata("design:type", Object)
    ], TeamDefaultPage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('processContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], TeamDefaultPage.prototype, "container", void 0);
    TeamDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-team-default',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/team-default/team-default.html"*/'<!-- \n\n<ion-header></ion-header>\n\n<ion-content  padding>\n\n\n\n  <div class="ground-container">\n\n    <canvas class="canvasDefault" #imageCanvas  (touchstart)="mouseDown($event)" (touchend)="mouseUp($event)" (touchmove)="mouseMove($event)"  [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" >\n\n      </canvas>\n\n    <img src={{groundImageSrc}} id="ionic-docs-text" #te>\n\n\n\n\n\n  </div>\n\n  <ground></ground>\n\n  <tabs *ngIf="saveClicked"></tabs>\n\n  <div [ngClass]="{ \'hide\': !saveClicked }"  class="display dispaly-ios ">\n\n    <div #processContainer ></div>\n\n  </div>\n\n</ion-content>\n\n<footer *ngIf="saveClicked"></footer> -->\n\n<ion-header></ion-header>\n\n\n\n<ion-content no-bounce>\n\n<div class="ground-container">\n\n    <!-- <p>Helloooooooooooo</p> -->\n\n    <canvas [hidden]="showTool==\'\'"\n\n      class="canvasDefault" \n\n      #imageCanvas  \n\n      (touchstart)="mouseDown($event)" \n\n      (touchend)="mouseUp($event)" \n\n      (touchmove)="mouseMove($event)"  \n\n      [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" \n\n      [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" > \n\n  </canvas>\n\n\n\n    <!-- <canvas *ngIf="activeTool == \'Arrow\'" class="canvasDefault" #imageCanvas  (touchstart)="handleStart($event)" (touchend)="handleMove($event)"   [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" [ngClass]="(activeTabName==\'Tools\')?\'canvasTools\':\'notcanvasTools\'" >\n\n    </canvas>   -->\n\n  <img *ngIf="groundImageSrc" src={{groundImageSrc}} style="max-width: 100%; height: auto;" id="ionic-docs-text" #te>\n\n  <!-- <img *ngIf="groundImageSrc" src="assets/imgs/ground_img.jpg" style="max-width: 100%; height: auto;" id="ionic-docs-text" #te> -->\n\n</div>\n\n<ground></ground>\n\n\n\n<div [ngClass]="{ \'hide\': !saveClicked }"  class="display dispaly-ios display_new">\n\n  <div #processContainer ></div>\n\n</div>\n\n\n\n<tabs *ngIf="saveClicked" class="tabs_div tabs_cont"></tabs>\n\n</ion-content>\n\n\n\n<footer *ngIf="saveClicked" class="footer_div"></footer>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/team-default/team-default.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_11__providers_file_file__["a" /* FileProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_12__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_13__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TeamDefaultPage);
    return TeamDefaultPage;
}());

//# sourceMappingURL=team-default.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileProvider = /** @class */ (function () {
    //targetPath = this.pathForImage(this.lastImage);
    function FileProvider(http, platform, transfer, file) {
        this.http = http;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.storageDirectory = '';
        this.baseUrl = 'http://www.mysoccer11.com/soccer_admin/';
        // baseUrl = 'http://128.199.118.13/soccer11/';
        this.lastImage = null;
        //this.platform.ready().then(() => {
        // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
        // if (!this.platform.is('cordova')) {
        //  return false;
        //}
        if (this.platform.is('ios')) {
            this.storageDirectory = this.file.documentsDirectory;
        }
        else if (this.platform.is('android')) {
            this.storageDirectory = this.file.dataDirectory;
        }
        //  else {
        // exit otherwise, but you could add further types here e.g. Windows
        //   return false;
        // }
        // });
    }
    FileProvider.prototype.downloadImage = function (imageName, folder) {
        var image = 'assets/images/' + imageName;
        // this.platform.ready().then(() => {
        //console.log('image is  ', image);
        var fileTransfer = this.transfer.create();
        var imageLocation = this.baseUrl + image;
        // console.log("imageLocation => ", imageLocation);
        return fileTransfer.download(imageLocation, this.storageDirectory + 'assets/images/' + folder + imageName).
            then(function (entry) {
            console.log('downloaded ', entry);
            return true;
        }, function (error) {
            console.log('image error', error);
            return false;
        });
        //  });
    };
    FileProvider.prototype.retrieveImage = function (image) {
        image = 'assets/images/' + image;
        // console.log('retrieveImage is  ', image);
        return this.file.checkFile(this.storageDirectory, image)
            .then(function (res) {
            //  console.log('image retrieved', this.storageDirectory + image);
        })
            .catch(function (err) {
            console.log('image error', err);
        });
    };
    FileProvider.prototype.getStorageDirectory = function () {
        return this.storageDirectory;
    };
    ///converting base64 image from camera
    FileProvider.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    FileProvider.prototype.saveBase64 = function (base64, folderName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/jpeg');
            var name = _this.createFileName();
            var options = { replace: true };
            // console.log('blob', blob, name, 'name')
            var path = _this.storageDirectory + 'assets/images/' + folderName;
            // console.log(path)
            _this.file.writeFile(path + '', name, blob, options)
                .then(function () {
                resolve(name);
            })
                .catch(function (err) {
                console.log('error writing blob', err);
                reject(err);
            });
        });
    };
    FileProvider.prototype.saveBase64Screen = function (base64, folderName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = _this.storageDirectory + 'assets/images/' + folderName;
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/jpeg');
            var name = _this.createFileName();
            var options = { replace: true };
            _this.file.writeFile(path + '', name, blob, options)
                .then(function () {
                console.log('file written');
                resolve(name);
            })
                .catch(function (err) {
                console.log('error writing blob', err);
                reject(err);
            });
        });
    };
    /* saveImageFromCamera(imagePath) {
       console.log(imagePath)
       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
     }
     saveImageFromGallery(imagePath) {
       this.filePath.resolveNativePath(imagePath)
         .then(filePath => {
           let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
           let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
         })
         .catch(err => console.log(err));;
  
     }*/
    // Create a new name for the image
    FileProvider.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    FileProvider.prototype.uploadImage = function (targetUrl) {
        // Destination URL
        var url = 'http://www.mysoccer11.com/soccer_admin/uploads';
        // var url = 'http://128.199.118.13/soccer11/assets/images';
        // File for Upload
        var targetPath = targetUrl;
        // File name only
        var filename = localStorage.getItem('activeLineup');
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpg",
            headers: {}
        };
        var fileTransfer = this.transfer.create();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log('Image succesful uploaded.', data);
        }, function (err) {
            console.log('Image err.', err);
        });
    };
    FileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], FileProvider);
    return FileProvider;
}());

//# sourceMappingURL=file.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map