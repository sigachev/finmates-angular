import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {StockRoutingModule} from './stock-routing.module';
import {StockDataService} from '../../services/stock-data.service';
import {StockChartComponent} from './stock-chart/stock-chart.component';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import {ChartModule} from 'angular-highcharts';
import {HighchartsChartModule} from 'highcharts-angular';


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  declarations: [
    StockComponent,
    StockChartComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ChartModule,
    HighchartsChartModule,
  ],
  providers: [
    StockDataService,

  ]
})
export class StockModule {
}
