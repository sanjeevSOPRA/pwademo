import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { ShoppingListService } from '../services/shopping-list.service';

import { ShoppingItemModel } from '../models/ShoppingItemModel';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  update = false;
  shoppingListItems: ShoppingItemModel[];
  shoppingListItemsObserable: Observable<ShoppingItemModel[]>;

  constructor(private shoppingListService: ShoppingListService) {
    // swUpdate.available.subscribe(event => {
    //   swUpdate.activateUpdate().then(() => {
    //     document.location.reload();
    //   });
    // });
  }

  ngOnInit() {
    this.shoppingListItemsObserable = this.shoppingListService.getShoppingListItems();

    this.shoppingListService.getShoppingListItems().subscribe(item => {
      this.shoppingListItems = item;
      console.log(this.shoppingListItems);
    }, (error) => {
      console.log(error);
    });

  }
}
