import { Component } from '@angular/core';
import { BarrelService } from '../../services/barrel.service';

@Component({
  selector: 'barrel',
  template:  require('../../templates/barrel/barrel.html'),
  providers: [BarrelService]
})

export class BarrelComponent {

  listArray: Array<string> = [];

  constructor(
    private barrelService: BarrelService
  ) {
    this.displayAllList();
  }

  displayAllList(): void {
    this.barrelService.getAllList()
      .subscribe(
        res => {
          console.log(res.json());
          this.listArray = res.json();
        });
  }
}
