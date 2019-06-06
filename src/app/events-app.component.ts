import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  //templateUrl: './app.component.html',
  template: `
    <events-list></events-list>
  `,
  //styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
