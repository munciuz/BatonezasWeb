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
var tag_service_1 = require("../../tags/tag.service");
var dish_search_service_1 = require("../dish-search.service");
var core_2 = require("angular2-google-maps/core");
var DishReviewComponent = (function () {
    function DishReviewComponent(route, router, dishSearchService, tagService, _mapsAPILoader) {
        this.route = route;
        this.router = router;
        this.dishSearchService = dishSearchService;
        this.tagService = tagService;
        this._mapsAPILoader = _mapsAPILoader;
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.gdetails = {};
        this.dishName = '';
    }
    DishReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.dishId = params['dishId'];
            _this.placeId = params['placeId'];
            _this.loadData();
        });
    };
    DishReviewComponent.prototype.loadData = function () {
        var _this = this;
        this.dishSearchService.getDishReviews(this.dishId, this.placeId)
            .subscribe(function (dishReviews) {
            _this.dishReviews = dishReviews;
            _this.dishName = dishReviews[0].name;
        });
        this.dishSearchService.getPlace(this.placeId)
            .subscribe(function (place) {
            _this.lat = +place.lat;
            _this.lng = +place.lng;
            _this.title = place.name;
            console.log(place.gId);
            _this.getGooglePlaceDetails(place.gId);
        });
    };
    DishReviewComponent.prototype.getGooglePlaceDetails = function (gid) {
        var _this = this;
        this._mapsAPILoader.load().then(function () {
            console.log(google);
            var map = new google.maps.Map(document.createElement('div'));
            var placesService = new google.maps.places.PlacesService(map);
            /* Get place details */
            placesService.getDetails({
                placeId: gid
            }, function (placeResult, status) {
                if (status === 'OK') {
                    _this.gdetails = placeResult;
                    console.log('got result ', placeResult);
                }
                else {
                    console.log('got some errors: ', status);
                }
            });
            // Place your code in here...
        });
    };
    DishReviewComponent.prototype.formatWebsite = function (website) {
        if (website && website.length > 0) {
            website = website.replace('http://', '');
            website = website.replace('https://', '');
            website = website.replace(/\/$/, '');
        }
        return website;
    };
    DishReviewComponent.prototype.removeDishReview = function (id) {
        var _this = this;
        console.log(id);
        this.dishSearchService.deleteDishReview(id)
            .subscribe(function (result) {
            _this.loadData();
        });
    };
    return DishReviewComponent;
}());
DishReviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish-reviews.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dish_search_service_1.DishSearchService,
        tag_service_1.TagService,
        core_2.MapsAPILoader])
], DishReviewComponent);
exports.DishReviewComponent = DishReviewComponent;
//# sourceMappingURL=dish-reviews.component.js.map