import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const API = new InjectionToken<string>('API');

// provideHttpClient() => fournit httpClient à tout service ou composant
// en ayant besoin
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    { provide: API, useValue: 'http://localhost:3000/students' }
  ]
};
