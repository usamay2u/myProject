webpackJsonp([7],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JerseyAddPageModule", function() { return JerseyAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jersey_add__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JerseyAddPageModule = /** @class */ (function () {
    function JerseyAddPageModule() {
    }
    JerseyAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jersey_add__["a" /* JerseyAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jersey_add__["a" /* JerseyAddPage */]),
            ],
        })
    ], JerseyAddPageModule);
    return JerseyAddPageModule;
}());

//# sourceMappingURL=jersey-add.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JerseyAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_file_file__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_sharedServices__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_toast__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JerseyAddPage = /** @class */ (function () {
    function JerseyAddPage(navCtrl, viewCtrl, navParams, formBuilder, service, dbProvider, element, renderer, fileObj, _SharedService, toastCtrl, ga) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dbProvider = dbProvider;
        this.element = element;
        this.renderer = renderer;
        this.fileObj = fileObj;
        this._SharedService = _SharedService;
        this.toastCtrl = toastCtrl;
        this.ga = ga;
        this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'));
        this.pattern_PrimaryColor = "#5EBA7D";
        this.pattern_SecondaryColor = "#203de5";
        this.pattern_PrimaryColorG = "#1d09f2";
        this.pattern_SecondaryColorG = "#ff0000";
        this.activePatternId = 1;
        this.activePatternIdG = 3;
        this.activeJerseyType = 1;
        this.hideDropDown = true;
        this.hideColorPicker = true;
        this.colorSelector = 1;
        this.pattern_Color_1 = "none";
        this.pattern_Color_2 = this.pattern_SecondaryColor;
        this.pattern_Color_3 = this.pattern_SecondaryColor;
        this.pattern_Color_4 = this.pattern_SecondaryColor;
        this.pattern_Color_5 = this.pattern_PrimaryColor;
        this.pattern_Color_6 = this.pattern_PrimaryColor;
        this.pattern_Color_7 = this.pattern_PrimaryColor;
        this.pattern_Color_8 = this.pattern_SecondaryColor;
        this.pattern_Color_9 = this.pattern_SecondaryColor;
        this.pattern_Color_10 = "";
        this.pattern_Color_G1 = "none";
        this.pattern_Color_G2 = this.pattern_PrimaryColorG;
        this.pattern_Color_G3 = this.pattern_SecondaryColorG;
        this.pattern_Color_G4 = this.pattern_SecondaryColorG;
        this.pattern_Color_G5 = this.pattern_PrimaryColorG;
        this.pattern_Color_G6 = this.pattern_SecondaryColorG;
        this.pattern_Color_G7 = this.pattern_SecondaryColorG;
        this.pattern_Color_G8 = this.pattern_SecondaryColorG;
        this.pattern_Color_G9 = this.pattern_SecondaryColorG;
        this.pattern_Color_G10 = this.pattern_SecondaryColorG;
        this.colorsArray = [
            {
                'name': 'White',
                'code': '#ffffff'
            },
            {
                'name': 'Aqua',
                'code': '#00FFFF'
            },
            {
                'name': 'Black',
                'code': '#000000'
            },
            {
                'name': 'Blue',
                'code': '#0000FF'
            },
            {
                'name': 'Brown',
                'code': '#A52A2A'
            },
            {
                'name': 'Chartreuse',
                'code': '#7FFF00'
            },
            {
                'name': 'CornflowerBlue',
                'code': '#6495ED'
            },
            {
                'name': 'DarkGray',
                'code': '#A9A9A9'
            },
            {
                'name': 'Gold',
                'code': '#FFD700'
            },
            {
                'name': 'Red',
                'code': '#FF0000'
            },
            {
                'name': 'Yellow',
                'code': '#FFFF00'
            },
            {
                'name': 'LightSkyBlue',
                'code': '#87CEFA'
            }
        ];
        this.colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
        this.ga.trackView('Custom Jersey Page');
        this.setFormControl();
    }
    JerseyAddPage.prototype.ngOnInit = function () {
        //console.log("activeTeamDetails ====>>>> ", this.activeTeamDetails);
    };
    JerseyAddPage.prototype.setFormControl = function () {
        this.addJerseyForm = this.formBuilder.group({
            playerImg: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            goalKeeperImg: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            patternId: [''],
            primaryColour: [''],
            secondaryColour: [''],
            jerseyText: [''],
            jerseyTextColour: [''],
        });
    };
    JerseyAddPage.prototype.onSaveJersey = function () {
        var _this = this;
        this.addJerseyForm.patchValue({
            defaultUser: this.addJerseyForm
        });
        var formObjData = this.addJerseyForm.value;
        // console.log("formObjData ---- ", formObjData);
        this.dbProvider.addCustomJersey(formObjData)
            .then(function (customJerseyData) {
            // console.log("custom Jersey Data ---- > ", customJerseyData);
            // this.dbProvider.selectTeams().then((data)=>{
            //   console.log("selectTeams data ---- > ", data);
            // })
            // console.log("Custom Jersey Added...");
            _this.dismiss();
        });
    };
    JerseyAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JerseyAddPage');
    };
    JerseyAddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    JerseyAddPage.prototype.onSaveSVG_form = function (data) {
        console.log("onSaveSVG_form ---- ", data);
    };
    JerseyAddPage.prototype.onSaveSVG = function () {
        // console.log("activeJerseyType ---- ", this.activeJerseyType)
        var svgString = new XMLSerializer().serializeToString(document.querySelector('svg.jersey-svg'));
        var svgStringg = new XMLSerializer().serializeToString(document.querySelector('svg.jersey-svg-g'));
        //var canvas = document.getElementById("canvas"); this.element.nativeElement.querySelector('#active' + playerItem.id.toString()).left;
        var canvas = this.element.nativeElement.querySelector('#canvas');
        var ctx = canvas.getContext("2d");
        var DOMURL = self.URL || window.webkitURL || self;
        var img = new Image();
        var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        var url = DOMURL.createObjectURL(svg);
        var canvasg = this.element.nativeElement.querySelector('#canvasG');
        var ctxg = canvasg.getContext("2d");
        var DOMURLg = self.URL || window.webkitURL || self;
        //var imgg = new Image();
        var svgg = new Blob([svgStringg], { type: "image/svg+xml;charset=utf-8" });
        var urlg = DOMURLg.createObjectURL(svgg);
        var selfVar = this;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            var png = canvas.toDataURL("image/png");
            // console.log("PNG A ::: ", png)
            document.querySelector('#png-container').innerHTML = '<img src="' + png + '"/>';
            DOMURL.revokeObjectURL(png);
            selfVar.base64Image = png; // "data:image/jpeg;base64," +
            // ctxg.drawImage(img, 0, 0);
            // var pngg = canvasg.toDataURL("image/png");
            // console.log("PNG B ::: ", pngg)
            // document.querySelector('#png-containerG').innerHTML = '<img src="' + pngg + '"/>';
            // DOMURLg.revokeObjectURL(pngg);
            // selfVar.base64Imageg = pngg; // "data:image/jpeg;base64," +
            // console.log("PNG 1", png)
            // console.log("PNG 2", pngg)
            // console.log("canvas 1", canvas)
            // console.log("canvas 2", canvasg)
            selfVar.fileObj.saveBase64Screen(selfVar.base64Image, 'jersey').then(function (dataUrl) {
                var data = selfVar.fileObj.retrieveImage(dataUrl);
                var dirName = selfVar.fileObj.getStorageDirectory();
                // console.log('screenshot', dataUrl, data)
                var filePath = dirName + "assets/images/" + dataUrl;
                // console.log("filePath ------>>>", dirName, filePath);
                //$('.new-img').attr('src',(filePath));
                selfVar.onSaveSVG2(dataUrl);
            }, function (error) { return console.error('Error image', error); });
        };
        img.src = url;
        /**** Save to device code */
    };
    JerseyAddPage.prototype.onSaveSVG2 = function (dataUrl) {
        // console.log("***22222222*** ", this.activeJerseyType)
        var svgString = new XMLSerializer().serializeToString(document.querySelector('svg.jersey-svg-g'));
        var canvas = this.element.nativeElement.querySelector('#canvasG');
        var ctx = canvas.getContext("2d");
        var DOMURL = self.URL || window.webkitURL || self;
        var img = new Image();
        var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        var url = DOMURL.createObjectURL(svg);
        var selfVar = this;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            var png = canvas.toDataURL("image/png");
            // console.log("PNG ******* ::: ", png)
            document.querySelector('#png-containerG').innerHTML = '<img src="' + png + '"/>';
            DOMURL.revokeObjectURL(png);
            selfVar.base64Imageg = png; // "data:image/jpeg;base64," +
            // console.log("PNG XXXXXXXXXX ::: ", png)
            // console.log("canvas XXXXXXX ::: ", canvas)
            //$('.new-img').attr('src',(filePath));
            selfVar.fileObj.saveBase64Screen(selfVar.base64Imageg, 'jersey').then(function (dataUrlg) {
                var datag = selfVar.fileObj.retrieveImage(dataUrlg);
                var dirNameg = selfVar.fileObj.getStorageDirectory();
                // console.log('screenshot', dataUrlg, datag)
                var filePathg = dirNameg + "assets/images/" + dataUrlg;
                // console.log("filePath ------>>>", dirNameg, filePathg);
                $('.new-img').attr('src', (filePathg));
                var formObjData = {
                    "playerImg": dataUrl,
                    "goalKeeperImg": dataUrlg,
                    "patternId": 1,
                    "primaryColour": selfVar.pattern_PrimaryColor,
                    "secondaryColour": selfVar.pattern_PrimaryColor,
                    "jerseyText": "S 11",
                    "jerseyTextColour": "#ffffff",
                };
                // console.log("formObjData --------->>>>>>> ", formObjData);
                selfVar.dbProvider.addCustomJersey(formObjData)
                    .then(function (customJerseyData) {
                    // console.log("custom Jersey Data ---- > ", customJerseyData);
                    // console.log("Custom Jersey Added...");
                    selfVar.dismiss();
                    selfVar._SharedService.refreshJersey.emit();
                    selfVar.toastCtrl.callToast('Jersey saved successfully.');
                });
            }, function (error) { return console.error('Error image', error); });
        };
        img.src = url;
        /**** Save to device code */
    };
    JerseyAddPage.prototype.patternChange = function (patternId) {
        // console.log("patternChange XXXQQQ---", patternId , this.activeJerseyType )
        this.activePatternId = patternId;
        if (patternId == '1') {
            this.pattern_Color_1 = "none";
            this.pattern_Color_2 = this.pattern_SecondaryColor;
            this.pattern_Color_3 = this.pattern_SecondaryColor;
            this.pattern_Color_4 = this.pattern_SecondaryColor;
            this.pattern_Color_5 = this.pattern_PrimaryColor;
            this.pattern_Color_6 = this.pattern_PrimaryColor;
            this.pattern_Color_7 = this.pattern_PrimaryColor;
            this.pattern_Color_8 = this.pattern_SecondaryColor;
            this.pattern_Color_9 = this.pattern_SecondaryColor;
            this.pattern_Color_10 = "";
        }
        else if (patternId == '2') {
            this.pattern_Color_1 = "none";
            this.pattern_Color_2 = this.pattern_SecondaryColor;
            this.pattern_Color_3 = this.pattern_PrimaryColor;
            this.pattern_Color_4 = this.pattern_PrimaryColor;
            this.pattern_Color_5 = this.pattern_SecondaryColor;
            this.pattern_Color_6 = this.pattern_SecondaryColor;
            this.pattern_Color_7 = this.pattern_PrimaryColor;
            this.pattern_Color_8 = this.pattern_SecondaryColor;
            this.pattern_Color_9 = this.pattern_SecondaryColor;
            this.pattern_Color_10 = "";
        }
        else if (patternId == '3') {
            this.pattern_Color_1 = "none";
            this.pattern_Color_2 = this.pattern_PrimaryColor;
            this.pattern_Color_3 = this.pattern_SecondaryColor;
            this.pattern_Color_4 = this.pattern_SecondaryColor;
            this.pattern_Color_5 = this.pattern_PrimaryColor;
            this.pattern_Color_6 = this.pattern_SecondaryColor;
            this.pattern_Color_7 = this.pattern_SecondaryColor;
        }
    };
    JerseyAddPage.prototype.patternChangeG = function (patternId) {
        // console.log("patternChange XXXQQQ---", patternId , this.activeJerseyType )
        this.activePatternIdG = patternId;
        if (patternId == '1') {
            this.pattern_Color_G1 = "none";
            this.pattern_Color_G2 = this.pattern_SecondaryColorG;
            this.pattern_Color_G3 = this.pattern_SecondaryColorG;
            this.pattern_Color_G4 = this.pattern_SecondaryColorG;
            this.pattern_Color_G5 = this.pattern_PrimaryColorG;
            this.pattern_Color_G6 = this.pattern_PrimaryColorG;
            this.pattern_Color_G7 = this.pattern_PrimaryColorG;
            this.pattern_Color_G8 = this.pattern_SecondaryColorG;
            this.pattern_Color_G9 = this.pattern_SecondaryColorG;
            this.pattern_Color_G10 = "";
        }
        else if (patternId == '2') {
            this.pattern_Color_G1 = "none";
            this.pattern_Color_G2 = this.pattern_SecondaryColorG;
            this.pattern_Color_G3 = this.pattern_PrimaryColorG;
            this.pattern_Color_G4 = this.pattern_PrimaryColorG;
            this.pattern_Color_G5 = this.pattern_SecondaryColorG;
            this.pattern_Color_G6 = this.pattern_SecondaryColorG;
            this.pattern_Color_G7 = this.pattern_PrimaryColorG;
            this.pattern_Color_G8 = this.pattern_SecondaryColorG;
            this.pattern_Color_G9 = this.pattern_SecondaryColorG;
            this.pattern_Color_G10 = "";
        }
        else if (patternId == '3') {
            this.pattern_Color_G1 = "none";
            this.pattern_Color_G2 = this.pattern_PrimaryColorG;
            this.pattern_Color_G3 = this.pattern_SecondaryColorG;
            this.pattern_Color_G4 = this.pattern_SecondaryColorG;
            this.pattern_Color_G5 = this.pattern_PrimaryColorG;
            this.pattern_Color_G6 = this.pattern_SecondaryColorG;
            this.pattern_Color_G7 = this.pattern_SecondaryColorG;
        }
    };
    JerseyAddPage.prototype.patternPrimaryColorChange = function (id) {
        // console.log("patternPrimaryColorChange---", id)
        if (this.activeJerseyType == 1) {
            if (id == 1) {
                this.pattern_PrimaryColor = "#ccff00";
            }
            else {
                this.pattern_PrimaryColor = "#c700ff";
            }
        }
        else {
            if (id == 1) {
                this.pattern_PrimaryColorG = "#34aa8f";
            }
            else {
                this.pattern_PrimaryColorG = "#56229b";
            }
        }
        if (this.activeJerseyType == 1) {
            this.patternChange(this.activePatternId);
        }
        else {
            this.patternChangeG(this.activePatternIdG);
        }
    };
    JerseyAddPage.prototype.patternSecondaryColorChange = function (id) {
        // console.log("patternSecondaryColorChange---", id)
        if (this.activeJerseyType == 1) {
            if (id == 1) {
                this.pattern_SecondaryColor = "#ff7b00";
            }
            else {
                this.pattern_SecondaryColor = "#00bbff";
            }
            this.patternChange(this.activePatternId);
        }
        else {
            if (id == 1) {
                this.pattern_SecondaryColorG = "#318be0";
            }
            else {
                this.pattern_SecondaryColorG = "#08e013";
            }
            this.patternChangeG(this.activePatternIdG);
        }
    };
    JerseyAddPage.prototype.activeJerseyTypeSelect = function () {
        console.log("activeJerseyTypeSelect ---", this.activeJerseyType);
    };
    JerseyAddPage.prototype.chooseJerseyType = function () {
        $("#activeJerseyType").trigger("click");
    };
    JerseyAddPage.prototype.choosePrimaryColor = function () {
        // console.log("Click on chooseMainColor");
        //$( "#primaryColorPicker" ).trigger( "click" );
        this.colorSelector = 1;
        this.hideColorPicker = false;
    };
    JerseyAddPage.prototype.primaryColorPicker = function () {
        // primaryColorVal:"FFFFFF"
        // secondaryColorVal:"FF0000"
        // pattern_PrimaryColor = "#5EBA7D";
        // pattern_SecondaryColor = "#203de5";
        // console.log("Click on primaryColorVal", this.primaryColorVal );
        // console.log("patternPrimaryColorChange---", this.activePatternId );
        if (this.activeJerseyType == 1) {
            this.pattern_PrimaryColor = this.primaryColorVal;
            this.patternChange(this.activePatternId);
        }
        else {
            this.pattern_PrimaryColorG = this.primaryColorVal;
            this.patternChangeG(this.activePatternIdG);
        }
    };
    JerseyAddPage.prototype.chooseSecondaryColor = function () {
        // console.log("Click on chooseSecondaryColor");
        //$( "#secondaryColorPicker" ).trigger( "click" );
        this.colorSelector = 2;
        this.hideColorPicker = false;
    };
    JerseyAddPage.prototype.secondaryColorPicker = function () {
        // console.log("Click on secondaryColorVal", this.secondaryColorVal );
        // console.log("patternPrimaryColorChange---", this.activePatternId );
        if (this.activeJerseyType == 1) {
            this.pattern_SecondaryColor = this.secondaryColorVal;
            this.patternChange(this.activePatternId);
        }
        else {
            this.pattern_SecondaryColorG = this.secondaryColorVal;
            this.patternChangeG(this.activePatternIdG);
        }
    };
    JerseyAddPage.prototype.chossePattern = function () {
        // console.log("Click on chooseSecondaryColor");
        $("#activePatternId").trigger("click");
    };
    JerseyAddPage.prototype.chossePatternG = function () {
        // console.log("Click on chooseSecondaryColorG");
        $("#activePatternIdG").trigger("click");
    };
    JerseyAddPage.prototype.changePattern = function () {
        // console.log("Click on changePattern", this.activePatternId );
        this.patternChange(this.activePatternId);
    };
    JerseyAddPage.prototype.changePatternG = function () {
        // console.log("Click on changePattern", this.activePatternIdG );
        this.patternChangeG(this.activePatternIdG);
    };
    JerseyAddPage.prototype.changeColor = function (code) {
        // console.log("CODE _ ", code);
        // console.log("colorSelector _ ", this.colorSelector);
        if (this.colorSelector == 1) {
            if (this.activeJerseyType == 1) {
                this.pattern_PrimaryColor = code;
            }
            else {
                this.pattern_PrimaryColorG = code;
            }
        }
        else {
            if (this.activeJerseyType == 1) {
                this.pattern_SecondaryColor = code;
            }
            else {
                this.pattern_SecondaryColorG = code;
            }
        }
        this.hideColorPicker = true;
        if (this.activeJerseyType == 1) {
            this.patternChange(this.activePatternId);
        }
        else {
            this.patternChangeG(this.activePatternIdG);
        }
    };
    JerseyAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-jersey-add',template:/*ion-inline-start:"/Users/ali/projects/mySoccer11/src/pages/jersey-add/jersey-add.html"*/'<!--\n\n  Generated template for the JerseyAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <!-- <ion-title>jersey-add</ion-title> --\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-view">\n\n  <div class="jersey_modal_content">\n\n      <!-- <div class="close" (click)="dismiss()">X</div> -->\n\n      <ion-buttons right>\n\n        <button ion-button icon-only style="background: transparent !important;" (click)="dismiss()">\n\n          <ion-icon name="close-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      \n\n      <!-- <form #addJersey="ngForm" (ngSubmit)="onSaveSVG_form(feedBack.value)" >\n\n      <input type="radio" value="1" name="activeJerseyType" ngModel checked>\n\n      <input type="radio" value="1" name="activeJerseyType" ngModel checked>\n\n      </form> -->\n\n      <ion-list [hidden]="hideDropDown" >\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="activeJerseyType" (ionChange)="activeJerseyTypeSelect()" name="activeJerseyType"  id="activeJerseyType" >\n\n            <ion-option value="1" (cancel)="onCancel()" selected >Player</ion-option>\n\n            <ion-option value="2" (cancel)="onCancel()"  >GoalKeeper</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list [hidden]="hideDropDown" >\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="activePatternId" (ionChange)="changePattern()" name="changePattern"  id="activePatternId" >\n\n            <ion-option value="1" (cancel)="onCancel()" selected >Plain</ion-option>\n\n            <ion-option value="2" (cancel)="onCancel()"  >Vertical Stripes</ion-option>\n\n            <ion-option value="3" (cancel)="onCancel()"  >Horizontal Stripes</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n      \n\n\n\n      <ion-list [hidden]="hideDropDown" >\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="activePatternIdG" (ionChange)="changePatternG()" name="changePatternG"  id="activePatternIdG" >\n\n            <ion-option value="1" (cancel)="onCancel()" selected >Plain</ion-option>\n\n            <ion-option value="2" (cancel)="onCancel()"  >Vertical Stripes</ion-option>\n\n            <ion-option value="3" (cancel)="onCancel()"  >Horizontal Stripes</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list [hidden]="hideDropDown" >\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="primaryColorVal" (ionChange)="primaryColorPicker()" name="primaryColorPicker"  id="primaryColorPicker" >\n\n            <ion-option value="#FFFFFF" (cancel)="onCancel()" selected >White (#FFFFFF)</ion-option>\n\n            <ion-option value="#00FFFF" (cancel)="onCancel()" >Aqua 	#00FFFF </ion-option>\n\n            <ion-option value="#000000" (cancel)="onCancel()"  >Black 	#000000</ion-option>\n\n            <ion-option value="#0000FF" (cancel)="onCancel()"  >Blue 	#0000FF</ion-option>\n\n            <ion-option value="#A52A2A" (cancel)="onCancel()"  >Brown 	#A52A2A</ion-option>\n\n            <ion-option value="#7FFF00" (cancel)="onCancel()"  >Chartreuse 	#7FFF00</ion-option>\n\n            <ion-option value="#6495ED" (cancel)="onCancel()"  >CornflowerBlue 	#6495ED</ion-option>\n\n            <ion-option value="#A9A9A9" (cancel)="onCancel()"  >DarkGray 	#A9A9A9</ion-option>\n\n            <ion-option value="#FFD700" (cancel)="onCancel()"  >Gold 	#FFD700</ion-option>\n\n            <ion-option value="#008000" (cancel)="onCancel()"  >Green 	#008000</ion-option>\n\n            <ion-option value="#ADFF2F" (cancel)="onCancel()"  >GreenYellow 	#ADFF2F</ion-option>\n\n            <ion-option value="#4B0082" (cancel)="onCancel()"  >Indigo  	#4B0082</ion-option>\n\n            <ion-option value="#87CEFA" (cancel)="onCancel()"  >LightSkyBlue 	#87CEFA</ion-option>\n\n            <ion-option value="#FF00FF" (cancel)="onCancel()"  >Magenta 	#FF00FF</ion-option>\n\n            <ion-option value="#7B68EE" (cancel)="onCancel()"  >MediumSlateBlue 	#7B68EE</ion-option>\n\n            <ion-option value="#191970" (cancel)="onCancel()"  >MidnightBlue 	#191970</ion-option>\n\n            <ion-option value="#FF0000" (cancel)="onCancel()"  >Red 	#FF0000</ion-option>\n\n            <ion-option value="#FFFF00" (cancel)="onCancel()"  >Yellow 	#FFFF00</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list [hidden]="hideDropDown" >\n\n          <ion-item>\n\n            <ion-select [(ngModel)]="secondaryColorVal" (ionChange)="secondaryColorPicker()" name="secondaryColorPicker"  id="secondaryColorPicker" >\n\n              <ion-option value="#FFFFFF" (cancel)="onCancel()" selected >White (#ffffff)</ion-option>\n\n              <ion-option value="#00FFFF" (cancel)="onCancel()"  >Aqua 	#00FFFF</ion-option>\n\n              <ion-option value="#000000" (cancel)="onCancel()"  >Black 	#000000</ion-option>\n\n              <ion-option value="#0000FF" (cancel)="onCancel()"  >Blue 	#0000FF</ion-option>\n\n              <ion-option value="#A52A2A" (cancel)="onCancel()"  >Brown 	#A52A2A</ion-option>\n\n              <ion-option value="#7FFF00" (cancel)="onCancel()"  >Chartreuse 	#7FFF00</ion-option>\n\n              <ion-option value="#6495ED" (cancel)="onCancel()"  >CornflowerBlue 	#6495ED</ion-option>\n\n              <ion-option value="#A9A9A9" (cancel)="onCancel()"  >DarkGray 	#A9A9A9</ion-option>\n\n              <ion-option value="#FFD700" (cancel)="onCancel()"  >Gold 	#FFD700</ion-option>\n\n              <ion-option value="#008000" (cancel)="onCancel()"  >Green 	#008000</ion-option>\n\n              <ion-option value="#ADFF2F" (cancel)="onCancel()"  >GreenYellow 	#ADFF2F</ion-option>\n\n              <ion-option value="#4B0082" (cancel)="onCancel()"  >Indigo  	#4B0082</ion-option>\n\n              <ion-option value="#87CEFA" (cancel)="onCancel()"  >LightSkyBlue 	#87CEFA</ion-option>\n\n              <ion-option value="#FF00FF" (cancel)="onCancel()"  >Magenta 	#FF00FF</ion-option>\n\n              <ion-option value="#7B68EE" (cancel)="onCancel()"  >MediumSlateBlue 	#7B68EE</ion-option>\n\n              <ion-option value="#191970" (cancel)="onCancel()"  >MidnightBlue 	#191970</ion-option>\n\n              <ion-option value="#FF0000" (cancel)="onCancel()"  >Red 	#FF0000</ion-option>\n\n              <ion-option value="#FFFF00" (cancel)="onCancel()"  >Yellow 	#FFFF00</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n\n\n    <h4>Add Jersey </h4>\n\n    <div class="jersey-display">\n\n      <!-- Player Jersey Pattern 1 and 2 -->\n\n      <!-- <ion-row> -->\n\n        <ion-col col-6 style="padding:0px">\n\n          <div class="left" *ngIf="( activePatternId == 1 || activePatternId == 2 )" >\n\n            <svg width="125px" height="125px" viewBox="267 346 216 219" class="jersey-svg">\n\n              <defs>\n\n                <radialGradient cx="52.64281%" cy="15.4758772%" fx="52.64281%" fy="15.4758772%" r="54.058955%" id="radialGradient-1">\n\n                  <stop offset="32.89%"></stop>\n\n                  <stop offset="56.64%"></stop>\n\n                  <stop offset="67.45%"></stop>\n\n                  <stop offset="75.64%"></stop>\n\n                  <stop offset="82.51%"></stop>\n\n                  <stop offset="88.55%"></stop>\n\n                  <stop offset="94.01%"></stop>\n\n                  <stop offset="98.92%"></stop>\n\n                  <stop offset="100%"></stop>\n\n                </radialGradient>\n\n              </defs>\n\n              <g id="Group" stroke="none" [attr.fill]="pattern_Color_1" transform="translate(267.000000, 346.000000)">\n\n                <path d="M192.784425,22.8803537 C181.550946,20.411373 143.250129,7.81957172 139.39865,5.92668656 C118.643459,1.97631751 97.8882681,1.97631751 77.1330769,5.92668656 C73.2815982,7.73727237 34.9807816,20.411373 23.7473018,22.8803537 C11.5509524,25.5139331 2.13622651,34.9783589 0.638429213,81.5597938 C0.42445817,89.1313345 33.8039408,92.25871 39.581159,86.6623538 C41.5068984,76.3749345 42.8977101,75.8811383 44.5024929,69.6263874 C44.716464,113.98574 44.930435,179.08453 43.8605798,203.362839 C43.5396233,211.675074 66.4345248,218.259023 101.632761,218.259023 L114.578009,218.259023 C149.776246,218.259023 172.778133,211.592775 172.350191,203.362839 C171.280336,179.08453 171.494307,113.98574 171.708278,69.6263874 C173.420046,75.8811383 174.810858,76.3749345 176.629612,86.6623538 C182.40683,92.25871 215.786313,89.1313345 215.572342,81.5597938 C214.395501,34.8960595 204.980775,25.5139331 192.784425,22.8803537 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_2"></path>\n\n                <path d="M118.53399,14.9018797 L96.8275862,14.9018797 L96.8275862,218.259023 L101.296552,218.259023 L114.171429,218.259023 L118.640394,218.259023 L118.640394,14.9018797 L118.53399,14.9018797 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_3"></path>\n\n                <path d="M137.15468,21.2413534 C144.390148,22.3116541 151.625616,23.7112782 158.967488,25.6048872 L158.967488,213.154511 C153.328079,214.965789 145.986207,216.365414 137.15468,217.271053 L137.15468,21.2413534 Z M56.3940887,213.07218 C62.0334975,214.883459 69.3753695,216.283083 78.2068966,217.188722 L78.2068966,21.2413534 C70.9714286,22.3116541 63.7359606,23.7112782 56.3940887,25.6048872 L56.3940887,213.07218 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_4"></path>\n\n                <g transform="translate(0.000000, 2.469925)" id="Shape" [attr.fill]="pattern_Color_5">\n\n                  <path d="M191.778495,20.4370082 C180.600878,17.9647326 142.490525,5.356127 138.658199,3.4607157 C129.290291,1.64771358 119.81593,0.658803336 110.448022,0.493984962 C107.147963,4.94408106 108.425405,9.39417716 120.348197,12.4433171 C154.093956,21.0138725 171.020063,67.1630173 171.020063,67.1630173 C172.723319,73.4261155 174.000761,73.9205706 175.916924,84.221719 C181.665413,89.8255437 215.604894,87.3955578 215.391987,79.8139126 C215.323022,77.4894857 214.772741,74.4207555 214.665998,72.1115955 C214.559255,69.8024354 213.196029,50.5208888 211.856316,43.8905502 C207.897166,24.2964327 200.394057,22.3091745 191.778495,20.4370082 Z"\n\n                    [attr.fill]="pattern_Color_6"></path>\n\n                  <path d="M105.02069,0.493984962 C95.6571429,0.658646617 86.1871921,1.64661654 76.8236453,3.45789474 C72.9931034,5.26917293 34.9004926,17.9481203 23.7280788,20.4180451 C11.5980296,23.0526316 2.23448276,32.5206767 0.744827586,79.1199248 C0.532019704,86.6943609 33.7300493,89.8229323 39.4758621,84.2244361 C41.391133,73.9330827 42.7743842,73.4390977 44.3704433,67.2642857 L44.3704433,67.1819549 C44.3704433,67.1819549 61.28867,21.0766917 95.0187192,12.5142857 C106.935961,9.38571429 108.319212,4.93984962 105.02069,0.493984962 Z"></path>\n\n                </g>\n\n                <path d="M107.680788,26.4281955 C88.6344828,26.4281955 76.6108374,14.4902256 75.2275862,6.91578947 C75.0147783,5.68082707 77.5684729,5.18684211 79.4837438,3.29323308 C81.2926108,1.56428571 92.1458128,0.493984962 107.680788,0.493984962 C123.215764,0.493984962 134.068966,1.56428571 135.877833,3.29323308 C137.899507,5.18684211 140.346798,5.76315789 140.13399,6.91578947 C138.750739,14.4078947 126.727094,26.4281955 107.680788,26.4281955 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_7"></path>\n\n                <path d="M75.4403941,7.73909774 C96.7211823,4.44586466 118.640394,4.44586466 139.921182,7.73909774 C140.027586,7.49210526 140.027586,7.16278195 140.13399,6.91578947 C140.346798,5.68082707 137.793103,5.18684211 135.877833,3.29323308 C134.068966,1.56428571 123.215764,0.493984962 107.680788,0.493984962 C92.1458128,0.493984962 81.2926108,1.56428571 79.4837438,3.29323308 C77.462069,5.18684211 75.0147783,5.76315789 75.2275862,6.91578947 C75.2275862,7.16278195 75.3339901,7.49210526 75.4403941,7.73909774 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_8"></path>\n\n                <path d="M135.877833,3.37556391 C137.899507,13.9962406 118.959606,22.8056391 109.489655,22.8056391 L105.871921,22.8056391 C96.4019704,22.8056391 77.355665,13.9962406 79.4837438,3.37556391 C77.5684729,5.18684211 75.1211823,5.76315789 75.3339901,6.91578947 C76.7172414,14.4078947 88.7408867,26.4281955 107.787192,26.4281955 C126.833498,26.4281955 138.857143,14.4902256 140.240394,6.91578947 C140.346798,5.68082707 137.899507,5.18684211 135.877833,3.37556391 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_9"></path>\n\n                <path d="M105.871921,22.7233083 L109.489655,22.7233083 C118.959606,22.7233083 138.005911,13.9139098 135.877833,3.29323308 L135.771429,3.21090226 C133.962562,1.48195489 123.10936,0.411654135 107.574384,0.411654135 C92.0394089,0.411654135 81.1862069,1.48195489 79.3773399,3.21090226 L79.270936,3.29323308 C77.355665,13.9139098 96.4019704,22.7233083 105.871921,22.7233083 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_10"></path>\n\n              </g>\n\n            </svg>\n\n            <!-- <label>Player Jersey</label> -->\n\n          </div>\n\n\n\n          <!-- Player Jersey Pattern 3 -->\n\n          <div class="left" *ngIf=" activePatternId == 3" >\n\n            \n\n            <svg width="125px" height="125px" viewBox="551 721 216 219" class="jersey-svg">\n\n              <defs>\n\n                <radialGradient cx="52.6975959%" cy="15.4758772%" fx="52.6975959%" fy="15.4758772%" r="54.058955%" id="radialGradient-1">\n\n                  <stop offset="32.89%"></stop>\n\n                  <stop offset="56.64%"></stop>\n\n                  <stop offset="67.45%"></stop>\n\n                  <stop offset="75.64%"></stop>\n\n                  <stop offset="82.51%"></stop>\n\n                  <stop offset="88.55%"></stop>\n\n                  <stop offset="94.01%"></stop>\n\n                  <stop offset="98.92%"></stop>\n\n                  <stop offset="100%"></stop>\n\n                </radialGradient>\n\n              </defs>\n\n              <g id="Group" stroke="none" [attr.fill]="pattern_Color_1" transform="translate(551.000000, 721.000000)">\n\n                <path d="M192.261386,22.8879699 C181.033663,20.4180451 142.752475,7.82142857 138.90297,5.92781955 C118.158416,1.97593985 97.4138614,1.97593985 76.6693069,5.92781955 C72.819802,7.73909774 34.5386139,20.4180451 23.3108911,22.8879699 C11.1207921,25.5225564 1.71089109,34.9906015 0.213861386,81.5898496 C-1.44217971e-13,89.1642857 33.3623762,92.2928571 39.1366337,86.6943609 C41.0613861,76.4030075 42.4514851,75.9090226 44.0554455,69.6518797 C44.2693069,114.028195 44.4831683,179.15188 43.4138614,203.439474 C43.0930693,211.754887 65.9762376,218.341353 101.156436,218.341353 L114.09505,218.341353 C149.275248,218.341353 172.265347,211.672556 171.837624,203.439474 C170.768317,179.15188 170.982178,114.028195 171.19604,69.6518797 C172.906931,75.9090226 174.29703,76.4030075 176.114851,86.6943609 C181.889109,92.2928571 215.251485,89.1642857 215.037624,81.5898496 C213.861386,34.9082707 204.451485,25.5225564 192.261386,22.8879699 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_2"></path>\n\n                <g transform="translate(39.564356, 16.466165)" id="Shape" [attr.fill]="pattern_Color_3" >\n\n                  <path d="M1.28316832,28.568797 C3.42178218,32.5206767 4.7049505,36.7195489 5.23960396,40.6714286 C47.049505,44.9526316 89.5009901,44.9526316 131.310891,40.6714286 C131.845545,36.7195489 133.128713,32.5206767 135.267327,28.568797 C90.7841584,33.343985 45.6594059,33.343985 1.28316832,28.568797 Z"></path>\n\n                  <path d="M4.5980198,57.7139098 C4.5980198,61.5011278 4.5980198,65.4530075 4.7049505,69.4048872 C46.8356436,73.6860902 89.6079208,73.6860902 131.845545,69.4048872 C131.845545,65.3706767 131.845545,61.5011278 131.952475,57.7139098 C89.6079208,62.0774436 46.8356436,62.0774436 4.5980198,57.7139098 Z"></path>\n\n                  <path d="M4.7049505,155.769925 C46.9425743,160.051128 89.7148515,160.051128 131.845545,155.769925 C131.845545,151.982707 131.738614,148.113158 131.738614,144.078947 C89.6079208,148.36015 46.9425743,148.36015 4.7049505,144.078947 L4.7049505,155.769925 Z"></path>\n\n                  <path d="M4.81188119,115.263158 L4.81188119,126.954135 C46.9425743,131.235338 89.6079208,131.235338 131.738614,126.954135 L131.738614,115.263158 C89.6079208,119.544361 46.9425743,119.544361 4.81188119,115.263158 Z"></path>\n\n                  <path d="M131.738614,86.5296992 C89.6079208,90.8109023 46.9425743,90.8109023 4.81188119,86.5296992 L4.81188119,98.2206767 C46.9425743,102.50188 89.6079208,102.50188 131.738614,98.2206767 L131.738614,86.5296992 Z"></path>\n\n                  <path d="M0.213861386,67.0996241 L0.213861386,67.0996241 C1.28316832,62.1597744 2.24554455,60.0191729 3.1009901,57.5492481 L3.1009901,57.5492481 C2.24554455,60.0191729 1.28316832,62.1597744 0.213861386,67.0996241 Z"></path>\n\n                  <path d="M133.342574,57.5492481 L133.342574,57.5492481 C134.30495,60.0191729 135.160396,62.1597744 136.229703,67.0996241 L136.229703,67.0996241 C135.160396,62.1597744 134.19802,60.0191729 133.342574,57.5492481 Z"></path>\n\n                  <path d="M4.38415842,172.812406 C4.27722772,177.258271 4.17029703,181.12782 4.06336634,184.503383 C46.6217822,188.866917 89.7148515,188.866917 132.273267,184.503383 C132.166337,181.21015 132.059406,177.258271 131.952475,172.812406 C89.7148515,177.17594 46.7287129,177.17594 4.38415842,172.812406 Z"></path>\n\n                  <path d="M5.02574257,11.9379699 C46.9425743,16.2191729 89.3940594,16.2191729 131.310891,11.9379699 C126.49901,8.48007519 119.441584,5.10451128 111.10099,1.97593985 C82.550495,3.9518797 53.7861386,3.9518797 25.2356436,1.97593985 C16.8950495,5.10451128 9.94455446,8.48007519 5.02574257,11.9379699 Z"></path>\n\n                  <path d="M136.229703,1.8112782 C134.625743,1.31729323 132.914851,0.823308271 131.20396,0.246992481 L131.20396,0.246992481 C132.914851,0.740977444 134.625743,1.31729323 136.229703,1.8112782 Z"></path>\n\n                  <path d="M5.23960396,0.246992481 L5.23960396,0.246992481 C3.52871287,0.740977444 1.92475248,1.31729323 0.213861386,1.8112782 C1.92475248,1.31729323 3.52871287,0.740977444 5.23960396,0.246992481 Z"></path>\n\n                </g>\n\n                <g transform="translate(0.000000, 3.293233)" id="Shape" [attr.fill]="pattern_Color_4">\n\n                  <path d="M192.261386,19.5947368 C181.033663,17.124812 142.752475,4.52819549 138.90297,2.63458647 C132.059406,1.31729323 125.108911,0.411654135 118.265347,-1.13686838e-13 C118.158416,3.29323308 121.045545,6.25714286 128.851485,8.31541353 C160.182178,16.4661654 183.920792,28.7334586 176.970297,38.2838346 C170.019802,47.8342105 169.592079,60.0191729 171.516832,66.2763158 L171.516832,66.6056391 C173.120792,72.6157895 174.510891,73.1921053 176.435644,83.4011278 C182.209901,88.9996241 215.572277,85.8710526 215.358416,78.2966165 C213.861386,31.6150376 204.451485,22.2293233 192.261386,19.5947368 Z"></path>\n\n                  <path d="M23.3108911,19.5947368 C11.1207921,22.2293233 1.71089109,31.6973684 0.213861386,78.2966165 C-1.44217971e-13,85.8710526 33.3623762,88.9996241 39.1366337,83.4011278 C41.0613861,73.2744361 42.3445545,72.6157895 44.0554455,66.6056391 L44.0554455,66.2763158 C45.980198,60.0191729 45.4455446,47.8342105 38.6019802,38.2838346 C31.6514851,28.7334586 55.390099,16.4661654 86.7207921,8.31541353 C94.6336634,6.25714286 97.4138614,3.29323308 97.3069307,0 C90.4633663,0.411654135 83.5128713,1.31729323 76.6693069,2.63458647 C72.9267327,4.44586466 34.5386139,17.124812 23.3108911,19.5947368 Z"></path>\n\n                </g>\n\n                <g transform="translate(74.851485, 0.000000)" id="Shape">\n\n                  <path d="M32.9346535,26.4281955 C13.7940594,26.4281955 1.71089109,14.4902256 0.320792079,6.91578947 C0.106930693,5.68082707 2.67326733,5.18684211 4.5980198,3.29323308 C6.41584158,1.56428571 17.3227723,0.493984962 32.9346535,0.493984962 C48.5465347,0.493984962 59.4534653,1.56428571 61.2712871,3.29323308 C63.3029703,5.18684211 65.7623762,5.76315789 65.5485149,6.91578947 C64.1584158,14.4078947 52.0752475,26.4281955 32.9346535,26.4281955 Z" \n\n                  [attr.fill]="pattern_Color_5"></path>\n\n                  <path d="M0.534653465,7.73909774 C21.9207921,4.44586466 43.9485149,4.44586466 65.3346535,7.73909774 C65.4415842,7.49210526 65.4415842,7.16278195 65.5485149,6.91578947 C65.7623762,5.68082707 63.1960396,5.18684211 61.2712871,3.29323308 C59.4534653,1.56428571 48.5465347,0.493984962 32.9346535,0.493984962 C17.3227723,0.493984962 6.41584158,1.56428571 4.5980198,3.29323308 C2.56633663,5.18684211 0.106930693,5.76315789 0.320792079,6.91578947 C0.427722772,7.16278195 0.427722772,7.49210526 0.534653465,7.73909774 Z" \n\n                  [attr.fill]="pattern_Color_6"></path>\n\n                  <path d="M61.3782178,3.37556391 C63.409901,13.9962406 44.3762376,22.8056391 34.8594059,22.8056391 L31.2237624,22.8056391 C21.7069307,22.8056391 2.56633663,13.9962406 4.7049505,3.37556391 C2.78019802,5.18684211 0.320792079,5.76315789 0.534653465,6.91578947 C1.92475248,14.4078947 14.0079208,26.4281955 33.1485149,26.4281955 C52.2891089,26.4281955 64.3722772,14.4902256 65.7623762,6.91578947 C65.7623762,5.68082707 63.3029703,5.18684211 61.3782178,3.37556391 Z" \n\n                  [attr.fill]="pattern_Color_7"></path>\n\n                </g>\n\n              </g>\n\n            </svg>\n\n            <!-- <label>Player Jersey</label> -->\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 style="padding:0px">\n\n            <!-- GK Jersey Pattern 1 -->\n\n            <div class="right" *ngIf=" ( activePatternIdG == 1 || activePatternIdG == 2 ) " >\n\n              \n\n                <svg width="125px" height="125px" viewBox="267 346 216 219" class="jersey-svg-g">\n\n                  <defs>\n\n                    <radialGradient cx="52.64281%" cy="15.4758772%" fx="52.64281%" fy="15.4758772%" r="54.058955%" id="radialGradient-1">\n\n                      <stop offset="32.89%"></stop>\n\n                      <stop offset="56.64%"></stop>\n\n                      <stop offset="67.45%"></stop>\n\n                      <stop offset="75.64%"></stop>\n\n                      <stop offset="82.51%"></stop>\n\n                      <stop offset="88.55%"></stop>\n\n                      <stop offset="94.01%"></stop>\n\n                      <stop offset="98.92%"></stop>\n\n                      <stop offset="100%"></stop>\n\n                    </radialGradient>\n\n                  </defs>\n\n                  <g id="Group" stroke="none" [attr.fill]="pattern_Color_G1" transform="translate(267.000000, 346.000000)">\n\n                    <path d="M192.784425,22.8803537 C181.550946,20.411373 143.250129,7.81957172 139.39865,5.92668656 C118.643459,1.97631751 97.8882681,1.97631751 77.1330769,5.92668656 C73.2815982,7.73727237 34.9807816,20.411373 23.7473018,22.8803537 C11.5509524,25.5139331 2.13622651,34.9783589 0.638429213,81.5597938 C0.42445817,89.1313345 33.8039408,92.25871 39.581159,86.6623538 C41.5068984,76.3749345 42.8977101,75.8811383 44.5024929,69.6263874 C44.716464,113.98574 44.930435,179.08453 43.8605798,203.362839 C43.5396233,211.675074 66.4345248,218.259023 101.632761,218.259023 L114.578009,218.259023 C149.776246,218.259023 172.778133,211.592775 172.350191,203.362839 C171.280336,179.08453 171.494307,113.98574 171.708278,69.6263874 C173.420046,75.8811383 174.810858,76.3749345 176.629612,86.6623538 C182.40683,92.25871 215.786313,89.1313345 215.572342,81.5597938 C214.395501,34.8960595 204.980775,25.5139331 192.784425,22.8803537 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G2"></path>\n\n                    <path d="M118.53399,14.9018797 L96.8275862,14.9018797 L96.8275862,218.259023 L101.296552,218.259023 L114.171429,218.259023 L118.640394,218.259023 L118.640394,14.9018797 L118.53399,14.9018797 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G3"></path>\n\n                    <path d="M137.15468,21.2413534 C144.390148,22.3116541 151.625616,23.7112782 158.967488,25.6048872 L158.967488,213.154511 C153.328079,214.965789 145.986207,216.365414 137.15468,217.271053 L137.15468,21.2413534 Z M56.3940887,213.07218 C62.0334975,214.883459 69.3753695,216.283083 78.2068966,217.188722 L78.2068966,21.2413534 C70.9714286,22.3116541 63.7359606,23.7112782 56.3940887,25.6048872 L56.3940887,213.07218 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G4"></path>\n\n                    <g transform="translate(0.000000, 2.469925)" id="Shape" [attr.fill]="pattern_Color_G5">\n\n                      <path d="M191.778495,20.4370082 C180.600878,17.9647326 142.490525,5.356127 138.658199,3.4607157 C129.290291,1.64771358 119.81593,0.658803336 110.448022,0.493984962 C107.147963,4.94408106 108.425405,9.39417716 120.348197,12.4433171 C154.093956,21.0138725 171.020063,67.1630173 171.020063,67.1630173 C172.723319,73.4261155 174.000761,73.9205706 175.916924,84.221719 C181.665413,89.8255437 215.604894,87.3955578 215.391987,79.8139126 C215.323022,77.4894857 214.772741,74.4207555 214.665998,72.1115955 C214.559255,69.8024354 213.196029,50.5208888 211.856316,43.8905502 C207.897166,24.2964327 200.394057,22.3091745 191.778495,20.4370082 Z"\n\n                        [attr.fill]="pattern_Color_G6"></path>\n\n                      <path d="M105.02069,0.493984962 C95.6571429,0.658646617 86.1871921,1.64661654 76.8236453,3.45789474 C72.9931034,5.26917293 34.9004926,17.9481203 23.7280788,20.4180451 C11.5980296,23.0526316 2.23448276,32.5206767 0.744827586,79.1199248 C0.532019704,86.6943609 33.7300493,89.8229323 39.4758621,84.2244361 C41.391133,73.9330827 42.7743842,73.4390977 44.3704433,67.2642857 L44.3704433,67.1819549 C44.3704433,67.1819549 61.28867,21.0766917 95.0187192,12.5142857 C106.935961,9.38571429 108.319212,4.93984962 105.02069,0.493984962 Z"></path>\n\n                    </g>\n\n                    <path d="M107.680788,26.4281955 C88.6344828,26.4281955 76.6108374,14.4902256 75.2275862,6.91578947 C75.0147783,5.68082707 77.5684729,5.18684211 79.4837438,3.29323308 C81.2926108,1.56428571 92.1458128,0.493984962 107.680788,0.493984962 C123.215764,0.493984962 134.068966,1.56428571 135.877833,3.29323308 C137.899507,5.18684211 140.346798,5.76315789 140.13399,6.91578947 C138.750739,14.4078947 126.727094,26.4281955 107.680788,26.4281955 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G7"></path>\n\n                    <path d="M75.4403941,7.73909774 C96.7211823,4.44586466 118.640394,4.44586466 139.921182,7.73909774 C140.027586,7.49210526 140.027586,7.16278195 140.13399,6.91578947 C140.346798,5.68082707 137.793103,5.18684211 135.877833,3.29323308 C134.068966,1.56428571 123.215764,0.493984962 107.680788,0.493984962 C92.1458128,0.493984962 81.2926108,1.56428571 79.4837438,3.29323308 C77.462069,5.18684211 75.0147783,5.76315789 75.2275862,6.91578947 C75.2275862,7.16278195 75.3339901,7.49210526 75.4403941,7.73909774 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G8"></path>\n\n                    <path d="M135.877833,3.37556391 C137.899507,13.9962406 118.959606,22.8056391 109.489655,22.8056391 L105.871921,22.8056391 C96.4019704,22.8056391 77.355665,13.9962406 79.4837438,3.37556391 C77.5684729,5.18684211 75.1211823,5.76315789 75.3339901,6.91578947 C76.7172414,14.4078947 88.7408867,26.4281955 107.787192,26.4281955 C126.833498,26.4281955 138.857143,14.4902256 140.240394,6.91578947 C140.346798,5.68082707 137.899507,5.18684211 135.877833,3.37556391 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G9"></path>\n\n                    <path d="M105.871921,22.7233083 L109.489655,22.7233083 C118.959606,22.7233083 138.005911,13.9139098 135.877833,3.29323308 L135.771429,3.21090226 C133.962562,1.48195489 123.10936,0.411654135 107.574384,0.411654135 C92.0394089,0.411654135 81.1862069,1.48195489 79.3773399,3.21090226 L79.270936,3.29323308 C77.355665,13.9139098 96.4019704,22.7233083 105.871921,22.7233083 Z"\n\n                      id="Shape" [attr.fill]="pattern_Color_G10"></path>\n\n                  </g>\n\n                </svg>\n\n                <!-- <label>Goal Keeper Jersey</label> -->\n\n              </div>\n\n            <!-- GK Jersey Pattern 3 -->\n\n          <div class="right" *ngIf="activePatternIdG == 3" >\n\n            <svg width="125px" height="125px" viewBox="551 721 216 219" class="jersey-svg-g">\n\n              <defs>\n\n                <radialGradient cx="52.6975959%" cy="15.4758772%" fx="52.6975959%" fy="15.4758772%" r="54.058955%" id="radialGradient-1">\n\n                  <stop offset="32.89%"></stop>\n\n                  <stop offset="56.64%"></stop>\n\n                  <stop offset="67.45%"></stop>\n\n                  <stop offset="75.64%"></stop>\n\n                  <stop offset="82.51%"></stop>\n\n                  <stop offset="88.55%"></stop>\n\n                  <stop offset="94.01%"></stop>\n\n                  <stop offset="98.92%"></stop>\n\n                  <stop offset="100%"></stop>\n\n                </radialGradient>\n\n              </defs>\n\n              <g id="Group" stroke="none" [attr.fill]="pattern_Color_G1" transform="translate(551.000000, 721.000000)">\n\n                <path d="M192.261386,22.8879699 C181.033663,20.4180451 142.752475,7.82142857 138.90297,5.92781955 C118.158416,1.97593985 97.4138614,1.97593985 76.6693069,5.92781955 C72.819802,7.73909774 34.5386139,20.4180451 23.3108911,22.8879699 C11.1207921,25.5225564 1.71089109,34.9906015 0.213861386,81.5898496 C-1.44217971e-13,89.1642857 33.3623762,92.2928571 39.1366337,86.6943609 C41.0613861,76.4030075 42.4514851,75.9090226 44.0554455,69.6518797 C44.2693069,114.028195 44.4831683,179.15188 43.4138614,203.439474 C43.0930693,211.754887 65.9762376,218.341353 101.156436,218.341353 L114.09505,218.341353 C149.275248,218.341353 172.265347,211.672556 171.837624,203.439474 C170.768317,179.15188 170.982178,114.028195 171.19604,69.6518797 C172.906931,75.9090226 174.29703,76.4030075 176.114851,86.6943609 C181.889109,92.2928571 215.251485,89.1642857 215.037624,81.5898496 C213.861386,34.9082707 204.451485,25.5225564 192.261386,22.8879699 Z"\n\n                  id="Shape" [attr.fill]="pattern_Color_G2"></path>\n\n                <g transform="translate(39.564356, 16.466165)" id="Shape" [attr.fill]="pattern_Color_G3" >\n\n                  <path d="M1.28316832,28.568797 C3.42178218,32.5206767 4.7049505,36.7195489 5.23960396,40.6714286 C47.049505,44.9526316 89.5009901,44.9526316 131.310891,40.6714286 C131.845545,36.7195489 133.128713,32.5206767 135.267327,28.568797 C90.7841584,33.343985 45.6594059,33.343985 1.28316832,28.568797 Z"></path>\n\n                  <path d="M4.5980198,57.7139098 C4.5980198,61.5011278 4.5980198,65.4530075 4.7049505,69.4048872 C46.8356436,73.6860902 89.6079208,73.6860902 131.845545,69.4048872 C131.845545,65.3706767 131.845545,61.5011278 131.952475,57.7139098 C89.6079208,62.0774436 46.8356436,62.0774436 4.5980198,57.7139098 Z"></path>\n\n                  <path d="M4.7049505,155.769925 C46.9425743,160.051128 89.7148515,160.051128 131.845545,155.769925 C131.845545,151.982707 131.738614,148.113158 131.738614,144.078947 C89.6079208,148.36015 46.9425743,148.36015 4.7049505,144.078947 L4.7049505,155.769925 Z"></path>\n\n                  <path d="M4.81188119,115.263158 L4.81188119,126.954135 C46.9425743,131.235338 89.6079208,131.235338 131.738614,126.954135 L131.738614,115.263158 C89.6079208,119.544361 46.9425743,119.544361 4.81188119,115.263158 Z"></path>\n\n                  <path d="M131.738614,86.5296992 C89.6079208,90.8109023 46.9425743,90.8109023 4.81188119,86.5296992 L4.81188119,98.2206767 C46.9425743,102.50188 89.6079208,102.50188 131.738614,98.2206767 L131.738614,86.5296992 Z"></path>\n\n                  <path d="M0.213861386,67.0996241 L0.213861386,67.0996241 C1.28316832,62.1597744 2.24554455,60.0191729 3.1009901,57.5492481 L3.1009901,57.5492481 C2.24554455,60.0191729 1.28316832,62.1597744 0.213861386,67.0996241 Z"></path>\n\n                  <path d="M133.342574,57.5492481 L133.342574,57.5492481 C134.30495,60.0191729 135.160396,62.1597744 136.229703,67.0996241 L136.229703,67.0996241 C135.160396,62.1597744 134.19802,60.0191729 133.342574,57.5492481 Z"></path>\n\n                  <path d="M4.38415842,172.812406 C4.27722772,177.258271 4.17029703,181.12782 4.06336634,184.503383 C46.6217822,188.866917 89.7148515,188.866917 132.273267,184.503383 C132.166337,181.21015 132.059406,177.258271 131.952475,172.812406 C89.7148515,177.17594 46.7287129,177.17594 4.38415842,172.812406 Z"></path>\n\n                  <path d="M5.02574257,11.9379699 C46.9425743,16.2191729 89.3940594,16.2191729 131.310891,11.9379699 C126.49901,8.48007519 119.441584,5.10451128 111.10099,1.97593985 C82.550495,3.9518797 53.7861386,3.9518797 25.2356436,1.97593985 C16.8950495,5.10451128 9.94455446,8.48007519 5.02574257,11.9379699 Z"></path>\n\n                  <path d="M136.229703,1.8112782 C134.625743,1.31729323 132.914851,0.823308271 131.20396,0.246992481 L131.20396,0.246992481 C132.914851,0.740977444 134.625743,1.31729323 136.229703,1.8112782 Z"></path>\n\n                  <path d="M5.23960396,0.246992481 L5.23960396,0.246992481 C3.52871287,0.740977444 1.92475248,1.31729323 0.213861386,1.8112782 C1.92475248,1.31729323 3.52871287,0.740977444 5.23960396,0.246992481 Z"></path>\n\n                </g>\n\n                <g transform="translate(0.000000, 3.293233)" id="Shape" [attr.fill]="pattern_Color_G4">\n\n                  <path d="M192.261386,19.5947368 C181.033663,17.124812 142.752475,4.52819549 138.90297,2.63458647 C132.059406,1.31729323 125.108911,0.411654135 118.265347,-1.13686838e-13 C118.158416,3.29323308 121.045545,6.25714286 128.851485,8.31541353 C160.182178,16.4661654 183.920792,28.7334586 176.970297,38.2838346 C170.019802,47.8342105 169.592079,60.0191729 171.516832,66.2763158 L171.516832,66.6056391 C173.120792,72.6157895 174.510891,73.1921053 176.435644,83.4011278 C182.209901,88.9996241 215.572277,85.8710526 215.358416,78.2966165 C213.861386,31.6150376 204.451485,22.2293233 192.261386,19.5947368 Z"></path>\n\n                  <path d="M23.3108911,19.5947368 C11.1207921,22.2293233 1.71089109,31.6973684 0.213861386,78.2966165 C-1.44217971e-13,85.8710526 33.3623762,88.9996241 39.1366337,83.4011278 C41.0613861,73.2744361 42.3445545,72.6157895 44.0554455,66.6056391 L44.0554455,66.2763158 C45.980198,60.0191729 45.4455446,47.8342105 38.6019802,38.2838346 C31.6514851,28.7334586 55.390099,16.4661654 86.7207921,8.31541353 C94.6336634,6.25714286 97.4138614,3.29323308 97.3069307,0 C90.4633663,0.411654135 83.5128713,1.31729323 76.6693069,2.63458647 C72.9267327,4.44586466 34.5386139,17.124812 23.3108911,19.5947368 Z"></path>\n\n                </g>\n\n                <g transform="translate(74.851485, 0.000000)" id="Shape">\n\n                  <path d="M32.9346535,26.4281955 C13.7940594,26.4281955 1.71089109,14.4902256 0.320792079,6.91578947 C0.106930693,5.68082707 2.67326733,5.18684211 4.5980198,3.29323308 C6.41584158,1.56428571 17.3227723,0.493984962 32.9346535,0.493984962 C48.5465347,0.493984962 59.4534653,1.56428571 61.2712871,3.29323308 C63.3029703,5.18684211 65.7623762,5.76315789 65.5485149,6.91578947 C64.1584158,14.4078947 52.0752475,26.4281955 32.9346535,26.4281955 Z" \n\n                  [attr.fill]="pattern_Color_G5"></path>\n\n                  <path d="M0.534653465,7.73909774 C21.9207921,4.44586466 43.9485149,4.44586466 65.3346535,7.73909774 C65.4415842,7.49210526 65.4415842,7.16278195 65.5485149,6.91578947 C65.7623762,5.68082707 63.1960396,5.18684211 61.2712871,3.29323308 C59.4534653,1.56428571 48.5465347,0.493984962 32.9346535,0.493984962 C17.3227723,0.493984962 6.41584158,1.56428571 4.5980198,3.29323308 C2.56633663,5.18684211 0.106930693,5.76315789 0.320792079,6.91578947 C0.427722772,7.16278195 0.427722772,7.49210526 0.534653465,7.73909774 Z" \n\n                  [attr.fill]="pattern_Color_G6"></path>\n\n                  <path d="M61.3782178,3.37556391 C63.409901,13.9962406 44.3762376,22.8056391 34.8594059,22.8056391 L31.2237624,22.8056391 C21.7069307,22.8056391 2.56633663,13.9962406 4.7049505,3.37556391 C2.78019802,5.18684211 0.320792079,5.76315789 0.534653465,6.91578947 C1.92475248,14.4078947 14.0079208,26.4281955 33.1485149,26.4281955 C52.2891089,26.4281955 64.3722772,14.4902256 65.7623762,6.91578947 C65.7623762,5.68082707 63.3029703,5.18684211 61.3782178,3.37556391 Z" \n\n                  [attr.fill]="pattern_Color_G7"></path>\n\n                </g>\n\n              </g>\n\n            </svg>\n\n          </div>\n\n          <ion-col col-12 >\n\n              <ion-col col-6>\n\n                <canvas id="canvas" width="125" height="125" style="display: none;"></canvas>\n\n                <div id="png-container" style="display: none;" ></div>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                <canvas id="canvasG" width="125" height="125" style="display: none;"></canvas>\n\n                <div id="png-containerG" style="display: none;" ></div>\n\n              </ion-col>\n\n          </ion-col>\n\n        </ion-col>\n\n      <!-- </ion-row> -->\n\n      <!-- <ion-row> -->\n\n        <ion-col col-6>\n\n            <label class="name_label">Player Jersey</label>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <label class="name_label">Goal Keeper Jersey</label>\n\n        </ion-col>\n\n      <!-- </ion-row> -->\n\n      <ion-col col-12>\n\n        <button class="button-add" (click)="onSaveSVG()">Add</button>\n\n        <!-- (click)="onSaveSVG()"  onclick="pngCreation()" -->\n\n      </ion-col>\n\n    </div>\n\n\n\n  </div>\n\n  <div class="tabs-container colorspick" [hidden]="hideColorPicker" >\n\n      <div class="carousal-container">\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <img src="./assets/imgs/secondary-color.svg" id="ionic-docs-text">\n\n          </ion-col>\n\n          <ion-col col-10 >\n\n            <ion-slides>\n\n              <!-- <ion-slide col-3 (click)="changeColor(row)" >\n\n              <img src="./assets/imgs/secondary-color.svg" id="ionic-docs-text">\n\n              </ion-slide> -->\n\n              <ion-slide col-2 *ngFor="let row of colorArray" (click)="changeColor(row)" >\n\n                  <span class="colorspan" [ngStyle]="{\'background-color\': row }" ></span>\n\n              </ion-slide>\n\n              <!-- <ion-slide col-3 (click)="changeColor(row)" >\n\n              <img src="./assets/imgs/secondary-color.svg" id="ionic-docs-text">\n\n              </ion-slide> -->\n\n            </ion-slides>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n      </div>\n\n  \n\n    </div>\n\n\n\n  <div class="tabs-container ">\n\n    <ion-row>\n\n      <ion-col col-3 (click)=chooseJerseyType() >\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img src="./assets/imgs/jersey-style.svg"  />\n\n        <br />Jersey Type\n\n      </ion-col>\n\n        \n\n      <ion-col col-2 (click)=choosePrimaryColor() >\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img src="./assets/imgs/main-color.svg"  />\n\n        <br />Main Color\n\n      </ion-col>\n\n      <ion-col col-2 (click)=chooseSecondaryColor() >\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img src="./assets/imgs/secondary-color.svg" />\n\n        <br />Secondary Color\n\n      </ion-col>\n\n      <!-- <ion-col col-2>\n\n        <img src="./assets/imgs/jersey-text-color.svg" (click)=presentPage() />\n\n        <br />Jersey Text Color\n\n      </ion-col> -->\n\n      <ion-col col-2 (click)=chossePattern() >\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img src="./assets/imgs/jersey-style.svg" />\n\n        <br />Player Style\n\n      </ion-col>\n\n\n\n      <ion-col col-3 (click)=chossePatternG() >\n\n        <!-- <button ion-button (click)="presentPage(\'PlayerAddPage\')" >Add Jersey</button> -->\n\n        <img src="./assets/imgs/jersey-style.svg" />\n\n        <br />GK Style\n\n      </ion-col>\n\n      \n\n      <!-- <ion-col col-2>\n\n        <img src="./assets/imgs/jersey-text.svg" (click)=presentPage() />\n\n        <br />Jersey Text\n\n      </ion-col> -->\n\n      \n\n    </ion-row>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n\n<script type="text/javascript">\n\n  $(".checkbox").click(function () {\n\n    $(this).toggleClass(\'checked\')\n\n  });\n\n</script>'/*ion-inline-end:"/Users/ali/projects/mySoccer11/src/pages/jersey-add/jersey-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_5__providers_file_file__["a" /* FileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_sharedServices__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], JerseyAddPage);
    return JerseyAddPage;
}());

//# sourceMappingURL=jersey-add.js.map

/***/ })

});
//# sourceMappingURL=7.js.map