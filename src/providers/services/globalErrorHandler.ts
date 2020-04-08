import  { ErrorHandler, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()

export class GlobalErrorHandler implements ErrorHandler {
   toast; 
    constructor(private toastCtrl: ToastController) {}
   
    handleError(error){
      let toast =  this.presentToast('An unexpected error occured');
      toast.present();
      toast.onDidDismiss(() => {
         console.log('Dismissed toast');
       });
       console.log(error);
    }
    presentToast(message) {
        return this.toast = this.toastCtrl.create({
         message: message,
         duration: 3000,
         position: 'top'
       });
     
       
     
      }
}