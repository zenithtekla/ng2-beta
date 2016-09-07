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
      <label for="editItem">Edit Item</label><input type="text" [(ngModel)]="selectedItem.name" id="editItem">
      <button (click)="onDeleteItem()">Delete Item</button>
      <br>
      <label for="addItem">Add Item</label><input type="text" #item id="addItem">
      <button (click) = "onAddItem(item)">Add Item</button>
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
  onAddItem(item){
    this.items.push({name: item.value});
  }
  onDeleteItem(){
    this.items.splice(this.items.indexOf(this.selectedItem),1);
  }
}
