import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {
  CategoryService,
  ChartModule,
  DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService
} from '@syncfusion/ej2-angular-charts';
import {StockRoutingModule} from './stock-routing.module';


@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    ChartModule,

    StockRoutingModule
  ],
  providers: [
    CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService
  ]
})
export class StockModule {
}
