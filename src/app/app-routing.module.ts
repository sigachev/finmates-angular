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

// *******************************************************************************
// Routes

const routes: Routes = [

  {
    path: '', component: Layout2Component, pathMatch: 'full', children: [
      {path: '', component: HomeComponent},
    ]
  },


  {
    path: 'page-2', component: Layout2Component, children: [
      {path: '', component: Page2Component},
    ]
  },

  // Authentication
  {
    path: '',
    component: LayoutBlankComponent,
    loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
  },


  // Pages
  {path: '', component: Layout2Component, loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},


  // 404 Not Found page
  {path: '**', component: NotFoundComponent}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
