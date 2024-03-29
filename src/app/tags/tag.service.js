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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var apis_1 = require("../shared/apis");
var httpClient_1 = require("../shared/httpClient");
var TagService = (function () {
    function TagService(http, apis) {
        this.http = http;
        this.apis = apis;
    }
    TagService.prototype.getTagList = function () {
        return this.http.get(this.apis.Tag.GetAll)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getFilteredTagList = function (includeInvalid) {
        var url = this.apis.Tag.GetAll;
        // if (includeInvalid){
        url += "?includeInvalid=true";
        // }
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getTag = function (id) {
        return this.http.get(this.apis.Tag.Get + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.createTag = function (tag) {
        return this.http.post(this.apis.Tag.Create, tag)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TagService.prototype.editTag = function (tag) {
        return this.http.post(this.apis.Tag.Edit, tag)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TagService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return TagService;
}());
TagService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpClient_1.HttpClient, apis_1.Apis])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map