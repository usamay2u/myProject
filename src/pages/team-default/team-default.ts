import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, EventEmitter, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import {Location} from '@angular/common';
import { ServicesProvider } from '../../providers/services/services';
import { TeamComponent } from '../../components/team/team';
import { GroundPageComponent } from '../../components/ground-page/ground-page';
import { SettingsComponent } from '../../components/settings/settings';
import { SharedService } from '../../providers/services/sharedServices';
import { ToolsComponent } from '../../components/tools/tools';
import { JerseyComponent } from '../../components/jersey/jersey';
import { Screenshot } from '@ionic-native/screenshot';
import { FileProvider } from '../../providers/file/file';

import { GroundComponent } from '../../components/ground/ground';
import { SaveComponent } from '../../components/save/save';
import { ToastService } from '../../providers/services/toast';
import { Platform } from 'ionic-angular';
import * as watermark from 'watermarkjs';
import { DatabaseProvider } from '../../providers/database/database';

import { AdMobPro } from '@ionic-native/admob-pro';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the TeamDefaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import Swal from 'sweetalert2';
import { FooterComponent } from '../../components/footer/footer';
declare var jquery: any;
declare var $: any;

@IonicPage()
@Component({
  selector: 'page-team-default',
  templateUrl: 'team-default.html',
})
export class TeamDefaultPage {
  // Canvas stuff
  @ViewChild('imageCanvas') canvas: any;
  canvasElement: any;
  originalImage = null;
  blobImage = null;

  lastX: number;
  lastY: number;

  private componentRefArray: any = []
  private previousComponent;
  activePlayerDetails: any;
  // groundImageSrc = "./assets/imgs/groundImg.png";
  groundImageSrc;
  base64Image;
  saveX: number;
  saveY: number;
  currentX: number;
  currentY: number;
  rect: any;
  drag = false;
  public saveClicked: boolean = true;
  selectedColor = '#fff';
  activeTabName = localStorage.getItem('activeTabName');
  // activeTool = "Pencil";
  activeTool = '';
  showTool = '';
  cPushArray = new Array();
  cStep = -1;
  offsetX;
  offsetY;

  canvasW;
  canvasH;

  mDownX;
  mDownY;
  mUpX;
  mUpY;
  grounds:any =[];

  page: string = 'team-default';

  @ViewChild('processContainer', { read: ViewContainerRef }) container;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private service: ServicesProvider,
    private resolver: ComponentFactoryResolver,
    private fileObj: FileProvider,
    private screenshot: Screenshot,
    public toastCtrl: ToastService,
    public platform: Platform,
    public renderer: Renderer,
    public _SharedService: SharedService,
    private _location: Location,
    private dbProvider: DatabaseProvider,
    private admobNew: AdMobPro,
    private ga: GoogleAnalytics
  ) {
    // this.ga.trackView('Home Page');
  }
  ngOnInit() {
    let groundImg = localStorage.getItem("groundImageSrc");
    if(groundImg) {
      this.groundImageSrc = groundImg;
    }

    this.activeTabName = 'Team'
    localStorage.setItem('activeTabName', 'Team');
    this._SharedService.toolsManagement.subscribe(
      (data) => {
        if(data != "Undo" && data != "Redo" && data != "Eraser" && data != "Football") {
          let existingTool = localStorage.getItem('activeToolName');
          if(existingTool && existingTool==data) {
            this.activeTool = '';
            this.showTool = '';
            localStorage.setItem('activeToolName', '');
          } else {
            this.activeTool = data;
            this.showTool = data;
            localStorage.setItem('activeToolName', data);
          }
        }

        // console.log("TD --- toolsManagement ::: ", data);
        if(data == "Undo") {
          this.cUndo();
        } else if(data == "Redo") {
          this.cRedo()
        } else if(data == "Eraser") {
          this.clearCanvas()
        } else if(data == "Football") {
          let football =  localStorage.getItem("showBall");
          if(football && football != null && football != '') {
            if(football == 'true')
              localStorage.setItem('showBall', 'false');
            else
              localStorage.setItem('showBall', 'true');
          } else {
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
    this._SharedService.refreshPlayers.subscribe(
      (data) => {
        // console.log("refreshPlayers ::: ", data);
        localStorage.setItem('activePlayerDetails', JSON.stringify(data));
        this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
        this.createDynamicComponent(TeamComponent);
      });

    if (JSON.parse(localStorage.getItem('activePlayerDetails')) && typeof JSON.parse(localStorage.getItem('activePlayerDetails')) == "object") {
       this.activePlayerDetails = JSON.parse(localStorage.getItem('activePlayerDetails'));
    }
    this._SharedService.tabNavigation.subscribe(
      (componentName) => {
        this.activeTabName = localStorage.getItem('activeTabName');
        if (componentName == "Team") {
          this.activeTool = '';
          this.createDynamicComponent(TeamComponent);
        } else if (componentName == "Jersey") {
          this.activeTool = '';
          this.createDynamicComponent(JerseyComponent);
        } else if (componentName == "Ground") {
          this.activeTool = '';
          this.createDynamicComponent(GroundPageComponent);
        } else if (componentName == "Tools") {
          this.activeTool = localStorage.getItem('activeToolName');
          let tool = localStorage.getItem('activeToolName');
          if(tool!=null && tool!='null' && tool!=undefined && tool!='undefined' && tool!='')
            this.showTool = tool;
          else
            this.showTool = '';

          this.createDynamicComponent(ToolsComponent);
        } else if (componentName == "Settings") {
          this.activeTool = '';
          this.createDynamicComponent(SettingsComponent);
          this.launchInterstitial();
        } else {
          // Take a screenshot and save to file
          this.saveCanvas();
        }
    });

    this._SharedService.showModal.subscribe(
      (modalName) => {
        // console.log("showModal---************---***********---");
        let modal = this.modalCtrl.create(modalName);
        modal.present();
    });

    this._SharedService.selectGround.subscribe(
      (groundData) => {
        // console.log("groundData", groundData);
        this.groundImageSrc = groundData.image
        // console.log("this.groundImageSrc", this.groundImageSrc);
    });

    this._SharedService.refreshAfterSave.subscribe(
      (saveData) => {
        this.saveClicked = true;
       // this.createDynamicComponent(TeamComponent);
        // this.toastCtrl.callToast('Lineup saved successfully with the players photo. Please use the menu to edit the lineup.');
    })

    this._SharedService.shareGroundImages.subscribe(
      () => {
        this.getAllGrounds();
    })

    this._SharedService.clearCanvas.subscribe(
      () => {
        this.clearCanvas();
    })
  }

  ngAfterViewInit(){
      this.canvasElement = this.canvas.nativeElement;
      this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
      this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
  }

  ionViewDidLoad() {
    this.createDynamicComponent(TeamComponent);
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    // this.canvasElement.height = 200;
    this.offsetX = this.canvasElement.offsetLeft;
    this.offsetY = this.canvasElement.offsetTop;
  }

  // show Interstitial Ads
  launchInterstitial() {
    let adId;
    if(this.platform.is('android')) {
      adId = 'ca-app-pub-3177597429175100/5082349560';
    } else if (this.platform.is('ios')) {
      adId = 'YOUR_ADID_IOS';
    }
    this.admobNew.prepareInterstitial({adId: adId, license: "justinwilson28@gmail.com/fd1e7592ac1ca9d1ee450534aaf7df4f", isTesting: false})
      .then(() => { this.admobNew.showInterstitial(); });

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
  }

  getAllGrounds() {
    this.dbProvider.selectGrounds().
    then((groundsArr)=>{
     this.grounds = groundsArr;
      // console.log('groundsPageArr',this.grounds);
      if(this.grounds[0]['image'])
        this.groundImageSrc = this.grounds[0]['image'];
      else
        this.groundImageSrc = "";
        // this.groundImageSrc = "./assets/imgs/groundImg.png";
      localStorage.setItem("groundImageSrc", this.groundImageSrc);
     })
  }

  createDynamicComponent(theComponent) {
    // console.log ('this.previousComponent',this.previousComponent,this.container)
    if (this.previousComponent) {
      this.container.remove(this.container.indexOf(this.previousComponent));
    }
    // this.removeComponent(this.previousComponent);
    const factory = this.resolver.resolveComponentFactory(theComponent);
    const componentRef = this.container.createComponent(factory);
    this.previousComponent = componentRef;
  }

  removeComponent(componentClass: Type<any>) {
    // Find the component
    const component = this.componentRefArray.find((component) => component.instance instanceof componentClass);
    const componentIndex = this.componentRefArray.indexOf(component);
    this.previousComponent = null

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.componentRefArray.splice(componentIndex, 1);

    }
  }
  presentPage() {
    let modal = this.modalCtrl.create('PlayerAddPage');
    modal.present();
  }

  saveCanvas() {
    this.saveClicked = false;
    //this.removeComponent(this.previousComponent);
    this.saveLineUp();
    //take screen shot after hiding the tab and footer
    setTimeout(() => {
      this.screenshot.URI(80).
        then((dataFile) => {
          // console.log("dataUrl =>", dataFile);
          this.originalImage = dataFile.URI;

            setTimeout(() => {
              this.fileObj.saveBase64(dataFile.URI, '').then((dataUrl) => {
                // console.log("dataUrl ----------",dataUrl , dataFile )
                localStorage.setItem('activeLineup', dataUrl);
                // let data = this.fileObj.retrieveImage(dataUrl)
                let modal = this.modalCtrl.create('TeamSavePage', { 'screenshot': this.fileObj.getStorageDirectory() + 'assets/images/' + localStorage.getItem('activeLineup'), 'URI': dataFile.URI });
                modal.present();
              }, error => console.error('Error image', error));
            }, 1500);

        }, (onError) => {
          console.log(onError)
        });
    }, 2000);
  }

  startDrawing(ev) {
    this.canvasW = $( ".canvasDefault " ).width();
    this.canvasH = $( ".canvasDefault " ).height();

    if(this.activeTabName == "Tools"){
      var canvasPosition = this.canvasElement.getBoundingClientRect();
      this.saveX = ev.touches[0].pageX - this.offsetX;
      this.saveY = ev.touches[0].pageY - this.offsetY;
    }
  }

  moved(ev) {

    if(this.activeTabName == "Tools"){
      var canvasPosition = this.canvasElement.getBoundingClientRect();
      let ctx = this.canvasElement.getContext('2d');
      let currentX = ev.touches[0].screenX - this.offsetX;
      let currentY = ev.touches[0].screenY - this.offsetY;

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
  }

  saveLineUp() {
    this._SharedService.saveLineUp.emit("activePlayerDetails");
  }

  mouseDown(ev) {
    if(this.activeTool == "Arrow"){
      this.handleStart(ev)
    } else {
      this.mDownX = ev.touches[0].pageX;
      this.mDownY = ev.touches[0].pageY;

      // console.log("mDownXY ::: ", this.mDownX, this.mDownY, ev)

      if(this.cStep == -1){
        // console.log("First Time...")
        this.cPush();
      }

      if(this.activeTabName == "Tools"){
        if(this.activeTool == 'Pencil'){
          this.startDrawing(ev);
        } else if(this.activeTool == 'Arrow'){
          this.startArrowDrawing(ev);
        } else {
          var canvasPosition = this.canvasElement.getBoundingClientRect();
          this.saveX = ev.touches[0].pageX - canvasPosition.x;
          this.saveY = ev.touches[0].pageY - canvasPosition.y;
        }
      }
    }
  }

  mouseUp(ev) {
    if(this.activeTool == "Arrow"){
      this.handleMove(ev);
    } else {
      this.mUpX = ev.changedTouches[0].pageX;
      this.mUpY = ev.changedTouches[0].pageY;
      // console.log("mUpXY ::: ", this.mUpX, this.mUpY, ev)

      // console.log("MouseUp --------", this.activeTabName )
      //this.drawRectangle()
      if(this.activeTabName == "Tools"){
        if(this.activeTool == 'Pencil'){
          this.cPush();
          // console.log('Pencil');
        } else {
          switch (this.activeTool) {
            case 'Pencil':
                // console.log('Pencil');
                //this.drawRectangle()
                break;
            case 'Rectangle':
                // console.log('Rectangle');
                this.drawRectangle()
                break;
            case 'Circle':
                // console.log('Circle');
                this.drawCircle()
                break;
            case 'Arrow':
                // console.log('Arrow');
                this.drawArrow(ev)
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
  }

  backClicked() {
    this._location.back();
  }
  undoClicked() {

  }
  mouseMove(ev) {
    //console.log("HERE 2")
    if(this.activeTabName == "Tools" && this.activeTool != "Arrow" ){
      if(this.activeTool == 'Pencil'){
        this.moved(ev)
      } else {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        this.currentX = ev.touches[0].pageX - this.offsetX;
        this.currentY = ev.touches[0].pageY - this.offsetY;
        this.saveX = this.currentX
        this.saveY = this.currentY
      }
    }
  }

  drawRectangle() {
    //console.log( "co-ordinates : ", this.currentX,"--", this.currentY, " *** ", this.saveX,"--", this.saveY );

    var canvasPosition = this.canvasElement.getBoundingClientRect();
    var ctx = this.canvasElement.getContext('2d');
    let w = this.currentX - this.saveX;
    let h = this.currentY - this.saveY;
    ctx.beginPath()
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
    setTimeout(() => {
      if(differenceX > 0 && differenceY > 0){
        // console.log("rect points are", this.mDownX, this.mDownY, differenceX, differenceY );
        // this.mDownX= 50;
        // this.mDownY= 50;
        // differenceX= 150;
        // differenceY= 150;
        ctx.strokeStyle = this.selectedColor;
        //ctx.rect(this.mDownX-60, this.mDownY-145, differenceX, differenceY);

        // ctx.rect(this.mDownX, this.mDownY-145 , differenceX, differenceY);
        // ctx.rect(this.mDownX, this.mDownY , differenceX, differenceY);

        //ctx.rect(20, 20, 100, 100);

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "#f47804";
        ctx.fillRect(this.mDownX, this.mDownY , differenceX, differenceY);
        // ctx.lineWidth = 1.5;
        ctx.stroke()
        this.cPush();
      } else {
        console.log("Zero Value");
      }

    },100);
  }

  drawCircle() {
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    var ctx = this.canvasElement.getContext('2d');
    let w = this.currentX - this.saveX;
    let h = this.currentY - this.saveY;
    ctx.beginPath()
    //ctx.arc(this.saveX, this.saveY, 15, 0, 2 * Math.PI);

    // this.mDownX, this.mDownY
    // this.mUpX, this.mUpY

    var x1 = this.mDownX;
    var y1 = this.mDownY;
    var x2 = this.mUpX;
    var y2 = this.mUpY;
    var differenceX = Math.abs(x1 - x2);
    var differenceY = Math.abs(y1 - y2);

    var csqr =  (differenceX * differenceX) + (differenceY + differenceY);
    var radius = Math.sqrt(csqr)
    var centerX = (x1+x2)/2;
    var centerY = (y1+y2)/2;
    // console.log("circle points", x1, y1, x2, y2);
    // console.log("circle diff", differenceX.toFixed(0), differenceY.toFixed(0), csqr.toFixed(0), radius.toFixed(0));
    // console.log("circle centre", centerX.toFixed(0), centerY.toFixed(0));


    // ctx.arc(centerX.toFixed(0) , (centerY-145).toFixed(0) , radius.toFixed(0) , 0, 2 * Math.PI);
    ctx.arc(centerX.toFixed(0) , (centerY).toFixed(0) , radius.toFixed(0) , 0, 2 * Math.PI);
    //ctx.arc(this.saveX-15, this.saveY-15, 15, 0, 2 * Math.PI);
    ctx.globalAlpha = 0.4;
    ctx.strokeStyle = "#f47804";
    ctx.fillStyle = "#f47804";
    ctx.fill();
    // ctx.lineWidth = 1.5;
    ctx.stroke()
    this.cPush();
  }

  draw() {
    var ctx = this.canvasElement.getContext('2d');
    ctx.fillRect(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
  }

  cPush() {
    this.cStep++;
    if (this.cStep < this.cPushArray.length) { this.cPushArray.length = this.cStep; }
    this.cPushArray.push(this.canvasElement.toDataURL());
    //console.log("cPush", this.cStep , this.cPushArray);
  }

  cUndo() {
    // console.log("cUndo ****");
    if (this.cStep > 0) {
        var ctx = this.canvasElement.getContext('2d');
        this.cStep--;
        var canvasPic = new Image();
        canvasPic.src = this.cPushArray[this.cStep];
        this.clearCanvas()
        canvasPic.onload = function () { ctx.globalAlpha = 1.0; ctx.drawImage(canvasPic, 0, 0); }
        document.title = this.cStep + ":" + this.cPushArray.length;
    }
  }
  cRedo() {
    // console.log("cRedo ****");
    if (this.cStep < this.cPushArray.length-1) {
      var ctx = this.canvasElement.getContext('2d');
        this.cStep++;
        var canvasPic = new Image();
        canvasPic.src = this.cPushArray[this.cStep];
        this.clearCanvas()
        canvasPic.onload = function () { ctx.globalAlpha = 1.0; ctx.drawImage(canvasPic, 0, 0); }
    }
  }
  drawImage() {
    var ctx = this.canvasElement.getContext('2d');
    var image = new Image();
    image.src = './assets/imgs/groundImg.png';
    $(image).load(function () {
      // ctx.globalAlpha = 1.0;
      this.ctx.drawImage(image, 0, 0, 500, 200);
      this.cPush();
    });
  }
  clearCanvas(){
    const context = this.canvasElement.getContext('2d');
    context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    // this.activeTool = '';
    // this.showTool = '';
  }

  drawArrow(ev){
    // console.log("drawArrow ***");

    var canvasPosition = this.canvasElement.getBoundingClientRect();
      let ctx = this.canvasElement.getContext('2d');
      // let currentX = ev.touches[0].pageX - canvasPosition.x;
      // let currentY = ev.touches[0].pageY - canvasPosition.y;

    // var ctx = this.canvasElement.getContext('2d');
    // arbitrary styling
    ctx.strokeStyle= '#f7fc00';
    ctx.fillStyle= '#f7fc00';
    ctx.lineWidth=2;

    // draw the line
    ctx.beginPath();
    ctx.moveTo(this.saveX,this.saveY);
    ctx.lineTo(this.currentX,this.currentY);
    ctx.stroke();

    // draw the starting arrowhead
    var startRadians=Math.atan((this.currentY-this.currentX)/(this.saveY-this.saveX));
    startRadians+=((this.saveY>this.saveX)?-90:90)*Math.PI/180;
    this.drawArrowhead(ctx,this.saveX,this.saveY,startRadians);
    // draw the ending arrowhead
    // var endRadians=Math.atan((275-50)/(250-this.x1));
    // endRadians+=((this.x2>this.x1)?90:-90)*Math.PI/180;
    // this.drawArrowhead(ctx,this.x2,this.y2,endRadians);
  }

  drawArrowhead(ctx,x,y,radians){
    // console.log("drawArrowhead *******");
    // console.log(ctx ,x, y, radians);
    ctx.fillStyle= '#f7fc00';
    ctx.save();
    ctx.beginPath();
    // ctx.translate(x,y-143);
    ctx.translate(x,y);
    ctx.rotate(radians);
    ctx.moveTo(0,0);
    ctx.lineTo(5,10);
    ctx.lineTo(-5,10);
    ctx.closePath();
    ctx.restore();
    ctx.fill();
    this.cPush();
  }

  startArrowDrawing(ev){
    // this.canvasW = $( ".canvasDefault " ).width();
    // this.canvasH = $( ".canvasDefault " ).height();

    if(this.activeTabName == "Tools"){
      var canvasPosition = this.canvasElement.getBoundingClientRect();
      this.saveX = ev.touches[0].pageX - this.offsetX;
      this.saveY = ev.touches[0].pageY - this.offsetY;
    }
  }

  handleStart(ev){

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;

    // console.log("handleStart", this.lastX, this.lastY);
}

handleMove(ev){
  // console.log("handleMove");
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.changedTouches[0].pageX;
    let currentY = ev.changedTouches[0].pageY;

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
    var endRadians=Math.atan((currentY-this.lastY)/(currentX-this.lastX));
    endRadians+=((currentX>this.lastX)?90:-90)*Math.PI/180;
    this.drawArrowhead(ctx,currentX,currentY,endRadians);

}

}
