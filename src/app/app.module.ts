import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppService} from './app.service';
import {LayoutModule} from './layout/layout.module';

// *******************************************************************************
// Pages
import {HomeComponent} from './home/home.component';
import {Page2Component} from './page-2/page-2.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './guards/auth.guard';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ThemeSettingsService} from '../vendor/libs/theme-settings/theme-settings.service';
import {AuthenticationService} from './services/authentication.service';
import {ContactsComponent} from './components/public-pages/contacts/contacts.component';
import {ToastrModule} from 'ngx-toastr';
import {PipesModule} from './pipes/pipes.module';

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    // Pages
    HomeComponent,
    Page2Component,
    ContactsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      newestOnTop: true,
    }),

    PerfectScrollbarModule,
    // App
    AppRoutingModule,
    LayoutModule,
    PipesModule

  ],

  providers: [
    Title,
    AppService,
    AuthGuard,
    ThemeSettingsService,
    AuthenticationService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
