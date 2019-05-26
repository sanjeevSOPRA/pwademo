import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingItemModel } from '../models/ShoppingItemModel';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private serviceUrl = 'https://2xykfajo8a.execute-api.us-west-2.amazonaws.com/Prod/v1/ShoppingList';
  constructor(private http: HttpClient) { }

  getShoppingListItems(): Observable<ShoppingItemModel[]> {
    return this.http.get<ShoppingItemModel[]>(this.serviceUrl);
  }
}
