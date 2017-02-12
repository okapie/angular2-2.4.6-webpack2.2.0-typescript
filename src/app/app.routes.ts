import { Routes } from '@angular/router';
import { HomeComponent } from './controllers/home';
import { AboutComponent } from './controllers/about';
import { BarrelComponent } from './controllers/directiveSample';
import { ViewDialogComponent } from './controllers/view-dialog.component';
import { NoContentComponent } from './controllers/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './controllers/+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: 'directiveSample', component: BarrelComponent },
  { path: 'controllers', component: ViewDialogComponent },
  { path: '**',    component: NoContentComponent }
];
