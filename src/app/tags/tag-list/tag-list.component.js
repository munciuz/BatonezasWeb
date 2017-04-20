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
var tag_service_1 = require("../tag.service");
var TagListComponent = (function () {
    function TagListComponent(tagService) {
        this.tagService = tagService;
        this.pageTitle = 'Tag\'ų sąrašas';
        this.showImage = true;
    }
    TagListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTagList()
            .subscribe(function (dishTypes) { return _this.tagList = dishTypes; }, function (error) { return _this.errorMessage = error; });
    };
    return TagListComponent;
}());
TagListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './tag-list.component.html',
        styleUrls: ['./tag-list.components.css']
    }),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagListComponent);
exports.TagListComponent = TagListComponent;
//# sourceMappingURL=tag-list.component.js.map