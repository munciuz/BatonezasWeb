"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dish_list_component_1 = require("./dish-list/dish-list.component");
var dish_component_1 = require("./dish/dish.component");
var dish_service_1 = require("./dish.service");
var apis_1 = require("../shared/apis");
var shared_module_1 = require("../shared/shared.module");
var DishModule = (function () {
    function DishModule() {
    }
    return DishModule;
}());
DishModule = __decorate([
    core_1.NgModule({
        declarations: [
            dish_list_component_1.DishListComponent,
            dish_component_1.DishComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'dishes', component: dish_list_component_1.DishListComponent },
                { path: 'dish/:id', component: dish_component_1.DishComponent }
            ])
        ],
        providers: [dish_service_1.DishService, apis_1.Apis]
    })
], DishModule);
exports.DishModule = DishModule;
//# sourceMappingURL=dish.module.js.map