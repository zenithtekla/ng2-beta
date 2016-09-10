import {Component} from "angular2/core";
@Component({
  selector: "contact",
  template:` 
    <div>
      <div>
        <label for="first-name">First Name:</label>
        <input [(ngModel)]="contact.firstName" type="text" id="first-name">
      </div>
      <div>
        <label for="last-name">Last Name:</label>
        <input [(ngModel)]="contact.lastName" type="text" id="last-name">
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input [(ngModel)]="contact.phone" type="text" id="phone">
      </div>
      <div>
        <label for="email">E-Mail:</label>
        <input [(ngModel)]="contact.email" type="text" id="email">
      </div>
    </div>
  `,
  inputs: ["contact"],
  styles: [`
     label {
      display: inline-block;
      width: 160px;
     }     
     input {
      width: 250px;
     }
  `]
})

export class ContactComponent{
  public contact = {};
}
