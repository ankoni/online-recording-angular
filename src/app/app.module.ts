import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import routes from 'src/app/routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCommonModule} from '@angular/material/core';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    MatCommonModule,
    RouterOutlet,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
