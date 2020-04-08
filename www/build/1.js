webpackJsonp([1],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSavePageModule", function() { return TeamSavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_save__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamSavePageModule = /** @class */ (function () {
    function TeamSavePageModule() {
    }
    TeamSavePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_save__["a" /* TeamSavePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_save__["a" /* TeamSavePage */]),
            ],
        })
    ], TeamSavePageModule);
    return TeamSavePageModule;
}());

//# sourceMappingURL=team-save.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamSavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_library__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_cordova_plugin_ratio_crop__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_pro__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__ = __webpack_require__(50);
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
 * Generated class for the TeamSavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamSavePage = /** @class */ (function () {
    function TeamSavePage(navCtrl, navParams, viewCtrl, _SharedService, toastCtrl, photoLib, 
        // private crop: Crop,
        services, base64, socialSharing, clipboard, crop, admob, platform, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.photoLib = photoLib;
        this.services = services;
        this.base64 = base64;
        this.socialSharing = socialSharing;
        this.clipboard = clipboard;
        this.crop = crop;
        this.admob = admob;
        this.platform = platform;
        this.ga = ga;
        this.base64Str = '';
        this.showModel = false;
        this.cropOptions = {
            quality: 100,
            targetWidth: 1080,
            targetHeight: 1080,
            widthRatio: -1,
            heightRatio: -1
        };
        this.ga.trackView('Save Page');
        if (this.platform.is('android')) {
            this.androidAdUnit = 'ca-app-pub-3177597429175100/5082349560';
        }
        else if (this.platform.is('ios')) {
            this.androidAdUnit = 'YOUR_ADID_IOS';
        }
    }
    TeamSavePage.prototype.ngOnInit = function () {
        var _this = this;
        this.screenshotImg = '';
        this.screenshotImg = this.navParams.get('screenshot');
        this.crop.ratioCrop(this.screenshotImg, this.cropOptions)
            .then(function (newImage) {
            _this.showModel = true;
            console.log(newImage);
            _this.screenshotImg = newImage;
            _this.base64Str = _this.screenshotImg;
            _this.arrayPath = _this.base64Str.split('?');
            setTimeout(function () {
                _this.dataUri = _this.convertToDataURLviaCanvas(_this.arrayPath[0], 'image/jpeg');
            }, 2000);
        }, function (error) {
            _this.showModel = false;
            // this.dismissNew();
            _this.launchInterstitial();
        });
        // this.crop.crop(this.screenshotImg, { quality: 100, targetWidth: -1, targetHeight: -1})
        //   .then(
        //     newImage => {
        //       this.screenshotImg = newImage;
        //       this.base64Str = this.screenshotImg;
        //       this.arrayPath = this.base64Str.split('?');
        //       setTimeout(()=>{
        //       this.dataUri = this.convertToDataURLviaCanvas(this.arrayPath[0], 'image/jpeg');
        //     },2000)
        //   },
        //     error => {
        //       this.dismiss();
        //     }
        //   );
        this._SharedService.refreshAfterSave.emit("e");
    };
    // show Interstitial Ads
    TeamSavePage.prototype.launchInterstitial = function () {
        var _this = this;
        var adId;
        if (this.platform.is('android')) {
            adId = 'ca-app-pub-3177597429175100/5082349560';
        }
        else if (this.platform.is('ios')) {
            adId = 'YOUR_ADID_IOS';
        }
        this.admob.prepareInterstitial({ adId: adId, license: "justinwilson28@gmail.com/fd1e7592ac1ca9d1ee450534aaf7df4f", isTesting: false })
            .then(function () { _this.admob.showInterstitial(); });
        this.admob.onAdDismiss()
            .subscribe(function () {
            var that = _this;
            setTimeout(function () {
                that.dismiss();
            }, 0);
        });
        this.admob.onAdFailLoad()
            .subscribe(function (err) {
            //  console.log('Error loading ad:', err);
            var that = _this;
            setTimeout(function () {
                that.dismiss();
            }, 0);
        });
    };
    TeamSavePage.prototype.copyToClip = function () {
        this.clipboard.copy(this.responseUrl);
        this.toastCtrl.callToast('Text copied.');
    };
    TeamSavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamSavePage');
    };
    TeamSavePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // dismissNew() {
    //   this.viewCtrl.dismiss();
    //   this.launchInterstitial();
    // }
    TeamSavePage.prototype.openSocialMedia = function (type) {
        var _this = this;
        // console.log(this.screenshotImg)
        // Check if sharing via email is supported
        if (type != 'photo') {
            this.socialSharing.canShareVia(type, null, null, null, null).then(function () {
            }).catch(function () {
                _this.toastCtrl.callToast(type + ' is not installed on your device. Please install it to use this feature.');
            });
        }
        if (type == 'watsapp') {
            // Share via email
            this.socialSharing.shareViaWhatsApp(this.responseUrl, this.screenshotImg, null).then(function () {
                // Success!
                console.log('success');
            }).catch(function () {
                // Error!
            });
        }
        else if (type == 'facebook') {
            // Share via email
            this.socialSharing.shareViaFacebookWithPasteMessageHint(this.responseUrl, this.screenshotImg, null).then(function () {
                // Success!
                console.log('success');
            }).catch(function () {
                // Error!
            });
        }
        else if (type == 'twitter') {
            // Share via email
            this.socialSharing.shareViaTwitter(this.responseUrl, this.screenshotImg, null).then(function () {
                // Success!
                console.log('success');
            }).catch(function () {
                // Error!
            });
        }
        else if (type == 'instagram') {
            // Share via email
            this.socialSharing.shareViaInstagram(this.responseUrl, this.screenshotImg).then(function () {
                // Success!
                console.log('success');
            }).catch(function () {
                // Error!
            });
        }
        else if (type == 'photo') {
            // Share via email
            this.photoLib.requestAuthorization().then(function (response) {
                _this.photoLib.saveImage(_this.arrayPath[0], "mySoccer11")
                    .then(function (libraryItem) {
                    // Success!
                    _this.toastCtrl.callToast('Image Saved to mySoccer11 album in gallery.');
                }).catch(function (err) {
                    console.log('err to album', err);
                });
                _this.photoLib.saveImage(_this.dataUri, "dataUri")
                    .then(function (libraryItem) {
                    // Success!
                    _this.toastCtrl.callToast('Image Saved to mySoccer11 album in gallery.');
                }).catch(function (err) {
                    console.log('err to album', err);
                });
            })
                .catch(function (err) { return console.log('permissions weren\'t granted'); });
        }
    };
    TeamSavePage.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var canvasPosition = _this.canvas.nativeElement.getBoundingClientRect();
            var ctx = _this.canvas.nativeElement.getContext('2d');
            ctx.drawImage(_this.imgElement.nativeElement, 0, 0);
            var dataURL = _this.canvas.nativeElement.toDataURL(outputFormat);
            resolve(dataURL);
        });
    };
    TeamSavePage.prototype.postToServer = function () {
        var that = this;
        setTimeout(function () {
            var uri = { 'images': that.dataUri.__zone_symbol__value };
            that.services.postImage(uri).subscribe(function (response) {
                var imgArr = JSON.stringify(response);
                that.responseUrl = JSON.parse(imgArr).image_url;
                that.copyToClip();
            });
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageCanvas'),
        __metadata("design:type", Object)
    ], TeamSavePage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageScreenshot'),
        __metadata("design:type", Object)
    ], TeamSavePage.prototype, "imgElement", void 0);
    TeamSavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-team-save',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/team-save/team-save.html"*/'<!--\n\n  Generated template for the TeamAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>team-add</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n<ion-content class="main-view" [hidden]="!showModel">\n\n  <!-- <div class="close" (click)="launchInterstitial()">X</div> -->\n\n  <div class="team_modal_content">\n\n    <ion-buttons right>\n\n      <button ion-button icon-only style="background: transparent !important;" (click)="launchInterstitial()">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <div class="profile">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <div class="lineup">\n\n              <!-- <img src="././assets/imgs/line.png"/> -->\n\n              <img src="{{screenshotImg}}" /> </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <div class="share">\n\n              <img src="{{screenshotImg}}" #imageScreenshot/>\n\n              <!-- <ion-input type="text" value="{{responseUrl}}" readonly placeholder="Click Save & Share" ></ion-input>\n\n              <button ion-button (click)="copyToClip()" [disabled]="!responseUrl">Copy link</button><br>\n\n              <button ion-button (click)="postToServer()" >Save & Share to</button> -->\n\n              <ion-input type="text" value="{{responseUrl}}" readonly placeholder="Click Save & Share" ></ion-input>\n\n              <button ion-button (click)="postToServer()">Copy link</button><br>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <canvas  #imageCanvas [hidden]=1 width="900" height="900" >\n\n    </canvas>\n\n\n\n    <div class="social">\n\n      <button ion-button class="save_button">Save & Share to</button>\n\n      <ion-grid>\n\n        <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-2>\n\n          <img src="././assets/imgs/fb.png" (click)="openSocialMedia(\'facebook\')" />\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <img src="././assets/imgs/twitter.png" (click)="openSocialMedia(\'twitter\')" />\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <img src="././assets/imgs/whatsapp.png" (click)="openSocialMedia(\'watsapp\')">\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <img src="././assets/imgs/insta.png" (click)="openSocialMedia(\'instagram\')" />\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <img src="././assets/imgs/download.png" (click)="openSocialMedia(\'photo\')" />\n\n        </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/team-save/team-save.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_cordova_plugin_ratio_crop__["a" /* RatioCrop */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TeamSavePage);
    return TeamSavePage;
}());

//# sourceMappingURL=team-save.js.map

/***/ })

});
//# sourceMappingURL=1.js.map