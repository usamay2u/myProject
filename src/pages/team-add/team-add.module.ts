import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamAddPage } from './team-add';

@NgModule({
  declarations: [
    TeamAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamAddPage),
  ],
})
export class TeamAddPageModule {}
