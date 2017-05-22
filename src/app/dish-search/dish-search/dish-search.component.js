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
// import * as _ from 'lodash';
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
        this.tagFilter = [];
        this.formedFilteredTagName = '';
        this.vegetarianFilter = false;
        this.ratingFilter = null;
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
    };
    DishSearchComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    DishSearchComponent.prototype.placeChanged = function () {
        var _this = this;
        var self = this;
        this._mapsAPILoader.load().then(function () {
            var currentLocation = new google.maps.LatLng(54.9008465, 23.9609625);
            var map = new google.maps.Map(document.createElement('div'));
            var service = new google.maps.places.PlacesService(map);
            var request = {
                location: currentLocation,
                types: ['(cities)'],
                input: _this.cityFilter
            };
            service.textSearch(request, function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    console.log('god data from google ', results);
                }
                else {
                    console.log('got error from google ', status);
                }
            });
        });
    };
    DishSearchComponent.prototype.getRatingDisplayName = function () {
        if (this.ratingFilter > 0) {
            return this.ratingFilter;
        }
        else {
            return 'Reitingas';
        }
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
    };
    DishSearchComponent.prototype.applyPlaceFilter = function () {
    };
    DishSearchComponent.prototype.applyTagFilter = function () {
    };
    DishSearchComponent.prototype.applyRatingFilter = function () {
        if (this.ratingFilter) {
            var rating_1 = this.ratingFilter;
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.ratingAverage >= rating_1;
            });
        }
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