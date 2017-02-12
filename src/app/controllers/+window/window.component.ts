import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Window` component loaded asynchronously');

@Component({
  selector: 'window',
  template: `
    <h1>Hello from Window</h1>
    <button (click)="testMe()">myLabel</button>
    <!--<span>-->
      <!--<a [routerLink]=" ['./child-window'] ">-->
        <!--Child Window-->
      <!--</a>-->
    <!--</span>-->
  `,
})
export class WindowComponent implements OnInit {

  private bindingStringTest: string = '';

  public ngOnInit() {
    console.log('hello `Window` component');
    this.bindingStringTest = 'Test Binding as soon as we open this window.'
  }
}
