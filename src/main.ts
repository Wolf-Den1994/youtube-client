import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './app/core/core.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CoreModule)
  .catch((err) => {
    if (!environment.production) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  });
