import {RouterModule, Routes} from '@angular/router';
import {ShoppingitemForm} from './Components/ShoppingList/ShoppingItemForm/shoppingitem-form/shoppingitem-form';
import {ShoppingList} from './Components/ShoppingList/ShoppingList';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'users', component: ShoppingList },
  { path: 'adduser', component: ShoppingitemForm }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
