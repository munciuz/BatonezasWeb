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
// import * as _ from 'lodash';
var DishComponent = (function () {
    function DishComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.name = '';
        this.selectedTags = [];
        this.allTags = [];
        this.pageTitle = 'Edit';
        this.isValid = false;
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
                    _this.selectedTags = _this.dish.selectedTags;
                    _this.allTags = _this.dish.allTags;
                    console.log(dish);
                }, function (error) { return _this.errorMessage = error; });
            }
        });
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
            selectedTags: this.selectedTags,
            allTags: null
        };
        console.log("on save dish: ", this.dish);
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
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    DishComponent.prototype.getTagButtonClass = function (tagId) {
        var buttonClass = 'btn btn-success';
        return buttonClass;
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
        dish_service_1.DishService])
], DishComponent);
exports.DishComponent = DishComponent;
//# sourceMappingURL=dish.component.js.map