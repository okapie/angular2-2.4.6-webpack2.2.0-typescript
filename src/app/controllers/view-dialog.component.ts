import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template:  require('../templates/dialog.html')
})
export class ViewDialogComponent {
  testErrorMessage = 'Test Error Handling';
}
