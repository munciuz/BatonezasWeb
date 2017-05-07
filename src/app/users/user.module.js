"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_list_component_1 = require("./user-list/user-list.component");
var user_component_1 = require("./user/user.component");
var user_service_1 = require("./user.service");
var role_service_1 = require("./role.service");
var apis_1 = require("../shared/apis");
var shared_module_1 = require("../shared/shared.module");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            user_list_component_1.UserListComponent,
            user_component_1.UserComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'users', component: user_list_component_1.UserListComponent },
                { path: 'user/:id', component: user_component_1.UserComponent }
            ])
        ],
        providers: [user_service_1.UserService, role_service_1.RoleService, apis_1.Apis]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map