import { Component, Input } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';
import { SharedService } from '../../providers/services/sharedServices';
/**
 * Generated class for the GroundPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ground-page',
  templateUrl: 'ground-page.html'
})
export class GroundPageComponent {

  grounds:any =[];
  constructor(
    private dbProvider: DatabaseProvider,
    public _SharedService:SharedService ) {
    // console.log('Hello GroundPageComponent Component');
   
  }
  ngOnInit(){
     this.getAllGrounds();
  }

  getAllGrounds() {
    this.dbProvider.selectGrounds().
    then((groundsArr)=>{
     this.grounds = groundsArr;
      // console.log('groundsPageArr',this.grounds);
     })
  }
  
  changeGround(e){
    this._SharedService.selectGround.emit(e);

  }
}
