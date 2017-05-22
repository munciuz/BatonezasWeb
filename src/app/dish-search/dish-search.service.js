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
var http_1 = require("@angular/http");
var apis_1 = require("../shared/apis");
var httpClient_1 = require("../shared/httpClient");
var DishSearchService = (function () {
    function DishSearchService(http, apis, httpClient) {
        this.http = http;
        this.apis = apis;
        this.httpClient = httpClient;
    }
    DishSearchService.prototype.getDishSearchPageModel = function () {
        return this.httpClient.get(this.apis.DishReview.GetPageModel)
            .map(function (response) { return response.json(); });
    };
    DishSearchService.prototype.getDishReviews = function (dishId, placeId) {
        var url = this.apis.DishReview.GetAll + '?dishId=' + dishId + '&placeId=' + placeId;
        return this.httpClient.get(url)
            .map(function (response) { return response.json(); });
    };
    DishSearchService.prototype.getDishReview = function (id) {
        return this.httpClient.get(this.apis.DishReview.Get + id)
            .map(function (response) { return response.json(); });
    };
    DishSearchService.prototype.getPlace = function (id) {
        return this.httpClient.get(this.apis.Place.Get + id)
            .map(function (response) { return response.json(); });
    };
    DishSearchService.prototype.getTagList = function () {
        return this.httpClient.get(this.apis.Tag.GetAll)
            .map(function (response) { return response.json(); });
    };
    DishSearchService.prototype.deleteDishReview = function (id) {
        return this.httpClient.delete(this.apis.DishReview.Delete + id, id)
            .map(function (response) { return response.json(); });
    };
    return DishSearchService;
}());
DishSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, apis_1.Apis, httpClient_1.HttpClient])
], DishSearchService);
exports.DishSearchService = DishSearchService;
//# sourceMappingURL=dish-search.service.js.map