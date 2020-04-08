import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JerseyAddPage } from './jersey-add';

@NgModule({
  declarations: [
    JerseyAddPage,
  ],
  imports: [
    IonicPageModule.forChild(JerseyAddPage),
  ],
})
export class JerseyAddPageModule {}
