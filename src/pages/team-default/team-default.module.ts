import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDefaultPage } from './team-default';

@NgModule({
  declarations: [
    TeamDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamDefaultPage),
  ],
})
export class TeamDefaultPageModule {}
