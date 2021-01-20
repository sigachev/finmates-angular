import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockDataService} from '../../services/stock-data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public symbol = '';
  public title: string;
  public price = 0;

  public stocksData: any;
  public calloutsData: any[];


  constructor(private route: ActivatedRoute,
              private dataService: StockDataService) {
    this.stocksData = [
      this.dataService.getTsla(),
      this.dataService.getGoog()
    ];
    this.calloutsData = this.getCallouts(this.stocksData);
  }


  ngOnInit(): void {
    this.title = 'Sales Analysis';

    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.dataService.getPrice(this.symbol).subscribe((data: any[]) => {
      console.log(data);
      this.price = +data;
    });
  }


  public getCallouts(stocks: any[]): any[] {
    const callouts: any[] = [];
    for (const stock of stocks) {
      const intervalSplit = Math.floor(Math.random() * (300 - 280)) + 280;
      const intervalDiv = Math.floor(Math.random() * (400 - 360)) + 360;
      const calloutMin = new CalloutDataItem({label: 'MIN'});
      const calloutMax = new CalloutDataItem({label: 'MAX'});
      // initalizing values for min/max callouts
      calloutMin.value = Number.MAX_VALUE;
      calloutMax.value = Number.MIN_VALUE;
      let idx = 0;

      for (const item of stock) {
        // finding item with min/max price
        if (calloutMin.value > item.close) {
          calloutMin.value = item.close;
          calloutMin.index = idx;
        }
        if (calloutMax.value < item.close) {
          calloutMax.value = item.close;
          calloutMax.index = idx;
        }
        const offset = idx + 10;
        const calloutEvent = new CalloutDataItem({index: idx});
        // creating SPLIT/DIVIDENT events at specific intervals
        if (offset % intervalSplit === 5) {
          calloutEvent.value = item.close;
          calloutEvent.label = 'SPLIT';
          callouts.push(calloutEvent);
        } else if (offset % intervalDiv === 5) {
          calloutEvent.value = item.close;
          calloutEvent.label = 'DIV';
          callouts.push(calloutEvent);
        }
        idx++;
      }
      callouts.push(calloutMin);
      callouts.push(calloutMax);
    }
    return callouts;
  }
}

class CalloutDataItem {
  public label: string;
  public index: number;
  public value: number;

  public constructor(init?: Partial<CalloutDataItem>) {
    Object.assign(this, init);
  }


}
