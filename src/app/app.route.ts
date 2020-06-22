import { Routes } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';

export const appRoutes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: '', redirectTo: 'sidenav', pathMatch: 'full' }
]