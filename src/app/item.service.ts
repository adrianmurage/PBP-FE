import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private ITEMS_URL = 'http://127.0.0.1:5000/api/item';

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get<any>(this.ITEMS_URL);
  }
}

