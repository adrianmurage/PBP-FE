import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ORDERS_LIST = [];

  constructor(private orders: OrdersService,
              private authservice: AuthService) {
  }

  ngOnInit() {
    this.orders.getOrders()
      .subscribe(
        res => this.ORDERS_LIST = res,
        err => console.log(err)
      );
  }

}
