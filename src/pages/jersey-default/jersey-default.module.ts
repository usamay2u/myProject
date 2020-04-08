import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JerseyDefaultPage } from './jersey-default';

@NgModule({
  declarations: [
    JerseyDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(JerseyDefaultPage),
  ],
})
export class JerseyDefaultPageModule {}
