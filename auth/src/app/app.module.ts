import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthRoutingModule
  ],
  providers: [
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
    DealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
