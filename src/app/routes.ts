import { RouterModule, Routes } from "@angular/router";

/** Основные роуты для AppModule */
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

export default RouterModule.forRoot(appRoutes);
