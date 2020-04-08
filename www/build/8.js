webpackJsonp([8],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterPageModule = /** @class */ (function () {
    function FooterPageModule() {
    }
    FooterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterPage */]),
            ],
        })
    ], FooterPageModule);
    return FooterPageModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPage; });
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
 * Generated class for the FooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FooterPage = /** @class */ (function () {
    function FooterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        alert("here");
    }
    FooterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FooterPage');
    };
    FooterPage.prototype.onLeagueClick = function () {
        /* this.service.getLeague().subscribe(response=>{
           console.log(response.json());
         })
       }
       onTeamClick(){
        /* this.service.getTeam().subscribe(response=>{
           console.log(response.json());
         })*/
    };
    FooterPage.prototype.onGoClick = function () {
        console.log('Go clicked');
    };
    FooterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-footer',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/footer/footer.html"*/'<!--\n\n  Generated template for the FooterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>footer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>-->\n\n<ion-footer>\n\n  <div class="bar bar-footer bar-balanced">\n\n      <button class="btn btn-primary" (click)=onLeagueClick($event) >League</button>\n\n      <button class="btn btn-primary" (click)=onTeamClick($event)>Team</button>\n\n      <button class="btn btn-primary" (click)=onGoClick($event)>Go</button>\n\n      <button class="btn btn-primary" [routerLink]="[\'/add-team\']">Make Your Team</button>\n\n  </div>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/footer/footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ })

});
//# sourceMappingURL=8.js.map