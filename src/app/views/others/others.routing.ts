import { Routes } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';


export const OthersRoutes: Routes = [
  {
    path: '',
    children:
    [
      {
      path: 'telemetry',
      component: AppBlankComponent,
      data: { title: 'HVAC', breadcrumb: 'Heating, Ventilation and Air Conditioning' }
      }
    ]
  }
];