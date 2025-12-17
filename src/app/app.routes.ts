import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'add-user',
    loadComponent: () => import('./components/add-user/add-user').then(m => m.AddUser)
  },
  { path: '**', component: Dashboard }
];
