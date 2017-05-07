import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish/dish.component'
import { DishService } from "./dish.service";
import { Apis } from "../shared/apis";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishListComponent,
        DishComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dishes', component: DishListComponent },
            { path: 'dish/:id', component: DishComponent }
        ])],
    providers: [ DishService, Apis]
})

export class DishModule {

}