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
var dish_type_service_1 = require("./dish-type.service");
var DishTypeListComponent = (function () {
    function DishTypeListComponent(dishTypeService) {
        this.dishTypeService = dishTypeService;
        this.pageTitle = 'Dish Type List';
        this.filter = '';
        this.showImage = true;
    }
    DishTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishTypeService.getDishTypeList()
            .subscribe(function (dishTypes) { return _this.dishTypes = dishTypes; }, function (error) { return _this.errorMessage = error; });
    };
    DishTypeListComponent.prototype.toggleShowImage = function () {
        this.showImage = !this.showImage;
    };
    DishTypeListComponent.prototype.onRatingClicked = function (message) {
        console.log(message);
    };
    return DishTypeListComponent;
}());
DishTypeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bat-dish-type-list',
        templateUrl: './dish-type-list.component.html',
        styleUrls: ['./dish-type-list.components.css']
    }),
    __metadata("design:paramtypes", [dish_type_service_1.DishTypeService])
], DishTypeListComponent);
exports.DishTypeListComponent = DishTypeListComponent;
//# sourceMappingURL=dish-type-list.component.js.map