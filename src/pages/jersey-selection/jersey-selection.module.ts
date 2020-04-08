import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JerseySelectionPage } from './jersey-selection';

@NgModule({
  declarations: [
    JerseySelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(JerseySelectionPage),
  ],
})
export class JerseySelectionPageModule {}
