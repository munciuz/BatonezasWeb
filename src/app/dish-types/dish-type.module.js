"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dish_type_list_component_1 = require("./dish-type-list/dish-type-list.component");
var dish_type_list_filter_pipe_1 = require("./dish-type-list/dish-type-list-filter.pipe");
var dish_type_component_1 = require("./dish-type/dish-type.component");
var dish_type_service_1 = require("./dish-type.service");
var dish_type_guard_service_1 = require("./dish-type-list/dish-type-guard.service");
var apis_1 = require("../shared/apis");
var shared_module_1 = require("../shared/shared.module");
var DishTypeModule = (function () {
    function DishTypeModule() {
    }
    return DishTypeModule;
}());
DishTypeModule = __decorate([
    core_1.NgModule({
        declarations: [
            dish_type_list_component_1.DishTypeListComponent,
            dish_type_component_1.DishTypeComponent,
            dish_type_list_filter_pipe_1.DishTypeListFilterPipe
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'dishTypes', component: dish_type_list_component_1.DishTypeListComponent },
                { path: 'dishtype/:id', canActivate: [dish_type_guard_service_1.DishTypeGuard], component: dish_type_component_1.DishTypeComponent }
            ])
        ],
        providers: [dish_type_service_1.DishTypeService, dish_type_guard_service_1.DishTypeGuard, apis_1.Apis]
    })
], DishTypeModule);
exports.DishTypeModule = DishTypeModule;
//# sourceMappingURL=dish-type.module.js.map