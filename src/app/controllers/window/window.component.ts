import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildWindow` component loaded asynchronously');

@Component({
  selector: 'child-Window',
  template: `
    <h1>Hello from Child Window</h1>   
    <div>{{ bindingStringTest }}</div>
  `,
})
export class WindowComponent implements OnInit {

  private bindingStringTest: string = '';

  public ngOnInit() {
    console.log('hello `ChildWindow` component');
    this.bindingStringTest = 'Test Binding as soon as we open this window.'
  }
}
