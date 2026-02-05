import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShoppingListItem} from '../Components/ShoppingList/ShoppingListItem/ShoppingListItem';
import {ShoppingList} from '../Components/ShoppingList/ShoppingList';

@Injectable({providedIn: 'any'})
export class ShoppingItemService{

  private userUrl:string;

  constructor(private http:HttpClient) {
    this.userUrl = "http://localhost:8080/shoppingItems"
  }

  public findAll():Observable<ShoppingListItem[]>{
    return this.http.get<ShoppingListItem[]>(this.userUrl);
  }

  public save(newShoppingListItem: ShoppingListItem){
    return this.http.post<ShoppingListItem>(this.userUrl, newShoppingListItem);
  }

  public update(updateShoppingListItem: ShoppingList, id:number){
    return this.http.put<ShoppingListItem>(this.userUrl + "/" + id, updateShoppingListItem);
  }

  public delete(id: number){
    return this.http.delete(this.userUrl + "/" + id);
  }
}
