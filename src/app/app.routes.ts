import { Routes } from '@angular/router';
import { HomeComponent } from './controllers/home';
import { AboutComponent } from './controllers/about';
import { WindowComponent } from './controllers/window'
import { BarrelComponent } from './controllers/directiveSample';
import { ViewDialogComponent } from './controllers/view-dialog.component';
import { NoContentComponent } from './controllers/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testWindow', component: WindowComponent },
  { path: 'detail', loadChildren: './controllers/+detail#DetailModule'},
  { path: 'window', loadChildren: './controllers/+window#WindowModule' },
  { path: 'directiveSample', component: BarrelComponent },
  { path: 'controllers', component: ViewDialogComponent },
  { path: '**',    component: NoContentComponent }
];
