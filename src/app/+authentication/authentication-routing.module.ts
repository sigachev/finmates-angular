import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccountSettingsComponent} from '../+profile/account-settings/account-settings.component';
import {LoginComponent} from './login/login.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent },

  ])],
})
export class AuthenticationRoutingModule { }
