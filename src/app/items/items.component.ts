import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ITEMS_LIST = [];

  constructor(private items: ItemService,
              private authservice: AuthService) {
  }

  ngOnInit() {
    this.items.getItems()
      .subscribe(
        res => this.ITEMS_LIST = res,
        err => console.log(err)
      );
  }

}
