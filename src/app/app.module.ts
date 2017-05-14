import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { DishTypeModule } from "./dish-types/dish-type.module";
import { TagModule } from "./tags/tag.module";
import { DishModule } from "./dishes/dish.module";
import { UserModule } from "./users/user.module";
import { DishSearchModule } from "./dish-search/dish-search.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DishTypeModule,
    TagModule,
    DishModule,
    UserModule,
    DishSearchModule,
    AppRoutingModule    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
