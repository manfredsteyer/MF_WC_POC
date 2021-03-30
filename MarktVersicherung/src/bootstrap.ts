import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // enableProdMode();
}

let platform: PlatformRef = (window as any).mf?.platformCache?.['12'];
if (!platform) {
  platform = platformBrowser();

  if (!(window as any).mf) {
    (window as any).mf = {};
  }
  if (!(window as any).mf.platformCache) {
    (window as any).mf.platformCache = {};
  }

  (window as any).mf.platformCache['12'] = platform;
}

platform.bootstrapModule(AppModule, { ngZone: (window as any).ngZone})
  .catch(err => console.error(err));
