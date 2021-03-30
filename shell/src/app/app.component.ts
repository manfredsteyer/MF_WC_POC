import { Component, NgZone } from '@angular/core';
import { EventBusService } from 'event-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(
    private eventBus: EventBusService,
    private ngZone: NgZone) {

      eventBus.events.next('Hello from the Shell');

      (window as any).eventBus = eventBus;

      (window as any).ngZone = ngZone;
  }
}
