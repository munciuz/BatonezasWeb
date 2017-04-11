import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { DishTypeListComponent }  from './dish-types/dish-type-list.component';
import { DishTypeListFilterPipe } from './dish-types/dish-type-list-filter.pipe';

import { StarComponent } from "./shared/star.component";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    DishTypeListComponent, 
    DishTypeListFilterPipe,
    StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
