import {Component, OnInit} from '@angular/core';
import {ShoppingListItem} from './ShoppingListItem/ShoppingListItem';
import {ShoppingItemService} from '../../Service/ShoppingItemService';

@Component({
  selector: 'shoppinglist',
  imports: [],
  templateUrl: './ShoppingList.html',
  styleUrl: './ShoppingList.css'
})


export class ShoppingList implements OnInit{
  items: ShoppingListItem[] = [];
  constructor(private shoppingItemService:ShoppingItemService) {
  }

  ngOnInit() {
    this.shoppingItemService.findAll().subscribe(data =>{
      this.items = data
    })
  }

}
