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
var Observable_1 = require("rxjs/Observable");
var apis_1 = require("../shared/apis");
var httpClient_1 = require("../shared/httpClient");
var PlaceSearchService = (function () {
    function PlaceSearchService(http, apis, httpClient) {
        this.http = http;
        this.apis = apis;
        this.httpClient = httpClient;
    }
    PlaceSearchService.prototype.getPlaceReviewPageModel = function () {
        return this.httpClient.get(this.apis.PlaceReview.GetPageModel)
            .map(function (response) { return response.json(); });
    };
    PlaceSearchService.prototype.createPlaceReview = function (placeReview) {
        return this.httpClient.post(this.apis.PlaceReview.Create, placeReview)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    PlaceSearchService.prototype.getPlaceReviews = function (placeId) {
        var url = this.apis.PlaceReview.GetReviews + '?placeId=' + placeId;
        return this.httpClient.get(url)
            .map(function (response) { return response.json(); });
    };
    PlaceSearchService.prototype.deletePlaceReview = function (id) {
        return this.httpClient.delete(this.apis.PlaceReview.Delete + id, id)
            .map(function (response) { return response.json(); });
    };
    return PlaceSearchService;
}());
PlaceSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, apis_1.Apis, httpClient_1.HttpClient])
], PlaceSearchService);
exports.PlaceSearchService = PlaceSearchService;
//# sourceMappingURL=place-search.service.js.map