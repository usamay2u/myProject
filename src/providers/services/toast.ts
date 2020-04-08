import { Component, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
    toast; 
    constructor(private toastCtrl: ToastController) {
        
    }
    callToast(msg){
         let toast =  this.presentToast(msg);
        toast.present();
        toast.onDidDismiss(() => {
           console.log('Dismissed toast');
         });
       
    }
  
    presentToast(message) {
        return this.toast = this.toastCtrl.create({
         message: message,
         duration: 3000,
         position: 'top'
       });
    }
}