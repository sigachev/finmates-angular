import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {StockRoutingModule} from './stock-routing.module';
import {StockDataService} from '../../services/stock-data.service';
import {StockChartComponent} from './stock-chart/stock-chart.component';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  declarations: [StockComponent, StockChartComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    ChartModule
  ],
  providers: [
    StockDataService,
    {provide: HIGHCHARTS_MODULES, useFactory: highchartsModules}
  ]
})
export class StockModule {
}
