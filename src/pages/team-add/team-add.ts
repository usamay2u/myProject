import { Component, EventEmitter } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { DatabaseProvider } from '../../providers/database/database';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { FileProvider } from '../../providers/file/file';
import { SharedService } from '../../providers/services/sharedServices';
import { ToastService } from '../../providers/services/toast';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

//import { Keyboard } from '@ionic-native/keyboard';
//import {DomSanitizationService} from '@angular/platform-browser';
/**
 * Generated class for the TeamAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-add',
  templateUrl: 'team-add.html',
})
export class TeamAddPage {
  addTeamForm: FormGroup;
  public photo: any;
  public photoManager: any;
  public base64Image: string;
  teamImagename;
  managerImageName;
  activeTeam: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private service: ServicesProvider,
    private dbProvider: DatabaseProvider,
    public platform: Platform,
    private camera: Camera,
    private fileObj: FileProvider,
    public toastCtrl : ToastService,
    public _SharedService: SharedService,
   // private keyboard: Keyboard,
   // private _DomSanitizationService: DomSanitizationService,
    public actionSheetCtrl: ActionSheetController,
    private ga: GoogleAnalytics
  ) {
    this.ga.trackView('Make Your Team Page');
    this.setFormControl();

  }
  setFormControl() {
    this.addTeamForm = this.formBuilder.group({
      team_name: ['', [Validators.required]],
      manager_name: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    //  this.photos = [];
  }
  presentActionSheet(type) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            if (type == 'logo')
              this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY)
            else
              this.takeManagerPhoto(this.camera.PictureSourceType.PHOTOLIBRARY)

          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            if (type == 'logo')
              this.takePhoto(this.camera.PictureSourceType.CAMERA)
            else
              this.takeManagerPhoto(this.camera.PictureSourceType.CAMERA)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  takePhoto(sourceType) {
    const options: CameraOptions = {
      quality: 50, // picture quality
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imagePath) => {
      this.base64Image = "data:image/jpeg;base64," + imagePath;
      this.photo = this.base64Image;
      this.fileObj.saveBase64(this.base64Image,'team/').then((teamLogo)=>{
          this.teamImagename = teamLogo
        })
        console.log(this.teamImagename)
      }, (err) => {
      console.log(err);
    });
  }
  takeManagerPhoto(sourceType) {
    const options: CameraOptions = {
      quality: 50, // picture quality
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imagePath) => {
      this.base64Image = "data:image/jpeg;base64," + imagePath;
      this.photoManager = this.base64Image;
      this.fileObj.saveBase64(this.base64Image,'team/').then((manager)=>{
          this.managerImageName = manager
        })
        console.log('manager',this.managerImageName)
      }, (err) => {
      console.log(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamAddPage');
    //this.keyboard.disableScroll(true);
  }
  dismiss() {
    this._SharedService.setOpenTeam.emit('false');
    this.viewCtrl.dismiss();
  }
  addTeam() {
    console.log("ADD TEAM...");
  }

  onSaveTeam() {

    this.addTeamForm.patchValue({
      defaultUser: this.addTeamForm
    });
    let formObjData = this.addTeamForm.value;

    this.dbProvider.addCustomTeam(formObjData,this.teamImagename,this.managerImageName)
    .then((customTeamData) => {
      localStorage.setItem("activeLeague", '1');
      this.dbProvider.selectTeams(localStorage.getItem('activeLeague'), null).then((data)=>{
        this._SharedService.refreshTeams.emit(data);
        this._SharedService.retrieveData.emit(data);
        this._SharedService.refreshDefaultTeams.emit(customTeamData['insertId']);
        this.toastCtrl.callToast('A new team was added successfully.');
        this.addLineUp(customTeamData['insertId'], formObjData['team_name']);
      })
      this.dismiss();
    })
  }

  addLineUp(teamId, team_name) {
    let lineUpArray: any = [];
    let LineUpName = 'Team';
    this.activeTeam = JSON.parse(localStorage.getItem('activeTeamDetails'));

    lineUpArray.push({ 'leagueId': localStorage.getItem('activeLeague'), 'teamId': teamId, 'team': team_name, 'logo': '', 'teamName':  LineUpName});

    this.dbProvider.insertLineUp(lineUpArray)
      .then((lineupId) => {
        this._SharedService.updateMenu.emit('update menu');
    });
  }

  /*private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }*/


}
