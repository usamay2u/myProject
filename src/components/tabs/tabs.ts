import { Component , EventEmitter} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDefaultPage } from '../../pages/team-default/team-default';
import { SharedService } from '../../providers/services/sharedServices';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  text: string;
  activeTab =  localStorage.getItem('activeTabName');
  buttonMode = './assets/imgs/save-button.svg'
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public _SharedService:SharedService 
    ) {
    // console.log('Hello TabsComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
    this._SharedService.afterEditLineUp.subscribe(
      (componentName) => {
        localStorage.setItem('activeTabName', componentName);
        this.activeTab = componentName;
      });
      this._SharedService.setEditSaveMode.subscribe(
        (modeText) => {
          this.buttonMode = (modeText == 'Update') ? './assets/imgs/update-button.svg' : './assets/imgs/save-button.svg'
        })
  }

  pushPage(e){
    localStorage.setItem('activeTabName', e);
    this.activeTab = e;
    this._SharedService.tabNavigation.emit(e);

  }

}
