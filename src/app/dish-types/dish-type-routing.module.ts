import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishTypeListComponent } from './dish-type-list/dish-type-list.component';
import { DishTypeDetailComponent } from './dish-type-list/dish-type-detail.component'
import { DishTypeComponent } from './dish-type/dish-type.component'
import { DishTypeGuard } from "./dish-type-list/dish-type-guard.service";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishTypeListComponent,
        DishTypeDetailComponent,
        DishTypeComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dishTypes', component: DishTypeListComponent },
            { path: 'dishtype/:id', canActivate: [DishTypeGuard], component: DishTypeComponent }
        ])],
    providers: [DishTypeGuard],
    exports: [RouterModule]
})

export class DishTypeRoutingModule {

}