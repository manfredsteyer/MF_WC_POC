import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowser();
platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));

(window as any).mf = {
  platformCache: {
    11: platform
  }
};
