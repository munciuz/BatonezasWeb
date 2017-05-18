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
var user_service_1 = require("../user.service");
var role_service_1 = require("../role.service");
var tag_service_1 = require("../../tags/tag.service");
// import * as _ from 'lodash';
var UserComponent = (function () {
    function UserComponent(route, router, service, tagService, roleService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.tagService = tagService;
        this.roleService = roleService;
        this.username = '';
        this.email = '';
        this.role = { id: 0, name: '' };
        this.allRoles = [];
        this.pageTitle = 'Vartotojo administravimas';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            console.log('got a user ID: ', _this.userId);
            _this.service.getUser(_this.userId)
                .subscribe(function (user) {
                console.log('got user from server ', user);
                _this.user = user;
                _this.username = _this.user.username;
                _this.email = _this.user.email;
                _this.role = _this.user.role;
                _this.allRoles = _this.user.allRoles;
                if (_this.role == null) {
                    _this.role = _this.allRoles[1];
                }
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    UserComponent.prototype.onBackClicked = function () {
        this.router.navigate(['/users']);
    };
    UserComponent.prototype.onSave = function () {
        var _this = this;
        this.user = {
            id: this.userId,
            username: this.username,
            email: this.email,
            role: this.role,
            allRoles: null
        };
        this.service.editUser(this.user).subscribe(function (userId) {
            _this.result = userId;
            _this.router.navigate(['/users']);
        }, function (error) { return _this.errorMessage = error; });
    };
    UserComponent.prototype.setRole = function (role) {
        this.role = role;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './user.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService,
        tag_service_1.TagService,
        role_service_1.RoleService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map