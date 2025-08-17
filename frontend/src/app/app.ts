import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: '<h1>Hello from Angular!</h1>',
  styles: []
})
export class AppComponent {
  constructor() {
    console.log('AppComponent constructor called');
  }
}
