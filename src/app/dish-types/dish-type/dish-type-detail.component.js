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
var DishTypeDetailComponent = (function () {
    function DishTypeDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pageTitle = 'Dish Type Detail';
    }
    DishTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    DishTypeDetailComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/dishTypes']);
    };
    return DishTypeDetailComponent;
}());
DishTypeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './dish-type-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DishTypeDetailComponent);
exports.DishTypeDetailComponent = DishTypeDetailComponent;
//# sourceMappingURL=dish-type-detail.component.js.map