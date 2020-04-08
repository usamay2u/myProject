webpackJsonp([2],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAddPageModule", function() { return TeamAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_add__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamAddPageModule = /** @class */ (function () {
    function TeamAddPageModule() {
    }
    TeamAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_add__["a" /* TeamAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_add__["a" /* TeamAddPage */]),
            ],
        })
    ], TeamAddPageModule);
    return TeamAddPageModule;
}());

//# sourceMappingURL=team-add.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { Keyboard } from '@ionic-native/keyboard';
//import {DomSanitizationService} from '@angular/platform-browser';
/**
 * Generated class for the TeamAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamAddPage = /** @class */ (function () {
    function TeamAddPage(navCtrl, viewCtrl, navParams, formBuilder, service, dbProvider, platform, camera, fileObj, toastCtrl, _SharedService, 
        // private keyboard: Keyboard,
        // private _DomSanitizationService: DomSanitizationService,
        actionSheetCtrl, ga) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dbProvider = dbProvider;
        this.platform = platform;
        this.camera = camera;
        this.fileObj = fileObj;
        this.toastCtrl = toastCtrl;
        this._SharedService = _SharedService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.ga = ga;
        this.ga.trackView('Make Your Team Page');
        this.setFormControl();
    }
    TeamAddPage.prototype.setFormControl = function () {
        this.addTeamForm = this.formBuilder.group({
            team_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            manager_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    };
    TeamAddPage.prototype.ngOnInit = function () {
        //  this.photos = [];
    };
    TeamAddPage.prototype.presentActionSheet = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        if (type == 'logo')
                            _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        else
                            _this.takeManagerPhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        if (type == 'logo')
                            _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                        else
                            _this.takeManagerPhoto(_this.camera.PictureSourceType.CAMERA);
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
    TeamAddPage.prototype.takePhoto = function (sourceType) {
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
            _this.fileObj.saveBase64(_this.base64Image, 'team/').then(function (teamLogo) {
                _this.teamImagename = teamLogo;
            });
            console.log(_this.teamImagename);
        }, function (err) {
            console.log(err);
        });
    };
    TeamAddPage.prototype.takeManagerPhoto = function (sourceType) {
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
            _this.photoManager = _this.base64Image;
            _this.fileObj.saveBase64(_this.base64Image, 'team/').then(function (manager) {
                _this.managerImageName = manager;
            });
            console.log('manager', _this.managerImageName);
        }, function (err) {
            console.log(err);
        });
    };
    TeamAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamAddPage');
        //this.keyboard.disableScroll(true);
    };
    TeamAddPage.prototype.dismiss = function () {
        this._SharedService.setOpenTeam.emit('false');
        this.viewCtrl.dismiss();
    };
    TeamAddPage.prototype.addTeam = function () {
        console.log("ADD TEAM...");
    };
    TeamAddPage.prototype.onSaveTeam = function () {
        var _this = this;
        this.addTeamForm.patchValue({
            defaultUser: this.addTeamForm
        });
        var formObjData = this.addTeamForm.value;
        this.dbProvider.addCustomTeam(formObjData, this.teamImagename, this.managerImageName)
            .then(function (customTeamData) {
            localStorage.setItem("activeLeague", '1');
            _this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then(function (data) {
                _this._SharedService.refreshTeams.emit(data);
                _this._SharedService.retrieveData.emit(data);
                _this._SharedService.refreshDefaultTeams.emit(customTeamData['insertId']);
                _this.toastCtrl.callToast('A new team was added successfully.');
                _this.addLineUp(customTeamData['insertId'], formObjData['team_name']);
            });
            _this.dismiss();
        });
    };
    TeamAddPage.prototype.addLineUp = function (teamId, team_name) {
        var _this = this;
        var lineUpArray = [];
        var LineUpName = 'Team';
        this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));
        lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': teamId, 'team': team_name, 'logo': '', 'teamName': LineUpName });
        this.dbProvider.insertLineUp(lineUpArray)
            .then(function (lineupId) {
            _this._SharedService.updateMenu.emit('update menu');
        });
    };
    TeamAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-team-add',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/team-add/team-add.html"*/'<!--\n\n  Generated template for the TeamAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>team-add</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n\n\n<ion-content class="main-view">\n\n  <!-- <div class="close" (click)="dismiss()">X</div> -->\n\n  <div class="team_modal_content">\n\n    <ion-buttons right>\n\n      <button ion-button icon-only style="background: transparent !important;" (click)="dismiss()">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <form [formGroup]="addTeamForm">\n\n      <div class="jersey-display">\n\n        <ion-row>\n\n          <ion-col col-6 style="padding:0px">\n\n            <div class="left">\n\n              <ion-input type="text" [formControl]="addTeamForm.controls[\'team_name\']" placeholder="Team Name" class="texts-input"></ion-input>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 style="padding:0px">\n\n            <div class="right">\n\n              <!-- <input type="file" (change)="fileUpload($event)" id="file-input" style="opacity: 0" #fileInp> -->\n\n              <button ion-button class="button-upload" (click)="presentActionSheet(\'logo\')">\n\n                <ion-icon name="camera"></ion-icon>Upload Logo</button>\n\n              </div>\n\n          </ion-col>\n\n        </ion-row >\n\n\n\n        <ion-row>\n\n            <!-- <ion-col col-4></ion-col> -->\n\n            <ion-col>\n\n              <ion-label>* Upload square Images</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="photo">\n\n          <ion-col col-8></ion-col>\n\n          <ion-col>\n\n            <img src={{photo}} *ngIf="photo" style="height: 35px;width: 35px;padding-bottom: 0px;margin-bottom: 0px" />\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <br>\n\n\n\n        <!-- <ion-row>\n\n          <ion-col col-6 style="padding:0px">\n\n            <div class="left">\n\n              <ion-input type="text" [formControl]="addTeamForm.controls[\'manager_name\']" placeholder="Manager Name" class="texts-input"></ion-input>\n\n            </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-6 style="padding:0px">\n\n            <div class="right">\n\n              <button ion-button class="button-upload" (click)="presentActionSheet(\'manager\')">\n\n              <ion-icon name="camera"></ion-icon>Upload Image</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-6></ion-col>\n\n          <ion-col>\n\n            <ion-label>* Upload square Images</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="photoManager">\n\n          <ion-col col-8></ion-col>\n\n          <ion-col>\n\n            <img src={{photoManager}}  style="height: 35px;width: 35px;padding-bottom: 0px;margin-bottom: 0px" />\n\n          </ion-col>\n\n        </ion-row> -->\n\n\n\n        <ion-row>\n\n          <ion-col class="col" col-12="">\n\n            <button class="button-add" (click)="onSaveTeam()">Add</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/team-add/team-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_file__["a" /* FileProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TeamAddPage);
    return TeamAddPage;
}());

//# sourceMappingURL=team-add.js.map

/***/ })

});
//# sourceMappingURL=2.js.map