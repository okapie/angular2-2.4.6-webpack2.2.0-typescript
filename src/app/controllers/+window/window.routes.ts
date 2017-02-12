import { WindowComponent } from './window.component';

export const routes = [
  { path: '', children: [
    { path: '', component: WindowComponent },
    { path: 'child-window', loadChildren: './+child-window#ChildWindowModule' }
  ]},
];
