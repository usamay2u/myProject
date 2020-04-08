import { Component, ViewChild, ViewContainerRef, Type, EventEmitter } from '@angular/core';
import { SharedService } from '../../providers/services/sharedServices';

/**
 * Generated class for the ToolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tools',
  templateUrl: 'tools.html'
})
export class ToolsComponent {

  text: string;
  // activeToolName = "Pencil"
  activeToolName = '';
  showBall: boolean = false;
  constructor(
    public _SharedService: SharedService
  ) {
    // console.log('Hello ToolsComponent Component');
    this.text = 'Hello World';
    let tool = localStorage.getItem('activeToolName');
    if(tool)
      this.activeToolName = tool;
    else
      this.activeToolName = '';

    let football =  localStorage.getItem("showBall");
    if(football && football != null && football != '') {
      if(football == 'true')
        this.showBall = true;
      else
        this.showBall = false;
    } else {
      this.showBall = true;
    }
  }

  pushPage(e){
    // console.log("pushPage ----", e);
    //localStorage.setItem('activeToolName', e);
    if(e != "Eraser" && e != "Undo" && e != "Redo"  && e != "Football"){
      // this.activeToolName = e;
      let existingTool = localStorage.getItem('activeToolName');
      if((e && existingTool == '') || (e && existingTool != e))
        this.activeToolName = e;
      else
        this.activeToolName = '';
    }

    if(e == "Football") {
      let football =  localStorage.getItem("showBall");
      if(football && football != null && football != '') {
        if(football == 'true')
          this.showBall = false;
        else
          this.showBall = true;
      } else {
        this.showBall = true;
      }
    }
    
    this._SharedService.toolsManagement.emit(e);
  }

}
