import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  // provideZoneChangeDetection,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  loggerInterceptor,
  loggerWarnInterceptor,
} from '../shared/tools/logger-interceptor';
import { authInterceptor } from '../shared/tools/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes),
    { provide: 'zone.js', useValue: false },
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        loggerInterceptor,
        loggerWarnInterceptor,
      ])
    ),
  ],
};
