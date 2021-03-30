import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WebComponentWrapperComponent } from './web-component-wrapper/web-component-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WrapperComponent,
    WebComponentWrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
