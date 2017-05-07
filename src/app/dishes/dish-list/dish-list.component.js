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
var dish_service_1 = require("../dish.service");
var DishListComponent = (function () {
    function DishListComponent(dishService) {
        this.dishService = dishService;
        this.pageTitle = 'patiekalų\'ų sąrašas';
        this.showImage = true;
    }
    DishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishList()
            .subscribe(function (dishes) { return _this.dishList = dishes; }, function (error) { return _this.errorMessage = error; });
    };
    return DishListComponent;
}());
DishListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish-list.component.html',
        styleUrls: ['./dish-list.components.css']
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishListComponent);
exports.DishListComponent = DishListComponent;
//# sourceMappingURL=dish-list.component.js.map