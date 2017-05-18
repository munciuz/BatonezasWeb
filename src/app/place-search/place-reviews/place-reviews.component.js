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
var dish_search_service_1 = require("../../dish-search/dish-search.service");
var place_search_service_1 = require("../place-search.service");
var PlaceReviewComponent = (function () {
    function PlaceReviewComponent(route, router, placeSearchService, tagService, dishSearchService) {
        this.route = route;
        this.router = router;
        this.placeSearchService = placeSearchService;
        this.tagService = tagService;
        this.dishSearchService = dishSearchService;
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    PlaceReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.placeId = params['id'];
            _this.placeSearchService.getPlaceReviews(_this.placeId)
                .subscribe(function (placeReviews) {
                console.log('got reviews', placeReviews);
                _this.placeReviews = placeReviews;
            });
            _this.dishSearchService.getPlace(_this.placeId)
                .subscribe(function (place) {
                _this.lat = +place.lat;
                _this.lng = +place.lng;
                _this.title = place.name;
            });
        });
    };
    return PlaceReviewComponent;
}());
PlaceReviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './place-reviews.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        place_search_service_1.PlaceSearchService,
        tag_service_1.TagService,
        dish_search_service_1.DishSearchService])
], PlaceReviewComponent);
exports.PlaceReviewComponent = PlaceReviewComponent;
//# sourceMappingURL=place-reviews.component.js.map