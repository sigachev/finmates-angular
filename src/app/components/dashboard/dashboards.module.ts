import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {DashboardsRoutingModule} from './dashboards-routing.module';


// *******************************************************************************
// Libs
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ChartsModule as Ng2ChartsModule} from 'ng2-charts';
import {DashboardComponent} from './dashboard.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    Ng2ChartsModule,
    PerfectScrollbarModule,

    DashboardsRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardsModule {
}
