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

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    // Pages
    HomeComponent,
    Page2Component
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,


    PerfectScrollbarModule,
    // App
    AppRoutingModule,
    LayoutModule,

  ],

  providers: [
    Title,
    AppService,
    AuthGuard,
    ThemeSettingsService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
