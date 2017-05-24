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
var tag_service_1 = require("../tag.service");
var TagComponent = (function () {
    function TagComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = 'Žymės administravimas';
        this.name = '';
        this.isValid = false;
        this.errors = [];
    }
    TagComponent.prototype.hasErrors = function () {
        return this.errors.length > 0;
    };
    TagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.tagId = params['id'];
            if (_this.tagId > 0) {
                _this.service.getTag(_this.tagId)
                    .subscribe(function (tag) {
                    _this.tag = tag;
                    _this.name = _this.tag.name;
                    _this.isValid = _this.tag.isValid;
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    TagComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/tags']);
    };
    TagComponent.prototype.onSave = function () {
        var _this = this;
        this.tag = {
            name: this.name,
            id: this.tagId,
            isValid: this.isValid
        };
        this.errors = [];
        this.validate();
        if (this.errors.length === 0) {
            if (this.tagId == 0) {
                this.service.createTag(this.tag).subscribe(function (tags) {
                    _this.result = tags;
                    _this.router.navigate(['/tags']);
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                this.service.editTag(this.tag).subscribe(function (tags) {
                    _this.result = tags;
                    _this.router.navigate(['/tags']);
                }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    TagComponent.prototype.validate = function () {
        if (this.name.length == 0) {
            this.errors.push("Žymės pavadinimas yra privalomas");
        }
    };
    return TagComponent;
}());
TagComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './tag.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        tag_service_1.TagService])
], TagComponent);
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map