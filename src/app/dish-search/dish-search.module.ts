import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DishSearchComponent } from './dish-search/dish-search.component';
import { DishReviewComponent } from './dish-reviews/dish-reviews.component';
import { DishSearchService } from "./dish-search.service";
import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";
import { AuthenticationService } from "../shared/authentication.service";
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { DishSearchFilterPipe } from "./dish-search/dish-search.pipe";
// import { WorkHoursComponent } from "../shared/components/work-hours.component";
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

// import { CeiboShare } from 'ng2-social-share';

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DishSearchComponent,
        DishReviewComponent,
        DishSearchFilterPipe
        // WorkHoursComponent
    ],
    imports: [
        SharedModule,
        // MultiselectDropdownModule,
        AgmCoreModule.forRoot({ 
            apiKey: 'AIzaSyA_DFifZJTwo1I5sFtQWC4dGrb7Zdl7TaI', 
            libraries: ['places'] }),
        RouterModule.forChild([
            { path: 'dishSearch', component: DishSearchComponent },
             { path: 'dishReviews/:dishId/:placeId', component: DishReviewComponent }
        ])],
    providers: [ DishSearchService, Apis, HttpClient, AuthenticationService]
})

export class DishSearchModule {

}