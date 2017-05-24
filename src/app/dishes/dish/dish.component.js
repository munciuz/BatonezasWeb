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
var dish_service_1 = require("../dish.service");
var tag_service_1 = require("../../tags/tag.service");
// import * as _ from 'lodash';
var DishComponent = (function () {
    function DishComponent(route, router, service, tagService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.tagService = tagService;
        this.name = '';
        this.selectedTags = [];
        this.allTags = [];
        this.pageTitle = 'Patiekalo administravimas';
        this.isValid = false;
        this.isConfirmed = false;
        this.errors = [];
    }
    DishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.dishId = params['id'];
            if (_this.dishId > 0) {
                _this.service.getDish(_this.dishId)
                    .subscribe(function (dish) {
                    _this.dish = dish;
                    _this.name = _this.dish.name;
                    _this.isValid = _this.dish.isValid;
                    _this.isConfirmed = _this.dish.isConfirmed;
                    _this.selectedTags = _this.dish.selectedTags;
                    _this.allTags = _this.dish.allTags;
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _this.tagService.getTagList()
                    .subscribe(function (tags) {
                    _this.allTags = tags;
                });
            }
        });
    };
    DishComponent.prototype.hasErrors = function () {
        return this.errors.length > 0;
    };
    DishComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/dishes']);
    };
    DishComponent.prototype.onSave = function () {
        var _this = this;
        this.dish = {
            name: this.name,
            id: this.dishId,
            isValid: this.isValid,
            isConfirmed: this.isConfirmed,
            selectedTags: this.selectedTags,
            allTags: null
        };
        this.errors = [];
        this.validate();
        if (this.errors.length === 0) {
            if (this.dishId == 0) {
                this.service.createDish(this.dish).subscribe(function (dishId) {
                    _this.result = dishId;
                    _this.router.navigate(['/dishes']);
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                this.service.editDish(this.dish).subscribe(function (dishId) {
                    _this.result = dishId;
                    _this.router.navigate(['/dishes']);
                }, function (error) {
                    // this.errorMessage = <any>error;
                    console.log(error);
                });
            }
        }
    };
    DishComponent.prototype.validate = function () {
        if (this.name.length == 0) {
            this.errors.push("Patiekalo pavadinimas yra privalomas");
        }
        if (this.selectedTags && this.selectedTags.length == 0) {
            this.errors.push("Būtina nors viena žymė");
        }
    };
    DishComponent.prototype.getTagButtonClass = function (tagId) {
        var buttonClass = 'btn btn-success';
        if (!this.isTagSelected(tagId)) {
            buttonClass += ' btn-outline';
        }
        return buttonClass;
    };
    DishComponent.prototype.tagToggled = function (tag) {
        console.log('tag toggled: ', tag);
        if (this.isTagSelected(tag.id)) {
            var index = this.tagIndex(tag.id);
            if (index > -1) {
                this.selectedTags.splice(index, 1);
            }
        }
        else {
            this.selectedTags.push(tag);
        }
    };
    DishComponent.prototype.tagIndex = function (tagId) {
        for (var i = 0; i < this.selectedTags.length; i++) {
            if (this.selectedTags[i].id === tagId) {
                return i;
            }
        }
        return -1;
    };
    DishComponent.prototype.isTagSelected = function (tagId) {
        for (var i = 0; i < this.selectedTags.length; i++) {
            if (this.selectedTags[i].id === tagId) {
                return true;
            }
        }
        return false;
    };
    return DishComponent;
}());
DishComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dish_service_1.DishService,
        tag_service_1.TagService])
], DishComponent);
exports.DishComponent = DishComponent;
//# sourceMappingURL=dish.component.js.map