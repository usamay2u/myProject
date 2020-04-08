import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import {Camera} from '@ionic-native/camera';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SocialSharing } from '@ionic-native/social-sharing';
import Swal from 'sweetalert2';
import { Screenshot } from '@ionic-native/screenshot';
import { LongPressModule } from 'ionic-long-press';
import { HttpModule } from '@angular/http';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { RatioCrop } from 'ionic-cordova-plugin-ratio-crop';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AdMobPro } from '@ionic-native/admob-pro';
//import { routes } from './app.router';
import { ServicesProvider } from '../providers/services/services';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AppRate } from '@ionic-native/app-rate';
import { Market } from '@ionic-native/market';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ToolsPage } from '../pages/tools/tools';
import { JerseyDefaultPage } from '../pages/jersey-default/jersey-default';
import { SettingsPage } from '../pages/settings/settings';
import { GroundPage } from '../pages/ground/ground';
import { TeamDefaultPage } from '../pages/team-default/team-default';
import { FooterComponent } from '../components/footer/footer';
import { TabsComponent } from '../components/tabs/tabs';
import { HttpClientModule } from  '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { SharedService } from '../providers/services/sharedServices';
import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';
import {CarouselModule} from "angular2-carousel"
import { GroundComponent } from '../components/ground/ground';
import { GroundPageComponent } from '../components/ground-page/ground-page';
import { SettingsComponent } from '../components/settings/settings';
import { TeamComponent } from '../components/team/team';
import { ToolsComponent } from '../components/tools/tools';
import { JerseyComponent } from '../components/jersey/jersey';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileProvider } from '../providers/file/file';
import { FilePath } from '@ionic-native/file-path';
import { GlobalErrorHandler } from '../providers/services/globalErrorHandler';
import { SaveComponent } from '../components/save/save';
import { ToastService } from '../providers/services/toast';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { LimitPipe } from '../pipes/limit/limit';
import { Base64 } from '@ionic-native/base64';
import { Clipboard } from '@ionic-native/clipboard';

//import { Keyboard } from '@ionic-native/keyboard';//

class ScreenOrientationMock extends ScreenOrientation {
  lock(type) {
    return new Promise((resolve, reject) => {
      resolve("locked");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolsPage,
    FooterComponent,
    TabsComponent,
    GroundComponent,
    JerseyDefaultPage,
    SettingsPage,
    GroundPage,
    TeamDefaultPage,
    AbsoluteDrag,
    GroundPageComponent,
    SettingsComponent,
    SaveComponent,
    ToolsComponent,
    JerseyComponent,
    TeamComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    CarouselModule,
    FormsModule,
    LongPressModule,
    AngularCropperjsModule
     // routes,
    // HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ToolsPage,
    FooterComponent,
    TabsComponent,
    GroundComponent,
    JerseyDefaultPage,
    SettingsPage,
    GroundPage,
    TeamComponent,
    TeamDefaultPage,
    GroundPageComponent,
    SettingsComponent,
    SaveComponent,
    JerseyComponent,
    ToolsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    RestProvider,
    SQLite,
    ServicesProvider,
    DatabaseProvider,
    SharedService,
    File,
    FileTransfer,
    FileTransferObject,
    FileProvider,
    FilePath,
    Camera,
    SocialSharing,
    Screenshot,
    Base64,
    ToastService,
    PhotoLibrary,
    AdMobPro,
   // Keyboard,
    { provide: ScreenOrientation, useClass: ScreenOrientationMock },
    DataServiceProvider,
    Clipboard,
    RatioCrop,
    // UniqueDeviceID,
    GoogleAnalytics,
    AppRate,
    Market
  ]
})
export class AppModule {}
