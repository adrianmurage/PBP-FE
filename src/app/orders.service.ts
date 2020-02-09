import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ORDERS_URL = 'http://127.0.0.1:5000/api/order';
  private ORDERSMAP_URL = 'http://127.0.0.1:5000/api/order/map';

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get<any>(this.ORDERS_URL);
  }

  getOrdersMap() {
    return this.http.get<any>(this.ORDERSMAP_URL);
  }
}
