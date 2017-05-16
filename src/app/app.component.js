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
var dish_type_service_1 = require("./dish-types/dish-type.service");
var authentication_service_1 = require("./shared/authentication.service");
var user_service_1 = require("./users/user.service");
var AppComponent = (function () {
    function AppComponent(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.randomTitle = "Batonezas";
        this.logedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProfileData().subscribe(function (result) {
            _this.username = result.username;
            _this.logedIn = true;
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.Login({ username: this.username, password: this.password }).subscribe(function (result) {
            _this.password = '';
            _this.authenticationService.SetToken(result.access_token);
            window.location.reload();
        }, function (error) {
            _this.error = 'Blogi prisijungimo duomenys';
            _this.password = '';
            console.log(_this.error);
        });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.Reset();
        window.location.reload();
    };
    AppComponent.prototype.register = function () {
        console.log(this.authenticationService.GetToken());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'bat-app',
        moduleId: module.id,
        templateUrl: './app.component.html',
        providers: [dish_type_service_1.DishTypeService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map