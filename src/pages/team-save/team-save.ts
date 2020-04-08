import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SharedService } from '../../providers/services/sharedServices';
import { ToastService } from '../../providers/services/toast';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { ServicesProvider } from '../../providers/services/services';

import { Base64 } from '@ionic-native/base64';
import { Clipboard } from '@ionic-native/clipboard';
import { RatioCrop, RatioCropOptions } from 'ionic-cordova-plugin-ratio-crop';
import { AdMobPro } from '@ionic-native/admob-pro';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the TeamSavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-save',
  templateUrl: 'team-save.html',
})
export class TeamSavePage {
  @ViewChild('imageCanvas') canvas: any;
  @ViewChild('imageScreenshot') imgElement: any;

  screenshotImg: any;
  dataUri: any;
  responseUrl: any;
  base64Str: string = '';
  arrayPath:any;
  androidAdUnit : string;
  showModel: boolean = false;

  private cropOptions: RatioCropOptions = {
    quality: 100,
    targetWidth: 1080,
    targetHeight: 1080,
    widthRatio: -1,
    heightRatio: -1
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public _SharedService: SharedService,
    public toastCtrl: ToastService,
    public photoLib: PhotoLibrary,
    // private crop: Crop,
    public services: ServicesProvider,
    private base64: Base64,
    private socialSharing: SocialSharing,
    private clipboard: Clipboard,
    private crop: RatioCrop,
    private admob: AdMobPro,
    private platform: Platform,
    private ga: GoogleAnalytics
  ) {
    this.ga.trackView('Save Page');

    if(this.platform.is('android')) {
      this.androidAdUnit = 'ca-app-pub-3177597429175100/5082349560';
    } else if (this.platform.is('ios')) {
      this.androidAdUnit = 'YOUR_ADID_IOS';
    }
  }
  ngOnInit() {

    this.screenshotImg = '';
    this.screenshotImg = this.navParams.get('screenshot');

    this.crop.ratioCrop(this.screenshotImg, this.cropOptions)
      .then(
        newImage => {
          this.showModel = true;
          console.log(newImage);
          this.screenshotImg = newImage;
          this.base64Str = this.screenshotImg;

          this.arrayPath = this.base64Str.split('?');
          setTimeout(()=>{
          this.dataUri = this.convertToDataURLviaCanvas(this.arrayPath[0], 'image/jpeg');
        },2000)
      },
        error => {
          this.showModel = false;
          // this.dismissNew();
          this.launchInterstitial();
        }
      );
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
  }

  // show Interstitial Ads
  launchInterstitial() {
    let adId;
    if(this.platform.is('android')) {
      adId = 'ca-app-pub-3177597429175100/5082349560';
    } else if (this.platform.is('ios')) {
      adId = 'YOUR_ADID_IOS';
    }
    this.admob.prepareInterstitial({adId: adId, license: "justinwilson28@gmail.com/fd1e7592ac1ca9d1ee450534aaf7df4f", isTesting: false})
      .then(() => { this.admob.showInterstitial(); });

    this.admob.onAdDismiss()
    .subscribe(() => {
      var that = this;
      setTimeout(function() {
        that.dismiss();
      }, 0);
     });

     this.admob.onAdFailLoad()
     .subscribe((err) => {
      //  console.log('Error loading ad:', err);
       var that = this;
        setTimeout(function() {
          that.dismiss();
        }, 0);
      }
      );
  }

  copyToClip(){
    this.clipboard.copy(this.responseUrl);
    this.toastCtrl.callToast('Text copied.');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamSavePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // dismissNew() {
  //   this.viewCtrl.dismiss();
  //   this.launchInterstitial();
  // }

  openSocialMedia(type) {
    // console.log(this.screenshotImg)
    // Check if sharing via email is supported
    if (type != 'photo') {
      this.socialSharing.canShareVia(type, null, null, null, null).then(() => {
      }).catch(() => {
        this.toastCtrl.callToast(type + ' is not installed on your device. Please install it to use this feature.');
      });
    }
    if (type == 'watsapp') {

      // Share via email
      this.socialSharing.shareViaWhatsApp(this.responseUrl, this.screenshotImg, null).then(() => {
        // Success!
        console.log('success')
      }).catch(() => {
        // Error!
      });
    }
    else if (type == 'facebook') {
      // Share via email
      this.socialSharing.shareViaFacebookWithPasteMessageHint(this.responseUrl, this.screenshotImg, null).then(() => {
        // Success!
        console.log('success')
      }).catch(() => {
        // Error!
      });
    }
    else if (type == 'twitter') {
      // Share via email
      this.socialSharing.shareViaTwitter(this.responseUrl, this.screenshotImg, null).then(() => {
        // Success!
        console.log('success')
      }).catch(() => {
        // Error!
      });
    }
    else if (type == 'instagram') {
      // Share via email
      this.socialSharing.shareViaInstagram(this.responseUrl, this.screenshotImg).then(() => {
        // Success!
        console.log('success')
      }).catch(() => {
        // Error!
      });
    }
    else if (type == 'photo') {
      // Share via email

      this.photoLib.requestAuthorization().then((response) => {

        this.photoLib.saveImage(this.arrayPath[0], "mySoccer11")
          .then((libraryItem) => {
            // Success!
            this.toastCtrl.callToast('Image Saved to mySoccer11 album in gallery.');
          }).catch((err) => {
            console.log('err to album', err)
          });
          this.photoLib.saveImage(this.dataUri, "dataUri")
          .then((libraryItem) => {
            // Success!
            this.toastCtrl.callToast('Image Saved to mySoccer11 album in gallery.');
          }).catch((err) => {
            console.log('err to album', err)
          });

     })
    .catch(err => console.log('permissions weren\'t granted'));

    }
  }

  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      var canvasPosition = this.canvas.nativeElement.getBoundingClientRect();
      var ctx = this.canvas.nativeElement.getContext('2d');

    ctx.drawImage(this.imgElement.nativeElement, 0, 0);
    let dataURL = this.canvas.nativeElement.toDataURL(outputFormat);
    resolve(dataURL);
    });
  }

  postToServer() {
    var that = this;
    setTimeout(function() {
      let uri = { 'images': that.dataUri.__zone_symbol__value }
      that.services.postImage(uri).subscribe(
        response => {
          let imgArr = JSON.stringify(response);
          that.responseUrl = JSON.parse(imgArr).image_url;
          that.copyToClip();
        });
    }, 500);
  }

}
