import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PublicGuard} from '../../guards/public.guard';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    {path: 'login', canActivate: [PublicGuard], component: LoginComponent},
    {path: 'register', canActivate: [PublicGuard], component: RegisterComponent},

  ])],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
