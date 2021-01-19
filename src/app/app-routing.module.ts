import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

// *******************************************************************************
// Layouts
// *******************************************************************************
// Pages
import {HomeComponent} from './home/home.component';
import {Page2Component} from './page-2/page-2.component';
import {Layout2Component} from './layout/layout-2/layout-2.component';
import {LayoutBlankComponent} from './layout/layout-blank/layout-blank.component';
import {LayoutWithoutSidenavComponent} from './layout/layout-without-sidenav/layout-without-sidenav.component';
import {PublicLayoutComponent} from './layout/public-layout/public-layout.component';
import {AuthGuard} from './guards/auth.guard';
import {Role} from './models/role';
import {PublicGuard} from './guards/public.guard';
import {ContactsComponent} from './components/public-pages/contacts/contacts.component';
import {ChartComponent} from './components/chart/chart.component';

// *******************************************************************************
// Routes

// Layout2Component - Layout for logged in user

const routes: Routes = [

  {
    path: '', component: PublicLayoutComponent,
    pathMatch: 'full',
    canActivate: [PublicGuard],
    children: [
      {path: '', component: HomeComponent},
    ]
  },

  {
    path: 'contacts', component: PublicLayoutComponent,
    pathMatch: 'full',
    /*canActivate: [PublicGuard],*/
    children: [
      {path: '', component: ContactsComponent},
    ]
  },

  {
    path: '',
    component: Layout2Component,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN], breadcrumb: 'Admin', title: 'Home'},
    loadChildren: () => import('./components/dashboard/dashboards.module').then(m => m.DashboardsModule)
  },

  {
    path: 'stock',
    component: Layout2Component,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN], breadcrumb: 'Admin', title: 'Home'},
    loadChildren: () => import('./components/stock/stock.module').then(m => m.StockModule)
  },


  {
    path: 'page-2', component: LayoutWithoutSidenavComponent, children: [
      {path: '', component: Page2Component},
    ]
  },

  {
    path: 'chart', component: LayoutWithoutSidenavComponent, children: [
      {path: '', component: ChartComponent},
    ]
  },

  /*  {
      path: 'stock', component: LayoutWithoutSidenavComponent, children: [
        {path: '', component: StockComponent},
      ]
    },*/

  // Authentication
  {
    path: '',
    component: LayoutBlankComponent,
    loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
  },


  // Pages
  {
    path: '',
    component: Layout2Component,
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },


  // 404 Not Found page
  {path: '**', component: NotFoundComponent}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  /*  authServ: AuthenticationService;
    loggedIn = false;


    constructor(private authService: AuthenticationService) {

      if (this.authService.currentUserValue) {
       this.loggedIn = true;
    }*/
}
