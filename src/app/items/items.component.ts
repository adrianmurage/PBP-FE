import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {AuthService} from '../auth.service';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ITEMS_LIST = [];

  constructor(public items: ItemService,
              public authservice: AuthService,
              public ordersservice: OrdersService) {
  }

  ngOnInit() {
    this.items.getItems()
      .subscribe(
        res => this.ITEMS_LIST = res,
        err => console.log(err)
      );
  }

}
