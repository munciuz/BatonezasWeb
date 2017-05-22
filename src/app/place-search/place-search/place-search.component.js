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
var _ = require("lodash");
var PlaceSearchComponent = (function () {
    function PlaceSearchComponent(route, router, placeSearchService, tagService) {
        this.route = route;
        this.router = router;
        this.placeSearchService = placeSearchService;
        this.tagService = tagService;
        this.cityFilter = { name: '', lat: null, lng: null };
        this.placeTypeFilter = null;
        this.ratingFilter = null;
    }
    PlaceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeSearchService.getPlaceReviewPageModel()
            .subscribe(function (pageModel) {
            _this.placeReviewList = pageModel.groupedPlacesList;
            _this.filteredPlaceReviewList = pageModel.groupedPlacesList;
            console.log(pageModel);
        });
    };
    PlaceSearchComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    PlaceSearchComponent.prototype.getPlaceTypeName = function () {
        switch (this.placeTypeFilter) {
            case 1: return 'Restoranas';
            case 2: return 'Kavinė';
            case 3: return 'Baras';
            case 4: return 'Kepyklėlė';
            case 5: return 'Į namus';
            case 6: return 'Išsinešimui';
            case 7: return 'Naktinis klubas';
            default: return 'Tipas';
        }
    };
    PlaceSearchComponent.prototype.getRatingDisplayName = function () {
        if (this.ratingFilter > 0) {
            return this.ratingFilter;
        }
        else {
            return 'Reitingas';
        }
    };
    PlaceSearchComponent.prototype.setPlaceType = function (placeTypeId) {
        this.placeTypeFilter = placeTypeId;
    };
    PlaceSearchComponent.prototype.setRating = function (rating) {
        this.ratingFilter = rating;
        this.applyFilters();
    };
    PlaceSearchComponent.prototype.applyFilters = function () {
        this.filteredPlaceReviewList = this.placeReviewList;
        this.applyCityFilter();
        this.applyTypeFilter();
        this.applyRatingFilter();
    };
    PlaceSearchComponent.prototype.applyCityFilter = function () {
        var self = this;
        // if (this.cityFilter && this.cityFilter.lat && this.cityFilter.lng) {
        //     this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
        //         let distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, self.cityFilter.lat, self.cityFilter.lng);
        //         console.log(o.placeName + ' ' + self.cityFilter.name + ' ' + distance);
        //         return distance < 5;
        //     });
        // }
    };
    PlaceSearchComponent.prototype.applyTypeFilter = function () {
        var self = this;
        if (this.placeTypeFilter) {
            var typeId_1 = this.placeTypeFilter;
            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                for (var i = 0; i < o.placeTypeIds.length; i++) {
                    console.log(o.placeTypeIds[i] + ' == ' + typeId_1);
                    if (o.placeTypeIds[i] == typeId_1) {
                        return true;
                    }
                }
                return false;
            });
        }
    };
    PlaceSearchComponent.prototype.applyRatingFilter = function () {
        if (this.ratingFilter) {
            var rating_1 = this.ratingFilter;
            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                return o.ratingAverage >= rating_1;
            });
        }
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