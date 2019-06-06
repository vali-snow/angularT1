import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  //templateUrl: './app.component.html',
  template: `
    <h2>Hello World</h2>
    <img src="/assets/images/basic-shield.png"/>
  `,
  //styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
