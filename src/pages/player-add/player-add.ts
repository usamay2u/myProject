import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileProvider } from '../../providers/file/file';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';
import { SharedService } from '../../providers/services/sharedServices';
import { ToastService } from '../../providers/services/toast';
//import swal from 'sweetalert';

/**
 * Generated class for the PlayerAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-add',
  templateUrl: 'player-add.html',
})
export class PlayerAddPage {
  addPlayerForm: FormGroup;
  public photo: any;
  public photoManager: any;
  public base64Image: string;
  playerLogo;
  activeTeamDetails;
  currentTeamId;
  playersList: any;
  keeperExist = false;
  isKeeper = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private fileObj: FileProvider,
    private dbProvider: DatabaseProvider,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera
  ) {

  }
  ngOnInit() {
    this.activeTeamDetails = JSON.parse(localStorage.getItem('activeTeamDetails'))
    // this.currentTeamId = this.activeTeamDetails[0].id;
    this.currentTeamId = this.activeTeamDetails[0].teamId;
    // console.log("ngOnInit LOCAL STORAGE TEAM ====>>>> ", this.activeTeamDetails); 
    this.setFormControl();
  }
  setFormControl() {
    this.addPlayerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      teamId: [this.currentTeamId, [Validators.required]],
      image: [''],
      jerseyNo: [''],
      isGoalkeeper: [this.isKeeper]
    });
  }

  onSavePlayer() {
    let players = JSON.parse(localStorage.getItem('activePlayerDetails'));

    //can add maximum of 15 players
   // if (players.length <= 15) {
      this.addPlayerForm.patchValue({
        defaultUser: this.addPlayerForm
      });
      let formObjData = this.addPlayerForm.value;

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
  }
  presentActionSheet(type) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY)
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.CAMERA)
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
      this.fileObj.saveBase64(this.base64Image, 'player/').then((logo) => {
        this.playerLogo = logo
        console.log(this.playerLogo)
      })

    }, (err) => {
      console.log(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerAddPage');
  }
  dismiss() {
    this._SharedService.setOpenPage.emit('false'); 
    this.viewCtrl.dismiss();
  }
  onGoalKeeperClick() {
    this.isKeeper = !this.isKeeper
  }

  addCustomTeam(formObjData) {
    this.dbProvider.addCustomPlayer(formObjData, this.playerLogo)
      .then((customPlayerData) => {
        console.log("customPlayerData ---- > ", customPlayerData);
        // this.dbProvider.selectTeams().then((data)=>{
        //   console.log("selectTeams data ---- > ", data);
        // })
        // console.log("Custom Player Added...");

        // if(this.currentTeamId == "0" || this.currentTeamId == 0)
        //   this.currentTeamId = this.activeTeamDetails[0].id;

        this.dbProvider.selectPlayers(this.currentTeamId).then((response) => {
          this.playersList = response;
          console.log("New team players => ", this.playersList);
          localStorage.setItem('activePlayerDetails', JSON.stringify(this.playersList));
          // console.log("selectplayers data ---- > ", response);
          this._SharedService.refreshPlayers.emit(this.playersList);
          this._SharedService.retrieveData.emit(this.playersList);
          this.toastCtrl.callToast('Player details saved successfully.');

        });
        this.dismiss();
      })
  }
}
