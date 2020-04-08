import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamSavePage } from './team-save';

@NgModule({
  declarations: [
    TeamSavePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamSavePage),
  ],
})
export class TeamSavePageModule {}
