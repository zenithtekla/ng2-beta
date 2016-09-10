import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
  selector: "contact-list",
  template:`
    <ul>
      <li *ngFor="#contact of contacts"
        (click)="onSelect(contact)"
        [class.clicked]="selectedContact === contact"
      >
        {{contact.firstName}} {{contact.lastName}}
      </li>
    </ul>
    <contact [contact]="selectedContact"></contact>
  `,
  directives: [ContactComponent]
})

export class ContactListComponent {
  public contacts = [{
    firstName: "Piper",
    lastName: "Tanska",
    phone: "0137 1230 578",
    email: "pipert@hivecrowd.com"
  }, {
    firstName: "Paige",
    lastName: "Sami",
    phone: "086768 23668",
    email: "paiges@hivecrowd.fi"
  }, {
    firstName: "Prue",
    lastName: "Korski",
    phone: "087 1456 235",
    email: "pruek@hivecrowd.fi"
  }];

  public selectedContact = {};

  onSelect(contact){
    this.selectedContact = contact;
  }
}
