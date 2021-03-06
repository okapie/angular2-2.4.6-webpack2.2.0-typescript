import { Component, ViewChild, TemplateRef } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  age: number
}

@Component({
  selector: 'switchTemplate',
  template: `
    <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th></th>
        </thead>
        <tbody>
            <tr *ngFor="let contact of contacts; let i = index">
                <template [ngTemplateOutlet]="getTemplate(contact)" [ngOutletContext]="{ $implicit: contact, index: i }"></template>
            </tr>
        </tbody>
    </table>
    <template #displayTmpl let-contact>
        <td>{{contact.name}}</td>
        <td>{{contact.age}}</td>
        <td>
            <button (click)="editContact(contact)">Edit</button>
        </td>
    </template>
    <template #editTmpl let-i="index">
        <td><input type="text" [(ngModel)]="selected.name" /></td>
        <td><input type="text" [(ngModel)]="selected.age" /></td>
        <td>
            <button (click)="saveContact(i)">Save</button>
            <button (click)="reset()">Cancel</button>
        </td>
    </template>
  `
})
export class SwitchTemplateComponent {
  @ViewChild('displayTmpl') displayTmpl : TemplateRef<any>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  contacts: Array<Contact> = [{
    id: 1,
    name: "Ben",
    age: 28
  }, {
    id: 2,
    name: "Sally",
    age: 24
  }, {
    id: 3,
    name: "John",
    age: 32
  }, {
    id: 4,
    name: "Jane",
    age: 40
  }];

  selected: Contact;

  getTemplate(contact) {
    return this.selected && this.selected.id == contact.id ? this.editTmpl : this.displayTmpl;
  }

  editContact(contact) {
    this.selected = Object.assign({}, contact);
  }

  saveContact (idx) {
    console.log("Saving contact");
    this.contacts[idx] = this.selected;
    this.reset();
  }

  reset() {
    this.selected = null;
  }
}
