import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

console.log('main.ts: Starting Angular application...');

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('main.ts: Angular application bootstrapped successfully!');
  })
  .catch((err) => {
    console.error('main.ts: Error bootstrapping Angular application:', err);
  });
