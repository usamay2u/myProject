import { Component } from '@angular/core';

/**
 * Generated class for the SaveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'save',
  templateUrl: 'save.html'
})
export class SaveComponent {

  text: string;

  constructor() {
    console.log('Hello SaveComponent Component');
    this.text = 'Hello World';
  }

}
