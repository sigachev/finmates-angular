import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

  ])],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
