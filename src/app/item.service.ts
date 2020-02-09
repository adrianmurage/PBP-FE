import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public ITEMS_URL = 'https://pbp-api-v0.herokuapp.com/api/item';

  constructor(public http: HttpClient) {
  }

  getItems() {
    return this.http.get<any>(this.ITEMS_URL);
  }
}

