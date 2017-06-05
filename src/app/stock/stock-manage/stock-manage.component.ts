import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Stock[];

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock('IBM', 'IBM inc.', 139.87, 2.5, 'This is a big company', ['IT', 'Software', 'AI']),
      new Stock('GOG', 'Google', 839.87, 3.5, 'This is a big company', ['Software', 'AI']),
      new Stock('APL', 'Apple', 149.87, 3.5, 'This is a big company', ['IT', 'Hardware', 'Software', 'AI']),
      new Stock('FB', 'Facebook', 139.87, 3.5, 'This is a big company', ['IT', 'Software', 'AI']),
      new Stock('TSL', 'Tesla', 139.87, 4.5, 'This is a big company', ['IT', 'Software', 'AI']),
      new Stock('NVD', 'Nvidia', 139.87, 4.5, 'This is a big company', ['IT', 'Hardware', 'AI']),
    ];
  }

}

export class Stock {
  constructor(public id: string,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: string[]) {

  }
}
