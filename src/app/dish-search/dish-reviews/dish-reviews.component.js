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
var DishReviewComponent = (function () {
    function DishReviewComponent(route, router, dishSearchService, tagService) {
        this.route = route;
        this.router = router;
        this.dishSearchService = dishSearchService;
        this.tagService = tagService;
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.dishName = '';
    }
    DishReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.dishId = params['dishId'];
            _this.placeId = params['placeId'];
            _this.dishSearchService.getDishReviews(_this.dishId, _this.placeId)
                .subscribe(function (dishReviews) {
                console.log(dishReviews);
                _this.dishReviews = dishReviews;
                _this.dishName = dishReviews[0].name;
            });
            _this.dishSearchService.getPlace(_this.placeId)
                .subscribe(function (place) {
                _this.lat = +place.lat;
                _this.lng = +place.lng;
                _this.title = place.name;
            });
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
        tag_service_1.TagService])
], DishReviewComponent);
exports.DishReviewComponent = DishReviewComponent;
//# sourceMappingURL=dish-reviews.component.js.map