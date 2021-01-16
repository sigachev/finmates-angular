import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandFilterPipe} from './brand-filter.pipe';
import {TruncateTextPipe} from './truncate-text.pipe';
import {UomNameFormatPipe} from './uom-name-format.pipe';


@NgModule({
  declarations: [
    BrandFilterPipe,
    TruncateTextPipe,
    UomNameFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
