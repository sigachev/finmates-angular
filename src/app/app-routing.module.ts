import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import {Layout2Component} from './layout/layout-2/layout-2.component';
import {Layout1FlexComponent} from './layout/layout-1-flex/layout-1-flex.component';
import {Layout2FlexComponent} from './layout/layout-2-flex/layout-2-flex.component';
import {LayoutSidenavComponent} from './layout/layout-sidenav/layout-sidenav.component';
import {LayoutWithoutNavbarComponent} from './layout/layout-without-navbar/layout-without-navbar.component';
import {LayoutBlankComponent} from './layout/layout-blank/layout-blank.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: Layout2Component, pathMatch: 'full', children: [
      { path: '', component: HomeComponent },
    ]},


  { path: 'page-2', component: Layout2Component, children: [
    { path: '', component: Page2Component },
  ]},

  // Authentication
  { path: '', component: LayoutBlankComponent, loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule) },


  // Pages
  { path: 'user', component: Layout2Component, loadChildren: () => import('./+profile/profile.module').then(m => m.ProfileModule) },





  // 404 Not Found page
  { path: '**', component: NotFoundComponent }

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
