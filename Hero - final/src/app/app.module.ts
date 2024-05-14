import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxTextAreaModule } from 'devextreme-angular';
import { Button1Component } from './button1/button1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DevExtremeModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxTemplateModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DevExtremeModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxListModule,
    DxTemplateModule,
    RouterModule,
    
  

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    Button1Component,
    NavbarComponent
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }