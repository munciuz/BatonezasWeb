"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DishTypeService = (function () {
    function DishTypeService() {
    }
    DishTypeService.prototype.getDishTypeList = function () {
        var dishTypeList = [
            {
                Id: 1,
                Name: 'Dish Type 1',
                IsValid: true,
                TempImgUrl: 'http://www.saladworks.com/sites/default/files/Sandwich-AvocadoBLT.jpg'
            },
            {
                Id: 2,
                Name: 'Dish Type 2',
                IsValid: true,
                TempImgUrl: 'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4150.png'
            },
            {
                Id: 3,
                Name: 'Dish Type 3',
                IsValid: true,
                TempImgUrl: 'http://indianhealthyrecipes.com/wp-content/uploads/2016/11/vegetable-curd-sandwich-recipe.jpg'
            }
        ];
        return dishTypeList;
    };
    return DishTypeService;
}());
DishTypeService = __decorate([
    core_1.Component({}),
    core_1.Injectable()
], DishTypeService);
exports.DishTypeService = DishTypeService;
//# sourceMappingURL=dish-type.service.js.map