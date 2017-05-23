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
var dish_search_service_1 = require("../dish-search.service");
var _ = require("lodash");
var core_2 = require("angular2-google-maps/core");
var DishSearchComponent = (function () {
    function DishSearchComponent(route, router, dishSearchService, tagService, _mapsAPILoader) {
        this.route = route;
        this.router = router;
        this.dishSearchService = dishSearchService;
        this.tagService = tagService;
        this._mapsAPILoader = _mapsAPILoader;
        this.dishFilter = '';
        this.placeFilter = '';
        this.cityFilter = { name: '', lat: null, lng: null };
        this.tagFilter = null;
        this.vegetarianFilter = false;
        this.ratingFilter = null;
        this.gplace = null;
    }
    DishSearchComponent.prototype.newRow = function (index) {
        if (index % 4 === 0 || index === 0)
            return "row";
        return "";
    };
    DishSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishSearchService.getDishSearchPageModel()
            .subscribe(function (pageModel) {
            _this.dishReviewList = pageModel.dishReviewList;
            _this.filteredDishReviewList = pageModel.dishReviewList;
            _this.tagList = pageModel.tagList;
            _this.dishList = pageModel.dishList;
        });
        this.dishSearchService.getTagList().subscribe(function (tags) {
            _this.tagList = tags;
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
    DishSearchComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    DishSearchComponent.prototype.placeChanged = function () {
        if (this.placeFilter.length == 0) {
            this.gplace = null;
            this.applyFilters();
        }
    };
    DishSearchComponent.prototype.getRatingDisplayName = function () {
        if (this.ratingFilter > 0) {
            return this.ratingFilter;
        }
        else {
            return 'Reitingas';
        }
    };
    DishSearchComponent.prototype.setTag = function (tag) {
        this.tagFilter = tag;
        this.applyFilters();
    };
    DishSearchComponent.prototype.setRating = function (rating) {
        this.ratingFilter = rating;
        this.applyFilters();
    };
    DishSearchComponent.prototype.applyFilters = function () {
        this.filteredDishReviewList = this.dishReviewList;
        this.applyPlaceFilter();
        this.applyTagFilter();
        this.applyRatingFilter();
        this.applyTagFilter();
        this.applyVegetarianFilter();
    };
    DishSearchComponent.prototype.applyPlaceFilter = function () {
        var self = this;
        if (this.gplace) {
            var lat_1 = this.gplace.geometry.location.lat();
            var lng_1 = this.gplace.geometry.location.lng();
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                var distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, lat_1, lng_1);
                return distance < 5;
            });
        }
    };
    DishSearchComponent.prototype.toggleVegetarian = function () {
        this.vegetarianFilter = !this.vegetarianFilter;
        this.applyFilters();
    };
    DishSearchComponent.prototype.getTagDropdownDisplayName = function () {
        return this.tagFilter == null ? "Žymės" : this.tagFilter.name;
    };
    DishSearchComponent.prototype.getVegetarianButtonClass = function (tagId) {
        var buttonClass = this.vegetarianFilter ? 'btn-success' : 'btn-default';
        return buttonClass;
    };
    DishSearchComponent.prototype.applyTagFilter = function () {
        if (this.tagFilter) {
            var self_1 = this;
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                for (var i = 0; i < o.tagsIds.length; i++) {
                    if (self_1.tagFilter.id == o.tagsIds[i]) {
                        return true;
                    }
                }
                return false;
            });
        }
    };
    DishSearchComponent.prototype.applyRatingFilter = function () {
        if (this.ratingFilter) {
            var rating_1 = this.ratingFilter;
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.ratingAverage >= rating_1;
            });
        }
    };
    DishSearchComponent.prototype.applyVegetarianFilter = function () {
        if (this.vegetarianFilter) {
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.isVegetarian;
            });
        }
    };
    DishSearchComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
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
    DishSearchComponent.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return DishSearchComponent;
}());
DishSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish-search.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dish_search_service_1.DishSearchService,
        tag_service_1.TagService,
        core_2.MapsAPILoader])
], DishSearchComponent);
exports.DishSearchComponent = DishSearchComponent;
//# sourceMappingURL=dish-search.component.js.map