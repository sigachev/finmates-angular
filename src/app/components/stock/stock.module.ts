import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';


import {StockRoutingModule} from './stock-routing.module';

import {StockDataService} from '../../services/stock-data.service';
import {IgxFinancialChartModule} from 'igniteui-angular-charts';


@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    IgxFinancialChartModule
  ],
  providers: [
    StockDataService
  ]
})
export class StockModule {
}
