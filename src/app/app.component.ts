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
    </header>
    <nav>
        <a [routerLink]=" ['./'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Index
        </a>
        <a [routerLink]=" ['./home'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Home
        </a>
        <a [routerLink]=" ['./detail'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Detail
        </a>
        <a [routerLink]=" ['./directiveSample'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Directive sample
        </a>
        <a [routerLink]=" ['./about'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Component sample
        </a>
        <a [routerLink]=" ['./controllers'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            View dialog sample
        </a>
    </nav>
    <main>
        <router-outlet></router-outlet>
    </main>
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
