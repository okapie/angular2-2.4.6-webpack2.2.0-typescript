import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './window.routes';
import { WindowComponent } from './window.component';

console.log('`Window` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    WindowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class WindowModule {
  public static routes = routes;
}
