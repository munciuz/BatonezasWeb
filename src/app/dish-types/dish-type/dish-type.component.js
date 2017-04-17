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
var dish_type_service_1 = require("../dish-type.service");
var DishTypeComponent = (function () {
    function DishTypeComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = 'Edit';
        this.name = '';
        this.isValid = false;
    }
    DishTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getDishType(id)
                .subscribe(function (dishType) {
                _this.dishType = dishType;
                _this.name = _this.dishType.name;
                _this.isValid = _this.dishType.isValid;
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    DishTypeComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/dishTypes']);
    };
    DishTypeComponent.prototype.onSave = function () {
        var _this = this;
        this.dishType.name = this.name;
        this.isValid = this.isValid;
        this.service.editDishType(this.dishType).subscribe(function (dishTypes) { return _this.result = dishTypes; }, function (error) { return _this.errorMessage = error; });
    };
    return DishTypeComponent;
}());
DishTypeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish-type.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dish_type_service_1.DishTypeService])
], DishTypeComponent);
exports.DishTypeComponent = DishTypeComponent;
//# sourceMappingURL=dish-type.component.js.map