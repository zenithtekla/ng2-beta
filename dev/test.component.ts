import {Component} from 'angular2/core'

@Component({
  selector: 'test',
  templateUrl: 'templates/test.tpl.html',
  styleUrls: ['src/css/app.css']
})

export class TestComponent {
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
  },
    {
      firstName: "Prue",
      lastName: "Korski",
      phone: "087 1456 235",
      email: "pruek@hivecrowd.fi"
    }
  ];
  public selectedContact = {};
  
  public showDetail = false;

  onSelect(contact){
    this.selectedContact = contact;
  }
}
