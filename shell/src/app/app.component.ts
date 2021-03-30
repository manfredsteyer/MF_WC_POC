import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private ngZone: NgZone) {
    (window as any).ngZone = ngZone;
  }
}
