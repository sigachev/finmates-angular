import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public primaryXAxis;
  public chartData;
  public symbol = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.symbol = this.route.snapshot.paramMap.get('symbol');

    // Data for chart series
    this.chartData = [
      {month: 'Jan', sales: 35}, {month: 'Feb', sales: 28},
      {month: 'Mar', sales: 34}, {month: 'Apr', sales: 32},
      {month: 'May', sales: 40}, {month: 'Jun', sales: 32},
      {month: 'Jul', sales: 35}, {month: 'Aug', sales: 55},
      {month: 'Sep', sales: 38}, {month: 'Oct', sales: 30},
      {month: 'Nov', sales: 25}, {month: 'Dec', sales: 32}
    ];
    this.primaryXAxis = {
      valueType: 'Category'
    };
  }


}
