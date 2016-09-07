import {Component} from "angular2/core";

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
      <input type="text" [(ngModel)]="selectedItem.name">
  `
  /*  * means, structured directive and is required for condition, method to change the document
      # means local variable
      parentheses means events   */
})
export class ShoppingListComponent {
  public items = [
    {name: "Milk"},
    {name: "Sugar"},
    {name: "Bread"},
  ];
  public selectedItem = {name: ""};

  onItemClicked(item){
    this.selectedItem = item;
  }
}
