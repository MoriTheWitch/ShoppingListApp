import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingList} from './Components/ShoppingList/ShoppingList';
import {ShoppingitemForm} from './Components/ShoppingList/ShoppingItemForm/shoppingitem-form/shoppingitem-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingList, ShoppingitemForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');
}
