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
var http_1 = require("@angular/http");
// import { LocalStorage } from "angular2-localstorage/WebStorage";
var Observable_1 = require("rxjs/Observable");
var apis_1 = require("./apis");
// import { IUserProfile } from "../models/user/userProfile";
var AuthenticationService = (function () {
    function AuthenticationService(http, apis) {
        this.http = http;
        this.apis = apis;
        this.token = '';
        this.username = '';
    }
    AuthenticationService.prototype.GetToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.ResetToken = function () {
        this.token = '';
    };
    AuthenticationService.prototype.SetToken = function (token) {
        // LocalStorage.
        this.token = token;
    };
    AuthenticationService.prototype.Login = function (userData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apis.User.Login, "userName=" + encodeURIComponent(userData.username) +
            "&password=" + encodeURIComponent(userData.password) +
            "&grant_type=password", headers)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
        // return this.http.post(this.apis.User.Login, user, headers)
        //     .map((res: Response) => res.json())
        //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, apis_1.Apis])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map