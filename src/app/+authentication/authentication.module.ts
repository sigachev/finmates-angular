import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {TagInputModule} from 'ngx-chips';
import {ProfileRoutingModule} from '../+profile/profile-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TagInputModule,
    ProfileRoutingModule
  ]
})
export class AuthenticationModule { }
