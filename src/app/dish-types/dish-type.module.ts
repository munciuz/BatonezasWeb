import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishTypeListComponent } from './dish-type-list.component';
import { DishTypeListFilterPipe } from './dish-type-list-filter.pipe';
import { DishTypeDetailComponent } from './dish-type-detail.component'
import { DishTypeService } from "./dish-type.service";
import { DishTypeGuard } from "./dish-type-guard.service";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishTypeListComponent,
        DishTypeDetailComponent,
        DishTypeListFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dishTypes', component: DishTypeListComponent },
            { path: 'dishtype/:id', canActivate: [DishTypeGuard], component: DishTypeDetailComponent }
        ])],
    providers: [ DishTypeService, DishTypeGuard]
})

export class DishTypeModule {

}