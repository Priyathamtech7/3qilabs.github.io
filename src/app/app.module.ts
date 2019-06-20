import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {appRoutes} from './route';
import { EventEmit } from "./EventHandler";
import { Broadcaster } from "./EventHandlerBroadCaster";import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [EventEmit, Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
