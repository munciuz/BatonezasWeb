import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { DishTypeModule } from "./dish-types/dish-type.module";
import { TagModule } from "./tags/tag.module";
import { DishModule } from "./dishes/dish.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DishTypeModule,
    TagModule,
    DishModule,
    AppRoutingModule    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
