/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header>
        <img [src]="okapLogo">
        <tabs>
            <tab [tabTitle]="'Tab 1'">
                <barrel></barrel>
            </tab>
            <tab tabTitle="Tab 2">
                <about></about>
            </tab>
        </tabs>
    </header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public okapLogo = 'assets/img/logo.png';
  public name = 'Angular 2 Webpack Starter';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
