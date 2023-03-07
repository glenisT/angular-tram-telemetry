import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/guards/auth.guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "/tram/general",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "tram",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then( (m) => m.DashboardModule),
      },
      {
        path: "hvac",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "", breadcrumb: "HVAC" },
      },
      {
        path: "passeggeri",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "", breadcrumb: "Passeggeri" },
      },
      // {
      //   path: "cuscinetti",
      //   loadChildren: () =>
      //     import("./views/others/others.module").then((m) => m.OthersModule),
      //   data: { title: "", breadcrumb: "Cuscinetti" },
      // },
      {
        path: "porte",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "", breadcrumb: "Porte" },
      },
    ],
  },
  {
    path: "**",
    // redirectTo: "sessions/404",

    // for built app
    redirectTo: "/tram/general",
  },
];
