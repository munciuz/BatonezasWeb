"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dish_search_component_1 = require("./dish-search/dish-search.component");
var dish_reviews_component_1 = require("./dish-reviews/dish-reviews.component");
var dish_search_service_1 = require("./dish-search.service");
var apis_1 = require("../shared/apis");
var httpClient_1 = require("../shared/httpClient");
var authentication_service_1 = require("../shared/authentication.service");
var core_module_1 = require("angular2-google-maps/core/core-module");
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
var shared_module_1 = require("../shared/shared.module");
var DishSearchModule = (function () {
    function DishSearchModule() {
    }
    return DishSearchModule;
}());
DishSearchModule = __decorate([
    core_1.NgModule({
        declarations: [
            dish_search_component_1.DishSearchComponent,
            dish_reviews_component_1.DishReviewComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            // MultiselectDropdownModule,
            core_module_1.AgmCoreModule.forRoot({ apiKey: 'AIzaSyA_DFifZJTwo1I5sFtQWC4dGrb7Zdl7TaI' }),
            router_1.RouterModule.forChild([
                { path: 'dishSearch', component: dish_search_component_1.DishSearchComponent },
                { path: 'dishReviews/:dishId/:placeId', component: dish_reviews_component_1.DishReviewComponent }
            ])
        ],
        providers: [dish_search_service_1.DishSearchService, apis_1.Apis, httpClient_1.HttpClient, authentication_service_1.AuthenticationService]
    })
], DishSearchModule);
exports.DishSearchModule = DishSearchModule;
//# sourceMappingURL=dish-search.module.js.map