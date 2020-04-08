import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamSelectionPage } from './team-selection';

@NgModule({
  declarations: [
    TeamSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamSelectionPage),
  ],
})
export class TeamSelectionPageModule {}
