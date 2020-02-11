import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public ORDERS_URL = 'https://pbp-api-v0.herokuapp.com/api/order';
  public ORDERSMAP_URL = 'https://pbp-api-v0.herokuapp.com/api/order/map';

  constructor(public http: HttpClient,
              public router: Router) {
  }

  getOrders() {
    return this.http.get<any>(this.ORDERS_URL);
  }

  getOrdersMap() {
    return this.http.get<any>(this.ORDERSMAP_URL);
  }

  orderItem(item) {
    this.http.post<any>(this.ORDERS_URL, item);
    this.router.navigate(['/orders']);
  }
}
