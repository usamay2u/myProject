import { Component, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { DatabaseProvider } from '../../providers/database/database';
import { FileProvider } from '../../providers/file/file';
import { SharedService } from '../../providers/services/sharedServices';
import { ToastService } from '../../providers/services/toast';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the JerseyAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var jquery: any;
declare var $: any;

interface Window {
  webkitURL?: any;
}

declare var window: Window;

@IonicPage()
@Component({
  selector: 'page-jersey-add',
  templateUrl: 'jersey-add.html',
})
export class JerseyAddPage {
  addJerseyForm: FormGroup;
  activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'))

  primaryColorVal:"FFFFFF"
  secondaryColorVal:"FF0000"

  pattern_PrimaryColor = "#5EBA7D";
  pattern_SecondaryColor = "#203de5";

  pattern_PrimaryColorG = "#1d09f2";
  pattern_SecondaryColorG = "#ff0000";

  activePatternId = 1;
  activePatternIdG = 3;
  activeJerseyType = 1;

  hideDropDown = true;
  hideColorPicker = true;
  colorSelector = 1;

  pattern_Color_1 = "none";
  pattern_Color_2 = this.pattern_SecondaryColor;
  pattern_Color_3 = this.pattern_SecondaryColor;
  pattern_Color_4 = this.pattern_SecondaryColor;
  pattern_Color_5 = this.pattern_PrimaryColor;
  pattern_Color_6 = this.pattern_PrimaryColor;
  pattern_Color_7 = this.pattern_PrimaryColor;
  pattern_Color_8 = this.pattern_SecondaryColor;
  pattern_Color_9 = this.pattern_SecondaryColor;
  pattern_Color_10 = "";

  pattern_Color_G1 = "none";
  pattern_Color_G2 = this.pattern_PrimaryColorG;
  pattern_Color_G3 = this.pattern_SecondaryColorG;
  pattern_Color_G4 = this.pattern_SecondaryColorG;
  pattern_Color_G5 = this.pattern_PrimaryColorG;
  pattern_Color_G6 = this.pattern_SecondaryColorG;
  pattern_Color_G7 = this.pattern_SecondaryColorG;
  pattern_Color_G8 = this.pattern_SecondaryColorG;
  pattern_Color_G9 = this.pattern_SecondaryColorG;
  pattern_Color_G10 = this.pattern_SecondaryColorG;


  base64Image
  base64Imageg

  colorsArray = [
    {
      'name':'White',
      'code':'#ffffff'
    },
    {
      'name':'Aqua',
      'code':'#00FFFF'
    },
    {
      'name':'Black',
      'code':'#000000'
    },
    {
      'name':'Blue',
      'code':'#0000FF'
    },
    {
      'name':'Brown',
      'code':'#A52A2A'
    },
    {
      'name':'Chartreuse',
      'code':'#7FFF00'
    },
    {
      'name':'CornflowerBlue',
      'code':'#6495ED'
    },
    {
      'name':'DarkGray',
      'code':'#A9A9A9'
    },
    {
      'name':'Gold',
      'code':'#FFD700'
    },
    {
      'name':'Red',
      'code':'#FF0000'
    },
    {
      'name':'Yellow',
      'code':'#FFFF00'
    },
    {
      'name':'LightSkyBlue',
      'code':'#87CEFA'
    }
  ];

  colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']; 
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private service: ServicesProvider,
    private dbProvider: DatabaseProvider,
    public element: ElementRef,
    public renderer: Renderer,
    private fileObj: FileProvider,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    private ga: GoogleAnalytics
  ) {
      this.ga.trackView('Custom Jersey Page');
      this.setFormControl();
  }
  ngOnInit() {
    //console.log("activeTeamDetails ====>>>> ", this.activeTeamDetails);
  }
  setFormControl() {
    this.addJerseyForm = this.formBuilder.group({
      playerImg: ['', [Validators.required]],
      goalKeeperImg: ['', [Validators.required]],
      patternId: [''],
      primaryColour: [''],
      secondaryColour: [''],
      jerseyText: [''],
      jerseyTextColour: [''],
    });

  }

  onSaveJersey() {
    this.addJerseyForm.patchValue({
      defaultUser: this.addJerseyForm
    });
    let formObjData = this.addJerseyForm.value;

    // console.log("formObjData ---- ", formObjData);

    this.dbProvider.addCustomJersey(formObjData)
      .then((customJerseyData) => {
        // console.log("custom Jersey Data ---- > ", customJerseyData);
        // this.dbProvider.selectTeams().then((data)=>{
        //   console.log("selectTeams data ---- > ", data);
        // })
        // console.log("Custom Jersey Added...");
        this.dismiss();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JerseyAddPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  onSaveSVG_form(data) {
    console.log("onSaveSVG_form ---- ", data)
  }

  onSaveSVG() {
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

      selfVar.fileObj.saveBase64Screen(selfVar.base64Image, 'jersey').then((dataUrl) => {

        let data = selfVar.fileObj.retrieveImage(dataUrl);
        var dirName = selfVar.fileObj.getStorageDirectory();
        // console.log('screenshot', dataUrl, data)
        let filePath = dirName + "assets/images/" + dataUrl;
        // console.log("filePath ------>>>", dirName, filePath);
        //$('.new-img').attr('src',(filePath));

          selfVar.onSaveSVG2(dataUrl);
      },
        error => console.error('Error image', error)
      );
    };
    img.src = url;
    /**** Save to device code */
  }

  onSaveSVG2(dataUrl) {
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

        selfVar.fileObj.saveBase64Screen(selfVar.base64Imageg, 'jersey').then((dataUrlg) => {
          let datag = selfVar.fileObj.retrieveImage(dataUrlg);
          var dirNameg = selfVar.fileObj.getStorageDirectory();
          // console.log('screenshot', dataUrlg, datag)
          let filePathg = dirNameg + "assets/images/" + dataUrlg;
          // console.log("filePath ------>>>", dirNameg, filePathg);
          $('.new-img').attr('src',(filePathg));


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
            .then((customJerseyData) => {
              // console.log("custom Jersey Data ---- > ", customJerseyData);
              // console.log("Custom Jersey Added...");
              selfVar.dismiss();
              selfVar._SharedService.refreshJersey.emit();
              selfVar.toastCtrl.callToast('Jersey saved successfully.');

            })

        },
          error => console.error('Error image', error)
        );
      
    };
    img.src = url;


    /**** Save to device code */

  }
  patternChange(patternId) {
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
      } else if (patternId == '3') {
        this.pattern_Color_1 = "none";
        this.pattern_Color_2 = this.pattern_PrimaryColor;
        this.pattern_Color_3 = this.pattern_SecondaryColor;
        this.pattern_Color_4 = this.pattern_SecondaryColor;
        this.pattern_Color_5 = this.pattern_PrimaryColor;
        this.pattern_Color_6 = this.pattern_SecondaryColor;
        this.pattern_Color_7 = this.pattern_SecondaryColor;
      }
  }

  patternChangeG(patternId) {
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

      } else if ( patternId == '2' ) { 

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

      } else if ( patternId == '3' ){
        this.pattern_Color_G1 = "none";
        this.pattern_Color_G2 = this.pattern_PrimaryColorG;
        this.pattern_Color_G3 = this.pattern_SecondaryColorG;
        this.pattern_Color_G4 = this.pattern_SecondaryColorG;
        this.pattern_Color_G5 = this.pattern_PrimaryColorG;
        this.pattern_Color_G6 = this.pattern_SecondaryColorG;
        this.pattern_Color_G7 = this.pattern_SecondaryColorG;
      }
  }
  patternPrimaryColorChange(id) {
    // console.log("patternPrimaryColorChange---", id)
    if (this.activeJerseyType == 1) {
      if (id == 1) {
        this.pattern_PrimaryColor = "#ccff00";
      } else {
        this.pattern_PrimaryColor = "#c700ff";
      }
    } else {
      if (id == 1) {
        this.pattern_PrimaryColorG = "#34aa8f";
      } else {
        this.pattern_PrimaryColorG = "#56229b";
      }
    }
    if (this.activeJerseyType == 1) {
      this.patternChange(this.activePatternId);
    } else {
      this.patternChangeG(this.activePatternIdG);
    }

  }
  patternSecondaryColorChange(id) {
    // console.log("patternSecondaryColorChange---", id)
    if (this.activeJerseyType == 1) {
      if (id == 1) {
        this.pattern_SecondaryColor = "#ff7b00";
      } else {
        this.pattern_SecondaryColor = "#00bbff";
      }
      this.patternChange(this.activePatternId);
    } else {
      if (id == 1) {
        this.pattern_SecondaryColorG = "#318be0";
      } else {
        this.pattern_SecondaryColorG = "#08e013";
      }
      this.patternChangeG(this.activePatternIdG);
    }
  }

  activeJerseyTypeSelect() {
    console.log("activeJerseyTypeSelect ---", this.activeJerseyType);
  }

  chooseJerseyType(){
    $( "#activeJerseyType" ).trigger( "click" );
  }

  choosePrimaryColor(){
    // console.log("Click on chooseMainColor");
    //$( "#primaryColorPicker" ).trigger( "click" );
    this.colorSelector = 1;
    this.hideColorPicker = false;
  }
  
  primaryColorPicker(){
    // primaryColorVal:"FFFFFF"
    // secondaryColorVal:"FF0000"

    // pattern_PrimaryColor = "#5EBA7D";
    // pattern_SecondaryColor = "#203de5";
    // console.log("Click on primaryColorVal", this.primaryColorVal );
    // console.log("patternPrimaryColorChange---", this.activePatternId );
   
    if (this.activeJerseyType == 1) {
      this.pattern_PrimaryColor = this.primaryColorVal;
      this.patternChange(this.activePatternId);
    } else {
      this.pattern_PrimaryColorG = this.primaryColorVal;
      this.patternChangeG(this.activePatternIdG);
    }
  }

  chooseSecondaryColor(){
    // console.log("Click on chooseSecondaryColor");
    //$( "#secondaryColorPicker" ).trigger( "click" );
    this.colorSelector = 2;
    this.hideColorPicker = false;
  }
  secondaryColorPicker(){

    // console.log("Click on secondaryColorVal", this.secondaryColorVal );
    // console.log("patternPrimaryColorChange---", this.activePatternId );
   
    if (this.activeJerseyType == 1) {
      this.pattern_SecondaryColor = this.secondaryColorVal;
      this.patternChange(this.activePatternId);
    } else {
      this.pattern_SecondaryColorG = this.secondaryColorVal;
      this.patternChangeG(this.activePatternIdG);
    }
  }
  chossePattern(){
    // console.log("Click on chooseSecondaryColor");
    $( "#activePatternId" ).trigger( "click" );
  }
  chossePatternG(){
    // console.log("Click on chooseSecondaryColorG");
    $( "#activePatternIdG" ).trigger( "click" );
  }
  changePattern(){
    // console.log("Click on changePattern", this.activePatternId );
    this.patternChange(this.activePatternId);
  }
  changePatternG(){
    // console.log("Click on changePattern", this.activePatternIdG );
    this.patternChangeG(this.activePatternIdG);
  }

  changeColor(code){
    // console.log("CODE _ ", code);
    // console.log("colorSelector _ ", this.colorSelector);

    if(  this.colorSelector == 1 ){
      if (this.activeJerseyType == 1) {
        this.pattern_PrimaryColor = code;
      } else {
        this.pattern_PrimaryColorG = code;
      }
    } else {
      if (this.activeJerseyType == 1) {
        this.pattern_SecondaryColor = code;
      } else {
        this.pattern_SecondaryColorG = code;
      }
    }
    this.hideColorPicker = true; 
    if (this.activeJerseyType == 1) {
      this.patternChange(this.activePatternId);
    } else {
      this.patternChangeG(this.activePatternIdG);
    }  
  }

}
