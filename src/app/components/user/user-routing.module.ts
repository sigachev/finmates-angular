import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {AccountSettingsComponent} from './account-settings/account-settings.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'account-settings', component: AccountSettingsComponent},

  ])],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
