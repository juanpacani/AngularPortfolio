import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { inject } from '@vercel/analytics';
import { ErrorHandler } from '@angular/core';

class ResizeObserverErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Ignorar errores de ResizeObserver loop
    if (error?.message?.includes('ResizeObserver loop')) {
      return;
    }
    // Re-lanzar otros errores
    throw error;
  }
}

bootstrapApplication(App, { 
  ...appConfig, 
  providers: [
    ...appConfig.providers, 
    { 
      provide: ErrorHandler, 
      useClass: ResizeObserverErrorHandler 
    }
  ] 
})
  .catch((err) => console.error(err));

inject();