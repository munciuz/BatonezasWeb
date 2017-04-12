import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishTypeListComponent } from './dish-type-list.component';
import { DishTypeDetailComponent } from './dish-type-detail.component'
import { DishTypeGuard } from "./dish-type-guard.service";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishTypeListComponent,
        DishTypeDetailComponent,],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'dishTypes', component: DishTypeListComponent },
            { path: 'dishtype/:id', canActivate: [DishTypeGuard], component: DishTypeDetailComponent }
        ])],
    providers: [DishTypeGuard],
    exports: [RouterModule]
})

export class DishTypeRoutingModule {

}