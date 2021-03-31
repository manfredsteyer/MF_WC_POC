import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from 'event-bus';
import { createRoutes } from './app.routes';
import { createLinks } from './utils/remote-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  links: string[] = [];

  constructor(
    private router: Router,
    private eventBus: EventBusService,
    private ngZone: NgZone) {

      createRoutes()
        .then(routes => router.resetConfig(routes))
        .catch(err => console.error('err', err));

      createLinks()
        .then(links => this.links = links)
        .catch(err => console.error('err', err));

      eventBus.events.next('Hello from the Shell');

      (window as any).eventBus = eventBus;

      (window as any).ngZone = ngZone;
  }
}
