import {Component, OnInit} from '@angular/core';
import {ShoppingListItem} from './ShoppingListItem/ShoppingListItem';
import {ShoppingItemService} from '../../Service/ShoppingItemService';
import {ShoppingitemForm} from './ShoppingItemForm/shoppingitem-form/shoppingitem-form';

@Component({
  selector: 'shoppinglist',
  imports: [
    ShoppingitemForm
  ],
  templateUrl: './ShoppingList.html',
  styleUrl: './ShoppingList.css'
})


export class ShoppingList implements OnInit{
  // @ts-ignore
  items: ShoppingListItem[];
  constructor(private shoppingItemService:ShoppingItemService) {

  }


  ngOnInit() {
    this.shoppingItemService.findAll().subscribe(data =>{
      this.items = data
    })

  }

}
