import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {TagInputModule} from 'ngx-chips';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TagInputModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
