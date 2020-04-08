import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TabsComponent } from './tabs/tabs';
import { GroundComponent } from './ground/ground';
import { SettingsComponent } from './settings/settings';
import { GroundPageComponent } from './ground-page/ground-page';
import { TeamComponent } from './team/team';
import { ToolsComponent } from './tools/tools';
import { JerseyComponent } from './jersey/jersey';
import { SaveComponent } from './save/save';
@NgModule({
	declarations: [FooterComponent,
    TabsComponent,
    GroundComponent,
    GroundComponent,
    SettingsComponent,
    GroundPageComponent,
    TeamComponent,
    ToolsComponent,
    JerseyComponent,
    SaveComponent,
   ],
	imports: [],
	exports: [FooterComponent,
    TabsComponent,
    GroundComponent,
    GroundComponent,
    SettingsComponent,
    GroundPageComponent,
    TeamComponent,
    ToolsComponent,
    JerseyComponent,
    SaveComponent,
  ]
})
export class ComponentsModule {}
