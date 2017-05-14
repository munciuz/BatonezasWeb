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
// import * as _ from 'lodash';
var DishSearchComponent = (function () {
    function DishSearchComponent(route, router, dishSearchService, tagService) {
        this.route = route;
        this.router = router;
        this.dishSearchService = dishSearchService;
        this.tagService = tagService;
        this.dishFilter = { dishName: '', dishId: null };
        this.cityFilter = { name: '', lat: null, lng: null };
        this.tagFilter = [];
        this.formedFilteredTagName = '';
        this.vegetarianFilter = false;
        this.ratingFilter = null;
    }
    DishSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishSearchService.getDishSearchPageModel()
            .subscribe(function (pageModel) {
            _this.dishReviewList = pageModel.dishReviewList;
            _this.filteredDishReviewList = pageModel.dishReviewList;
            _this.tagList = pageModel.tagList;
            _this.dishList = pageModel.dishList;
            console.log('got grouped dish reviews: ', pageModel);
        });
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
        tag_service_1.TagService])
], DishSearchComponent);
exports.DishSearchComponent = DishSearchComponent;
//# sourceMappingURL=dish-search.component.js.map