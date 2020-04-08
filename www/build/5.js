webpackJsonp([5],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAddPageModule", function() { return PlayerAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_add__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerAddPageModule = /** @class */ (function () {
    function PlayerAddPageModule() {
    }
    PlayerAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__player_add__["a" /* PlayerAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player_add__["a" /* PlayerAddPage */]),
            ],
        })
    ], PlayerAddPageModule);
    return PlayerAddPageModule;
}());

//# sourceMappingURL=player-add.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_toast__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import swal from 'sweetalert';
/**
 * Generated class for the PlayerAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerAddPage = /** @class */ (function () {
    function PlayerAddPage(navCtrl, navParams, viewCtrl, formBuilder, fileObj, dbProvider, _SharedService, toastCtrl, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.fileObj = fileObj;
        this.dbProvider = dbProvider;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.keeperExist = false;
        this.isKeeper = false;
    }
    PlayerAddPage.prototype.ngOnInit = function () {
        this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        // this.currentTeamId = this.activeTeamDetails[0].id;
        this.currentTeamId = this.activeTeamDetails[0].teamId;
        // console.log("ngOnInit LOCAL STORAGE TEAM ====>>>> ", this.activeTeamDetails); 
        this.setFormControl();
    };
    PlayerAddPage.prototype.setFormControl = function () {
        this.addPlayerForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            teamId: [this.currentTeamId, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            image: [''],
            jerseyNo: [''],
            isGoalkeeper: [this.isKeeper]
        });
    };
    PlayerAddPage.prototype.onSavePlayer = function () {
        var players = JSON.parse(localStorage.getItem('activePlayerDetails'));
        //can add maximum of 15 players
        // if (players.length <= 15) {
        this.addPlayerForm.patchValue({
            defaultUser: this.addPlayerForm
        });
        var formObjData = this.addPlayerForm.value;
        console.log("formObjData ---- ", formObjData);
        /*if (formObjData.isGoalkeeper == true) {
          //check if goalkeeper exixts
          
          for (let i = 0; i < players.length; i++) {
            if (players[i].isGoalkeeper == 'true' || players[i].isGoalkeeper ==  1) {
              console.log('players[i].isGoalkeeper',players[i].isGoalkeeper);
              this.keeperExist = true;
            }
          }
          console.log('keeperExist',this.keeperExist);
          if (this.keeperExist == true) {
           this.keeperExist = false;
            this.toastCtrl.callToast('Goalkeeper already exixts.');
          }
          else {
            this.addCustomTeam(formObjData);
          }
        }
        else {
          this.addCustomTeam(formObjData);
        }*/
        this.addCustomTeam(formObjData);
        /*  }
          else {
            this.toastCtrl.callToast('No more players can be added as this team has already reached its limit.');
          }*/
    };
    PlayerAddPage.prototype.presentActionSheet = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    PlayerAddPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.base64Image = "data:image/jpeg;base64," + imagePath;
            _this.photo = _this.base64Image;
            _this.fileObj.saveBase64(_this.base64Image, 'player/').then(function (logo) {
                _this.playerLogo = logo;
                console.log(_this.playerLogo);
            });
        }, function (err) {
            console.log(err);
        });
    };
    PlayerAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerAddPage');
    };
    PlayerAddPage.prototype.dismiss = function () {
        this._SharedService.setOpenPage.emit('false');
        this.viewCtrl.dismiss();
    };
    PlayerAddPage.prototype.onGoalKeeperClick = function () {
        this.isKeeper = !this.isKeeper;
    };
    PlayerAddPage.prototype.addCustomTeam = function (formObjData) {
        var _this = this;
        this.dbProvider.addCustomPlayer(formObjData, this.playerLogo)
            .then(function (customPlayerData) {
            console.log("customPlayerData ---- > ", customPlayerData);
            // this.dbProvider.selectTeams().then((data)=>{
            //   console.log("selectTeams data ---- > ", data);
            // })
            // console.log("Custom Player Added...");
            // if(this.currentTeamId == "0" || this.currentTeamId == 0)
            //   this.currentTeamId = this.activeTeamDetails[0].id;
            _this.dbProvider.selectPlayers(_this.currentTeamId).then(function (response) {
                _this.playersList = response;
                console.log("New team players => ", _this.playersList);
                localStorage.setItem('activePlayerDetails', JSON.stringify(_this.playersList));
                // console.log("selectplayers data ---- > ", response);
                _this._SharedService.refreshPlayers.emit(_this.playersList);
                _this._SharedService.retrieveData.emit(_this.playersList);
                _this.toastCtrl.callToast('Player details saved successfully.');
            });
            _this.dismiss();
        });
    };
    PlayerAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-player-add',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/player-add/player-add.html"*/'<!--\n\n  Generated template for the PlayerAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<!-- <ion-title>In Add Player</ion-title> -->\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="guide-modal main-view">\n\n    <div class="player_modal_content">\n\n      <!-- <div class="close" (click)="dismiss()">X</div> -->\n\n      <ion-buttons right>\n\n        <button ion-button icon-only style="background: transparent !important;" (click)="dismiss()">\n\n          <ion-icon name="close-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <h4>Add Player</h4>\n\n    \n\n    <div class="jersey-display">\n\n    \n\n    <form [formGroup]="addPlayerForm">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-input type="text" [formControl]="addPlayerForm.controls[\'name\']" placeholder="Name"></ion-input>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-input type="number" [formControl]="addPlayerForm.controls[\'jerseyNo\']" placeholder="Jersey No."></ion-input>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n              <button ion-button class="button-upload" (click)="presentActionSheet(\'logo\')">\n\n                  <ion-icon name="camera"></ion-icon></button> \n\n                </ion-col>\n\n          <ion-col col-4>\n\n            <div class="select">\n\n              <ion-checkbox  class="checkbox" [formControl]="addPlayerForm.controls[\'isGoalkeeper\']"  (ionChange)="onGoalKeeperClick()" > </ion-checkbox> Goalkeeper </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <!-- <ion-col col-4></ion-col> -->\n\n            <ion-col>\n\n              <ion-label>* Upload square Images</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="photo">\n\n            <ion-col col-3></ion-col>\n\n            <ion-col>\n\n              <img src={{photo}} *ngIf="photo" style="height: 35px;width: 35px;padding-bottom: 0px;margin-bottom: 0px" />\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!-- <ion-row>\n\n          <ion-col col-3>\n\n            <ion-input type="text" value="" placeholder="Name"></ion-input>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-input type="text" value="" placeholder="Jersey No."></ion-input>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <input type="file" (change)="fileUpload($event)" id="file-input" style="opacity: 0" #fileInp>\n\n            <button ion-button (click)="onClick()" class="button-upload">Upload Logo</button>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <div class="select">\n\n              <ion-checkbox class="checkbox"> </ion-checkbox> Players</div>\n\n          </ion-col>\n\n        </ion-row> -->\n\n      \n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button ion-button (click)="onSavePlayer()" class="button-add">Add</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n      </ion-grid>\n\n    </form>\n\n    \n\n    \n\n    </div>\n\n    </div>\n\n  </ion-content>\n\n\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/player-add/player-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_file_file__["a" /* FileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], PlayerAddPage);
    return PlayerAddPage;
}());

//# sourceMappingURL=player-add.js.map

/***/ })

});
//# sourceMappingURL=5.js.map