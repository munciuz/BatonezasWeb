"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
var tag_service_1 = require("../../tags/tag.service");
var place_search_service_1 = require("../place-search.service");
// import * as _ from 'lodash';
var PlaceSearchComponent = (function () {
    function PlaceSearchComponent(route, router, placeSearchService, tagService) {
        this.route = route;
        this.router = router;
        this.placeSearchService = placeSearchService;
        this.tagService = tagService;
        this.dishFilter = { dishName: '', dishId: null };
        this.cityFilter = { name: '', lat: null, lng: null };
        this.tagFilter = [];
        this.formedFilteredTagName = '';
        this.vegetarianFilter = false;
        this.ratingFilter = null;
    }
    PlaceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeSearchService.getPlaceReviewPageModel()
            .subscribe(function (pageModel) {
            _this.placeReviewList = pageModel.groupedPlacesList;
            console.log(pageModel);
        });
    };
    PlaceSearchComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    return PlaceSearchComponent;
}());
PlaceSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './place-search.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        place_search_service_1.PlaceSearchService,
        tag_service_1.TagService])
], PlaceSearchComponent);
exports.PlaceSearchComponent = PlaceSearchComponent;
//# sourceMappingURL=place-search.component.js.map