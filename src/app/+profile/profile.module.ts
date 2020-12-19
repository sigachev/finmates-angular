import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {TagInputModule} from 'ngx-chips';


@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TagInputModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
