import { Component } from '@angular/core';

/**
 * Generated class for the NumberpickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'numberpicker',
  templateUrl: 'numberpicker.html'
})
export class NumberpickerComponent {

  text: string;

  constructor() {
    console.log('Hello NumberpickerComponent Component');
    this.text = 'Hello World';
  }

}
