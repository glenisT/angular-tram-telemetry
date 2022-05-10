import { Routes } from "@angular/router";

import { AnalyticsComponent } from "./analytics/analytics.component";

export const DashboardRoutes: Routes = [
  {
    path: "general",
    component: AnalyticsComponent,
    data: { title: 'Informazioni Generali', breadcrumb: '' }
  }
];
