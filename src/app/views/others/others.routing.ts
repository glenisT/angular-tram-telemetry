import { Routes } from '@angular/router';
import { AppCuscinettiComponent } from './app-cuscinetti/app-cuscinetti.component';
import { AppHvacComponent } from './app-hvac/app-hvac.component';
import { AppPasseggeriComponent } from './app-passeggeri/app-passeggeri.component';
import { AppPorteComponent } from './app-porte/app-porte.component';


export const OthersRoutes: Routes = [
  {
    path: '',
    children:
    [
      {
      path: 'telemetryHVAC',
      component: AppHvacComponent,
      data: { title: 'HVAC', breadcrumb: '' }
      },

      {
        path: 'telemetryPasseggeri',
        component: AppPasseggeriComponent,
        data: { title: 'Passeggeri', breadcrumb: '' }
      },

      {
        path: 'telemetryCuscinetti',
        component: AppCuscinettiComponent,
        data: { title: 'Cuscinetti', breadcrumb: '' }
      },

      {
        path: 'telemetryPorte',
        component: AppPorteComponent,
        data: { title: 'Porte', breadcrumb: '' }
      }
    ]
  }
];