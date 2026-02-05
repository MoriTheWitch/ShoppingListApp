import { Component } from '@angular/core';
import {ShoppingListItem} from '../../ShoppingListItem/ShoppingListItem';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingItemService} from '../../../../Service/ShoppingItemService';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-shoppingitem-form',
  templateUrl: './shoppingitem-form.html',
  styleUrl: './shoppingitem-form.css',
  imports: [
    FormsModule
  ]
})
export class ShoppingitemForm {
  shoppingItem: ShoppingListItem;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private service:ShoppingItemService
  ) {
    this.shoppingItem = new ShoppingListItem();
  }

  onSubmit(){
    this.service.save(this.shoppingItem).subscribe(result => this.gotoShoppingList())
  }

  gotoShoppingList(){
    this.router.navigate(['/shoppingItems']);
  }
}
