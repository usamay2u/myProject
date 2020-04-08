import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { File, IWriteOptions } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
/*
  Generated class for the FileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var cordova: any;
@Injectable()
export class FileProvider {

  storageDirectory: string = '';
  baseUrl = 'http://www.mysoccer11.com/soccer_admin/';
  // baseUrl = 'http://128.199.118.13/soccer11/';
  lastImage: string = null;

  //targetPath = this.pathForImage(this.lastImage);
  constructor(public http: HttpClient,
    public platform: Platform,
    private transfer: FileTransfer,
    private file: File) {


    //this.platform.ready().then(() => {
    // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
    // if (!this.platform.is('cordova')) {
    //  return false;
    //}
    if (this.platform.is('ios')) {
      this.storageDirectory = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      this.storageDirectory = this.file.dataDirectory;
    }
    //  else {
    // exit otherwise, but you could add further types here e.g. Windows
    //   return false;
    // }
    // });
  }

  downloadImage(imageName, folder) {
    let image = 'assets/images/' + imageName;
    // this.platform.ready().then(() => {
    //console.log('image is  ', image);
    const fileTransfer: FileTransferObject = this.transfer.create();
    const imageLocation = this.baseUrl + image;
    // console.log("imageLocation => ", imageLocation);

    return fileTransfer.download(imageLocation, this.storageDirectory + 'assets/images/' + folder + imageName).
      then((entry) => {
         console.log('downloaded ', entry);
         return true;
      },
        (error) => {
          console.log('image error', error);
          return false;
        });
    //  });
  }

  retrieveImage(image) {
    image = 'assets/images/' + image;
    // console.log('retrieveImage is  ', image);
    return this.file.checkFile(this.storageDirectory, image)
      .then((res) => {
        //  console.log('image retrieved', this.storageDirectory + image);

      })
      .catch((err) => {
        console.log('image error', err);

      });
  }

  getStorageDirectory() {

    return this.storageDirectory;
  }
  ///converting base64 image from camera
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  public saveBase64(base64: string, folderName): Promise<string> {
    return new Promise((resolve, reject) => {
      var realData = base64.split(",")[1]
      let blob = this.b64toBlob(realData, 'image/jpeg')
      let name = this.createFileName()
      let options: IWriteOptions = { replace: true };
      // console.log('blob', blob, name, 'name')
      let path = this.storageDirectory + 'assets/images/' + folderName;
      // console.log(path)
      this.file.writeFile(path + '', name, blob, options)
        .then(() => {
          resolve(name);
        })
        .catch((err) => {
          console.log('error writing blob', err)
          reject(err)
        })
    })
  }
  public saveBase64Screen(base64: string, folderName): Promise<string> {
    return new Promise((resolve, reject) => {
      let path = this.storageDirectory + 'assets/images/' + folderName;
      var realData = base64.split(",")[1]
      let blob = this.b64toBlob(realData, 'image/jpeg')
      let name = this.createFileName()
      let options: IWriteOptions = { replace: true };
                  this.file.writeFile(path +'', name, blob, options)
                .then(() => {
                  console.log('file written')
                  resolve(name);
                })
                .catch((err) => {
                  console.log('error writing blob', err)
                  reject(err)
                })


    })
  }
  /* saveImageFromCamera(imagePath) {
     console.log(imagePath)
     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
   }
   saveImageFromGallery(imagePath) {
     this.filePath.resolveNativePath(imagePath)
       .then(filePath => {
         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
       })
       .catch(err => console.log(err));;

   }*/
  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  public uploadImage(targetUrl) {
    // Destination URL
    var url = 'http://www.mysoccer11.com/soccer_admin/uploads';
    // var url = 'http://128.199.118.13/soccer11/assets/images';

    // File for Upload
    var targetPath = targetUrl;

    // File name only
    var filename = localStorage.getItem('activeLineup');

    var options = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpg",
      headers: {}
    };

    const fileTransfer: FileTransferObject = this.transfer.create();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {

      console.log('Image succesful uploaded.',data);
    }, err => {
      console.log('Image err.',err);
    });
  }

   // Copy the image to a local folder
  /*private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.storageDirectory, newFileName)
      .then(success => {
        this.lastImage = newFileName;
        console.log(this.lastImage);

      })
      .catch(err => console.log(err));
  }
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.storageDirectory + img;
    }
  }*/
}
