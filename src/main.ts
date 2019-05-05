import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    window.addEventListener('load', () => {
      console.log('ServiceWorker Registration start: ');
      navigator.serviceWorker.register('ngsw-worker.js').then((successfully) => {
        console.log('ServiceWorker registration successful with scope: ', successfully.scope);
      }, (error) => {
        console.log('ServiceWorker Registration failed...', error);
      });
    });
  }

  // self.addEventListener('install', (event: any) => {
  //   console.log('ServiceWorker installing-V1');

  //   event.waitUntil(
  //     caches.open('static-v1').then(caches => caches.add('sanjeev'))
  //   );

  // });

})
  .catch(err => console.error(err));
