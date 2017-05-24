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
var core_2 = require("angular2-google-maps/core");
var _ = require("lodash");
var PlaceSearchComponent = (function () {
    function PlaceSearchComponent(route, router, placeSearchService, tagService, _mapsAPILoader) {
        this.route = route;
        this.router = router;
        this.placeSearchService = placeSearchService;
        this.tagService = tagService;
        this._mapsAPILoader = _mapsAPILoader;
        this.cityFilter = { name: '', lat: null, lng: null };
        this.placeFilter = '';
        this.placeTypeFilter = null;
        this.ratingFilter = null;
        this.gplace = null;
    }
    PlaceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeSearchService.getPlaceReviewPageModel()
            .subscribe(function (pageModel) {
            _this.placeReviewList = pageModel.groupedPlacesList;
            _this.filteredPlaceReviewList = pageModel.groupedPlacesList;
            console.log(pageModel);
        });
        this._mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("placeAutocomplete"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this.gplace = autocomplete.getPlace();
                console.log(_this.gplace);
                _this.applyFilters();
            });
        });
    };
    PlaceSearchComponent.prototype.placeChanged = function () {
        if (this.placeFilter.length == 0) {
            this.gplace = null;
            this.applyFilters();
        }
    };
    PlaceSearchComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    PlaceSearchComponent.prototype.getPlaceTypeName = function () {
        console.log('place type id is ', this.placeTypeFilter);
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
        this.applyFilters();
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
        // if (this.filteredPlaceReviewList.length > 40){
        //     this.filteredPlaceReviewList = this.filteredPlaceReviewList.slice(0, 40);
        // }
    };
    PlaceSearchComponent.prototype.applyCityFilter = function () {
        var self = this;
        if (this.gplace) {
            var lat_1 = this.gplace.geometry.location.lat();
            var lng_1 = this.gplace.geometry.location.lng();
            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                var distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, lat_1, lng_1);
                return distance < 5;
            });
        }
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
    PlaceSearchComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    PlaceSearchComponent.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
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
        tag_service_1.TagService,
        core_2.MapsAPILoader])
], PlaceSearchComponent);
exports.PlaceSearchComponent = PlaceSearchComponent;
//# sourceMappingURL=place-search.component.js.map