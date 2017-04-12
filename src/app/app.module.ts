import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { DishTypeModule } from "./dish-types/dish-type.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DishTypeModule,
    AppRoutingModule    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
