import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishTypeListComponent } from './dish-type-list/dish-type-list.component';
import { DishTypeListFilterPipe } from './dish-type-list/dish-type-list-filter.pipe';
import { DishTypeComponent } from './dish-type/dish-type.component'
import { DishTypeService } from "./dish-type.service";
import { DishTypeGuard } from "./dish-type-list/dish-type-guard.service";
import { Apis } from "../shared/apis";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishTypeListComponent,
        DishTypeComponent,
        DishTypeListFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dishTypes', component: DishTypeListComponent },
            { path: 'dishtype/:id', canActivate: [DishTypeGuard], component: DishTypeComponent }
        ])],
    providers: [ DishTypeService, DishTypeGuard, Apis]
})

export class DishTypeModule {

}