import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { DishTypeModule } from "./dish-types/dish-type.module";
import { TagModule } from "./tags/tag.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DishTypeModule,
    TagModule,
    AppRoutingModule    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
