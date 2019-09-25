import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeroAppModule } from './hero-app/hero-app.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MessagesComponent } from './messages/messages.component';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      FilterPipeModule,
      AppRoutingModule,
      HttpClientModule,
      HeroAppModule
   ],
   declarations: [
      AppComponent,
      DashboardComponent,
     /*MessagesComponent,*/
   ],
   bootstrap: [AppComponent]
})

export class AppModule { }
