import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import(`./app.module`).then((module) => module.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import(`./modules/heroes/heroes.module`).then(
        (module) => module.HeroesModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
