import {Component} from 'angular2/core';
import {ShoppingListComponent} from "./shopping-list.component";
import {ContactListComponent} from "./contacts/contact-list.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p> 
        <shopping-list></shopping-list>
        <contact-list></contact-list>
    `,
    directives: [ShoppingListComponent, ContactListComponent],
    styleUrls: ['src/css/app.css']
})
export class AppComponent {

}
