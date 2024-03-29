"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var dish_type_module_1 = require("./dish-types/dish-type.module");
var tag_module_1 = require("./tags/tag.module");
var dish_module_1 = require("./dishes/dish.module");
var user_module_1 = require("./users/user.module");
var dish_search_module_1 = require("./dish-search/dish-search.module");
var place_search_module_1 = require("./place-search/place-search.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            dish_type_module_1.DishTypeModule,
            tag_module_1.TagModule,
            dish_module_1.DishModule,
            user_module_1.UserModule,
            dish_search_module_1.DishSearchModule,
            place_search_module_1.PlaceSearchModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map