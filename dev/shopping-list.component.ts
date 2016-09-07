import {Component, OnInit} from "angular2/core";
import {TestComponent} from "./test.component";

// @decorator in TypeScript is an easy way to add metadata to the class.
// Decorator is the maker of the component, makes ng2 recognize the component

@Component({
   // some component, configuration
  selector: "shopping-list",
  template: `
    <ul>
    <li 
      *ngFor="#item of items"
      (click) = "onItemClicked(item)"
      >{{ item.name }}</li>
    </ul>
      <label for="editItem">Edit Item</label><input type="text" [(ngModel)]="selectedItem.name" id="editItem">
      <button (click)="onDeleteItem()">Delete Item</button>
      <br>
      <label for="addItem">Add Item</label><input type="text" #item id="addItem">
      <button (click) = "onAddItem(item)">Add Item</button>
      <br>
      <br>
      <hr>
      <br>
      <br>
      Hi, I'm <span [style.color]="inputElement.value==='yes' ? 'olive': ''">{{name}}</span>, Angular2-Meteor <span [class.is-awesome]="inputElement.value==='yes'">is awesome!</span>
      <br>
      <br>
      Is it awesome?
      <input type="text" #inputElement (keyup)="0">
      <br>
      <br>
      <button [disabled]="inputElement.value!=='yes'" >Only enabled if 'yes' was entered</button>
      <test></test>
  `,
  styleUrls: ['src/css/custom.css'],
  directives: [TestComponent]
  // styles: ['.class{}'] // for simple inline styling


  /*  * means, structured directive and is required for condition, method to change the document
      # means local variable
      parentheses means events, listening and getting sth out of an element
      square brackets [] : change the element, passing sth into the element */
})

// implement is the contract our class

export class ShoppingListComponent implements OnInit {
  public items = [
    {name: "Milk"},
    {name: "Sugar"},
    {name: "Bread"},
  ];
  public selectedItem = {name: ""};

  onItemClicked(item){
    this.selectedItem = item;
  }
  onAddItem(item){
    this.items.push({name: item.value});
  }
  onDeleteItem(){
    this.items.splice(this.items.indexOf(this.selectedItem),1);
  }

  public name: string;

  // Angular2 life-cycle hook
  ngOnInit(): any {
    // return null;
    this.name = "Piper";
  }

}
