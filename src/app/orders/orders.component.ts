import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  styles: ['agm-map { height: 300px; /* height is required */ }']
})
export class OrdersComponent implements OnInit {
  ORDERS_LIST = [];
  selectedMarker;
  markers = [];

  constructor(private orders: OrdersService,
              private authservice: AuthService) {
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  ngOnInit() {
    this.orders.getOrders()
      .subscribe(
        res => this.ORDERS_LIST = res,
        err => console.log(err)
      );
    this.orders.getOrdersMap()
      .subscribe(
        res => this.markers = res.locations,
        err => console.log(err)
      );
  }

}
