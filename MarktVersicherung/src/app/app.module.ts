import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarktHochladenComponent } from './markt-hochladen/markt-hochladen.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MarktHochladenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap { 

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const ce = createCustomElement(MarktHochladenComponent, { injector: this.injector });
    customElements.define('markt-hochladen', ce);
  }

}
