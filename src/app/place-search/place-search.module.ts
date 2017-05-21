import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PlaceSearchComponent } from './place-search/place-search.component';
import { PlaceReviewComponent } from './place-reviews/place-reviews.component';
import { PlaceSearchService } from "./place-search.service";
import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";
import { AuthenticationService } from "../shared/authentication.service";
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
// import { WorkHoursComponent } from "../shared/components/work-hours.component";
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        PlaceSearchComponent,
        PlaceReviewComponent,
        // WorkHoursComponent
    ],
    imports: [
        SharedModule,
        // MultiselectDropdownModule,
        AgmCoreModule.forRoot({ 
            apiKey: 'AIzaSyA_DFifZJTwo1I5sFtQWC4dGrb7Zdl7TaI',
            libraries: ['places'], }),
        RouterModule.forChild([
            { path: 'placeSearch', component: PlaceSearchComponent },
             { path: 'placeReviews/:id', component: PlaceReviewComponent }
        ])],
    providers: [ PlaceSearchService, Apis, HttpClient, AuthenticationService]
})

export class PlaceSearchModule {

}