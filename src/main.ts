import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app/app.module'; 
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

const platform = platformBrowserDynamic(); 
platform.bootstrapModule(AppModule);


if (environment.locationion) {
  enableProdMode();
}

