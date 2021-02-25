import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {StockDataService} from '../../../services/stock-data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit, AfterViewInit {

  symbol: string;
  @ViewChild('hct') public hChart: ElementRef;
  Highcharts: typeof Highcharts = Highcharts;
  chart;
  data = [
    [1293580800000, 46.47],
    [1293667200000, 46.24],
    [1293753600000, 46.08]
  ];
  chartOptions: Highcharts.Options = {

    chart: {
      type: 'line'
    },
    title: {
      text: 'Stock'
    },
    rangeSelector: {
      allButtonsEnabled: true,
      buttons: [{
        type: 'day',
        count: 1,
        text: '1D',
      }, {
        type: 'week',
        count: 1,
        text: '1w'
      },
        {
          type: 'month',
          count: 1,
          text: '1m'
        },
        {
          type: 'month',
          count: 3,
          text: '3m'
        },
        {
          type: 'all',
          count: 1,
          text: 'All'
        }],
      selected: 3,
      inputEnabled: false
    },
    series: [{
      tooltip: {
        valueDecimals: 2
      },
      name: '',
      data: [],
      type: undefined,
    }]

  };


  data1;
  isLoadingResults = true;
  errorMessage;

  /*
    constructor(route: ActivatedRoute,
                stockDataService: StockDataService) {
        this.symbol = route.snapshot.paramMap.get('symbol');
        stockDataService.getHistoricalQuotes(this.symbol).subscribe(
          d => {
            d.forEach((value: number, key: number) => {
              const newQuote = {
                time: key,
                price: value
              };
              this.data1.push(newQuote);
          }, err => {
            this.errorMessage = 'Username or password is incorrect';
          });
    };
  */

  constructor(public route: ActivatedRoute,
              public stockDataService: StockDataService) {

  }


  /*  highcharts = Highcharts;*/

  /*
    chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Site Visitor'
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1D'
        }, {
          type: 'week',
          count: 1,
          text: '1w'
        },
          {
            type: 'month',
            count: 1,
            text: '1m'
          },
          {
            type: 'month',
            count: 3,
            text: '3m'
          },
          {
            type: 'all',
            count: 1,
            text: 'All'
          }],
        selected: 3,
        inputEnabled: false
      },
      series: [{
        tooltip: {
          valueDecimals: 2
        },
        name: 'AAPL',
        data: this.data,
        type: undefined,
      }]
    };
  */


  ngOnInit(): void {

    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.stockDataService.getHistoricalQuotes(this.symbol).subscribe(
      res => {
        this.chartOptions.series = [{
          tooltip: {
            valueDecimals: 2
          },
          name: this.symbol.toUpperCase(),
          data: res,
          type: undefined,
        }];
        this.data1 = res;
        this.chart = Highcharts.stockChart('stock-chart', this.chartOptions);
        // console.log(this.data1);
        this.isLoadingResults = false;
      }, err => {
        this.errorMessage = 'Username or password is incorrect';
      });


    /*    const jsonObject = {1612155600000: 268.100006, 1604203200000: 276.970001, 1585713600000: 204.710007};
        const map = new Map<number, number>();
        map.forEach((value: number, key: number) => {
          this.newName = {
            time: key,
            price: value
          };
          this.data1.push(this.newName);

        });
        console.log('map:' + map.size);
    */

    /*  this.chart = Highcharts.stockChart('stock-chart', this.options1);*/

    console.log('DATA1:' + JSON.stringify(this.data1));
    /*this.chart.reflow();*/
  }

  ngAfterViewInit(): void {
    /* setTimeout (() => {
       console.log('Hello from set Timeout');
     }, 3000);*/
    /* this.chart.reflow();*/
    console.log('Hello from functionNr1 after setTimeout in code');
  }

  Reflow() {
    this.chart.reflow();
  }

}
